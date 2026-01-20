# @tyisi/config-prettier

standard prettier config

## Usage

Add `@tyisi/config-prettier` to your dependencies and:

- set as the value of the `prettier` key in your `package.json`
- set it in your `.prettierrc`
- extend it in your local prettier config file

[Read More](https://prettier.io/docs/en/sharing-configurations#using-a-shareable-config)

### Exported

| export   | description                              |
| -------- | ---------------------------------------- |
| _none_   | Full config, with `sh` and `tailwindcss` |
| base     | Base configuration without plugins       |
| full     | Full config, with `sh` and `tailwindcss` |
| sh       | Shellscript formatting                   |
| tailwind | Tailwind CSS plugin and configuration    |

## API

This prettier config comes with Typescript types, a `Config` class that can be extended and so helper methods that make it easier to extend the configuration.

### withOptions

`withOptions` takes a standard Prettier config object and returns the config object itself.

It will also merge/add overrides and plugins from that object.

### withOverrides

`withOverrides` takes multiple standard Prettier override configs as its arguments and returns the config object itself.

### withPlugins

`withPlugins` takes multiple standard Prettier plugin definitions as its arguments and returns the config object itself.

### Examples

See the configs in the `src` directory for examples.

- [base](./src/base.ts)
- [full](./src/full.ts)
- [sh](./src/sh.ts)
- [tailwind](./src/tailwind.ts)
