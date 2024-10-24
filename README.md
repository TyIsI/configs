# @tyisi/configs

A collection of my most commonly used configurations

-   @tyisi/config-changelog: a git-cz config generator
-   @tyisi/config-eslint: various eslint configs
-   @tyisi/config-prettier: standard prettier config
-   @tyisi/config-stylelint: my standard stylelint config

## Technical Stuff

-   All packages are TS based and get packed with tsup to CJS and ESM packages, with types generated where/as needed.
-   Configs are dog-fooded as much as possible.
-   Uses git-cz for conventional commit messages and changelog

## Packages

## @tyisi/config-changelog

a git-cz config generator

### Features

-   Expressive commit messages

### Exports

| Export            | Type              | Status |
| ----------------- | ----------------- | ------ |
| default           | generateChangelog | Stable |
| generateChangelog | generateChangelog | Stable |

### Usage

Call `generateChangelog` with additional scopes beyond '_empty_' and '_all_'.

### Examples

The configuration for this repository:

```cjs
const { generateChangelog } = require('@tyisi/config-changelog')

module.exports = generateChangelog(
    'changelog',
    'eslint',
    'prettier',
    'stylelint'
)
```

[Source](/changelog.config.js)

A monorepo with backend, frontend and lib packages:

```cjs
const { generateChangelog } = require('@tyisi/config-changelog')

module.exports = generateChangelog('backend', 'frontend', 'lib')
```

Then call [git-cz](https://npmjs.com/package/git-cz):

```
$ npx git-cz@latest
```

Or with a scope:

```
~/project/packages/backend$ npx git-cz@latest --scope=backend
```

## @tyisi/config-prettier

standard prettier config

### Usage

Add `@tyisi/config-prettier` to your dependencies and:

-   set as the value of the `prettier` key in your `package.json`
-   set it in your `.prettierrc`
-   extend it in your local prettier config file

[Read More](https://prettier.io/docs/en/sharing-configurations#using-a-shareable-config)

## @tyisi/config-eslint

Various eslint configs.

### Supported structures and types

-   js
-   jsx
-   ts
-   tsx

### Features

-   Minimalist conventions through the use of [eslint-config-love](https://npmjs.com/package/eslint-config-love/)
-   Accessibility support through [eslint-plugin-jsx-a11y](https://npmjs.com/package/eslint-plugin-jsx-a11y)
-   React support through [eslint-plugin-react](https://npmjs.com/package/eslint-plugin-react)
-   Integrated prettier support
-   FlatConfig

### Exports

| Export         | Type     | Status      |
| -------------- | -------- | ----------- |
| default        | Combined | Development |
| combinedConfig | Combined | Development |
| configs        | Configs  | Stable      |

#### `configs`

| Key | Files  | Supports            | Status  |
| --- | ------ | ------------------- | ------- |
| js  | \*.js  | Javascript only     | Testing |
| jsx | \*.jsx | Javascript with JSX | Testing |
| ts  | \*.ts  | Typescript only     | Testing |
| tsx | \*.tsx | Typescript with JSX | Testing |

### Example

#### ESM

```mjs
import { configs } from '@tyisi/config-eslint'

export default configs.ts
```

[Source](/eslint.config.js)

## @tyisi/config-stylelint

my standard stylelint config

### Usage

Add `@tyisi/config-stylelint` to your dependencies and extend it in your local `stylelint.config.<ext>` file.
