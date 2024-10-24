# @tyisi/config-changelog

a git-cz config generator

## Features

-   Expressive commit messages

## Exports

| Export            | Type              | Status |
| ----------------- | ----------------- | ------ |
| default           | generateChangelog | Stable |
| generateChangelog | generateChangelog | Stable |

## Usage

Call `generateChangelog` with additional scopes beyond '_empty_' and '_all_'.

## Examples

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
