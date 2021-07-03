# Javascript/Typescript Kata Runner

This repository allows running training katas written in Javascript or Typescript using NodeJS and Jest Testing Framework.

## Install

- Clone this repo
- run `npm install`

## Tools

NPM will install some tools which you can use:

- ts-node-dev: Runs Typescript (and Javascript) code
- jest: Testing framework
- eslint: Typescript and Javascript Linter

## Usage

You will find two folders in the root:

- src: The source files will be placed here
- test: The tests files will be placed here. The name of the tests must end in .spec or .test.

You have available the following scripts in package.json:

- Run `npm test` to run the tests placed inside the test folder
- Run `npm run code src/your-file` to run your file with ts-node-dev
- Run `npm run watch src/your.file` to run your file with ts-node-dev in watch mode
- Run `npm run linter` to list eslint errors
- Run `npm run linter:fix`to list and fix eslint errors
- Run `npm run check-types` to check TS types and show errors

If you are writing JS, you can disable Typescript eslint rules removing `"plugin:@typescript-eslint/recommended"` from `.eslintrc.js`

## Example: Gilded Rose

You can find the Gilded Rose Refactoring Kata in this branch: https://github.com/albert-gonzalez/kata-runner-nodejs/tree/gilded-rose-typescript
