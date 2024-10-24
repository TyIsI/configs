# @tyisi/config-eslint

Various eslint configs.

## Supported structures and types

-   js
-   jsx
-   ts
-   tsx

## Features

-   Minimalist conventions through the use of [eslint-config-love](https://npmjs.com/package/eslint-config-love/)
-   Accessibility support through [eslint-plugin-jsx-a11y](https://npmjs.com/package/eslint-plugin-jsx-a11y)
-   React support through [eslint-plugin-react](https://npmjs.com/package/eslint-plugin-react)
-   Integrated prettier support
-   FlatConfig

## Exports

| Export         | Type     | Status      |
| -------------- | -------- | ----------- |
| default        | Combined | Development |
| combinedConfig | Combined | Development |
| configs        | Configs  | Stable      |

### `configs`

| Key | Files  | Supports            | Status  |
| --- | ------ | ------------------- | ------- |
| js  | \*.js  | Javascript only     | Testing |
| jsx | \*.jsx | Javascript with JSX | Testing |
| ts  | \*.ts  | Typescript only     | Testing |
| tsx | \*.tsx | Typescript with JSX | Testing |

## Example

### ESM

```mjs
import { configs } from '@tyisi/config-eslint'

export default configs.ts
```

[Source](/eslint.config.js)
