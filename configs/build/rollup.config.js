const path = require('path');
const fs = require('fs');
const del = require('rollup-plugin-delete');
const nodeResolve= require( '@rollup/plugin-node-resolve')
const typescript=require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel')
const tsc = require("typescript")
const pkg = require(path.resolve("./package.json"))
const isTSPackage = fs.existsSync(path.resolve('tsconfig.build.json'));


const externalPackages = [
  "react",
  "react-dom",
  "styled-components"
]

module.exports = {
  input: 'src/index.ts',
  external: externalPackages,
  output: [
    { file: pkg.main, format: 'cjs' } , {file: pkg.module, format: "es"}
  ],
  plugins:[
    del({targets: "dist/*"}),
    isTSPackage && typescript({
      tsconfig: "tsconfig.build.json",
      typescript: tsc,
      declaration: true,
      declarationDir: "./dist",
    }),
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: "bundled"
    })
  ]
}

