# Unit testing frameworks in Javascript - Basic

## Project setup
  1. Run comand: `git init`
  2. Run comand: `npm init -y`
  3. Add ".gitignore" file

## Basic instructions
  1. Run comand: `npm install eslint`
  2. Run comand: `npx eslint --init`
     - How would you like to use ESLint? --> ... and enforce code style
     - JavaScript modules (import/export)
     - None of these
     - Does your project use TypeScript? --> No
     - Where does your code run? --> Node
     - Use a popular style guide
     - Which style guide do you want to follow? --> Google
     - W9jat format do you want your config file to be in? --> JSON
     - Would you like to install them now? --> Yes
     - Which package manager do you want to use? --> npm
      Result: Added "eslint-config-google" to the package.json; Added ".eslintrc.json" file
  3. Run comand: `npm install mocha`
  4. Run comand: `npm i mochawesome`
  5. Run comand: `npm i chai`
  6. Run comand: `npm i c8`
  7. Run comand: `npm i hasky`

## Update ".eslintrc.json" file
  1. Open file and add rures:
    ```json
    "rules": {
        "linebreak-style": "off",
        "require-jsdoc": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }], // indents in the code of 4 spaces, taking into account switch...case
        "camelcase": "error", // camelCase variable and function names
        "for-direction": "error", // checking the for loop for a finite number of iterations
        "object-curly-spacing": "off",
        "max-len": ["error", 100], // maximum string length
        "no-multiple-empty-lines": "error" // no more than 2 blank lines in a row
    }
    ```

## Important notice
  1. Open "package.json" file
  2. Add "type": "module" --> need for


## Adding code coverage checking tool

### C8
Code-coverage using Node.js' built in functionality that's compatible with Istanbul's reporters.

1. Create new ".c8rc.json" file
2. Add:
   ```json
   {
        "check-coverage": true,
        "branches": 80,
        "lines": 80,
        "functions": 100,
        "statments": 80,
        "reporter": ["html", "text"]
    }
   ```
3. Add scritp "coverage": "c8 npm test" to "package.json" file
4. Run comand: `npm run coverage`
5. Open results: "coverage" --> "index.html"


## Mochawesome reporter
Mochawesome is a custom reporter for use with the Javascript testing framework, mocha.
It is compatible with Node.js (>=10) and, when used together with the mochawesome-report-generator, it generates a self-contained HTML/CSS report that enhances the visualization of your test executions.


## Improving code coverage
1. Added a test that the coverage will be 100%.
2. Run comand: `npm run coverage`


## Adding Eslint

ESLint is a utility that detects and reports patterns present in ECMAScript/JavaScript code, aiming to promote code consistency and prevent errors. In several aspects, it shares similarities with JSLint and JSHint, but with a few differences:

- ESLint uses Espree for JavaScript parsing;
- ESLint uses an AST to evaluate patterns in code;
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

1. Add ".eslintignore" file with:
   ```
    node_modules
    coverage
    mochawesome-report
   ```
2. Update "package.json" file to script
   ```
    "lint": "eslint ./ --fix"
   ```

## Setting up pre-commit hook
The package.json file's "scripts" property provides various predefined scripts and their associated life cycle events, as well as the ability to include custom scripts.
You can execute these scripts using the commands npm run-script <stage> or npm run <stage> for brevity.
Additionally, pre and post commands with corresponding names will also be executed (e.g., premyscript, myscript, postmyscript).
To run scripts from dependencies, you can use npm explore <pkg> -- npm run <stage>.

1. Update "package.json" file to script
   ```
    "prepare": "husky install"
   ```
2. Run comand: `npm run prepare`
3. Run comand: `npx husky add .husky/pre-commit "npm run lint"`
Result: The command `npm run lint` will be run before the commit, and if everything is OK, the commit will be completed.
