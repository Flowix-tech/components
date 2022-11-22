const { program } = require('commander');
const ora = require('ora');
const execa = require('execa');

const getCurrentBranch = async () => {
  let res;
  try {
    const branch = await execa('git', ['branch', '--show-current']);
    res = branch.stdout.toString();
  } catch (err) {
    console.log('error getting current branch');
    throw err;
  }
  return res;
};

program
  .description('Tag, publish and release new version')
  .arguments('[version]')
  .option('-m', '--main <main>', 'Main branch name')
  .action(async bump => {
    const spinner = ora();
    try {
      spinner.start();
      console.log('PROGRAM', program.opts().main);
      const currentBranch = await getCurrentBranch();
      console.log('current branch ', currentBranch);
    } catch (err) {
      console.log(err);
    } finally {
      spinner.stop();
    }
  })
  .parse(process.argv);
