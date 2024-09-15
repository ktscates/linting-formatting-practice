# Angular Code Quality Enforcer

## Project Description

This Angular project demonstrates proficiency in configuring and using ESLint and Prettier to improve code quality and consistency. The application utilizes Tailwind CSS for styling and showcases a responsive layout. The project emphasizes the importance of code quality with proper linting and formatting practices.

## Features

- Responsive layout with mobile-friendly design
- Tailwind CSS for styling
- Component-based architecture

## Technologies Used

- Angular for frontend framework
- Tailwind CSS for styling
- Jest for testing
- ESLint for linting
- Prettier for code formatting

## ESLint Configuration

### Installation

To set up ESLint and Prettier, install the necessary packages:

```bash
ng add @angular-eslint/schematics
npm install eslint eslint-plugin-prettier eslint-config-prettier --save-dev
npm install prettier  --save-dev
```

### Configuration

.eslintrc.json file

```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@angular-eslint/recommended", "plugin:@angular-eslint/template/process-inline-templates", "plugin:prettier/recommended"],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended", "plugin:@angular-eslint/template/accessibility"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "warn",
        "max-len": ["warn", { "code": 80 }]
      }
    }
  ]
}
```

.prettierrc file

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "arrowParens": "avoid"
}
```

angular.json file

```bash
"lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": ["src/**/*.ts", "src/**/*.html"]
          }
        }
```

package.json file

```bash
    "lint": "ng lint",
    "format": "prettier --write \"src/**/*.{ts,html,css,scss}\"",
    "lint:fix": "npm run lint && npm run format",
    "prepare": "husky install"
```

### Pre-commit hook

```bash
npm install --save-dev husky
npx husky install


#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:fix
```

### Sample Component

The project includes a sample component demonstrating adherence to linting and formatting rules. The component is styled with Tailwind CSS and follows the configured linting and formatting rules.

## Explanation of ESLint and Prettier Configurations

### ESLint Configuration

- Directive Selector: Enforces the use of camelCase for Angular directives.
- Component Selector: Enforces the use of kebab-case for Angular components.
- Accessibility: Includes accessibility rules for Angular templates.

### Prettier Configuration

- singleQuote: Use single quotes instead of double quotes.
- semi: No semicolons at the end of statements.
- trailingComma: Trailing commas in ES5 syntax.
- arrowParens: Omit parentheses when possible in arrow functions.

## Brief Guide on How to Use the Linting and Formatting Tools

- Linting: To check for linting issues, run npm run lint. To automatically fix linting issues, run npm run lint:fix.

- Formatting: To format code, run npm run format. To automatically fix formatting issues, run npm run format:fix.

- Pre-commit Hook: Husky will run linting and formatting checks before each commit, ensuring code quality is maintained throughout development.

## Live Link

You can access the deployed application at [Linting Formatting Practice](https://ktscates-linting-formattig-practice.netlify.app/).
