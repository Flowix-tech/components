const { program } = require('commander');
const ora = require('ora');
const path = require('path');
const handlerbars = require('handlebars');
const { copy } = require('fs-extra');
const walk = require('klaw');
const fs = require('fs');

const registerHelpers = () => {
  handlerbars.registerHelper('capitalize', value => value[0].toUpperCase() + value.substring(1));
};

const generate = async (name, args, spinner) => {
  const src = path.resolve(__dirname, '..', 'packages', '.template');
  const dest = path.resolve(__dirname, '..', 'packages', name);
  registerHelpers();
  try {
    // Copy whole template file into dest, then format it with handlebars
    await copy(src, dest, { overwrite: false, errorOnExist: true });
    // Iterate through files
    for await (const file of walk(dest)) {
      // Check for the paths - dirs and folders
      const path = handlerbars.compile(file.path)(args);
      if (file.path !== path) {
        if (fs.existsSync(file.path)) {
          fs.renameSync(file.path, path);
        }
      }
      if (!file.stats.isDirectory()) {
        const content = await fs.readFileSync(path, 'utf8');
        const data = handlerbars.compile(content)(args);
        fs.writeFileSync(path, data, 'utf8');
      }
    }
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};

program
  .description('create new component package')
  .argument('<name>', 'PackageName')
  .action(async name => {
    const spinner = ora();
    try {
      spinner.start();
      await generate(
        name,
        {
          name: name
        },
        spinner
      );
      spinner.succeed('Success');
    } catch (err) {
      spinner.fail(err.message || 'ERROR');
      process.exit(1);
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
