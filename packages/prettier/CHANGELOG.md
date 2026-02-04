# @tyisi/config-prettier

## 5.0.0

### Major Changes

- a7a66e5: Fixed various issues with typing and skeleton config

  - Types were broken. (Pointing at full config.)
  - Abstract class generated undefined values.

## 4.0.0

### Major Changes

- fd959ae: Fresh updates!

## 3.0.0

### Major Changes

- Refactor of the prettier config to opt-out of full dependency set

  This is backwards compatible and now exposes the following configs in addition to the (default) full config:

  - base
  - full
  - sh
  - tailwindcss

  In addition, all configs expose the following chained methods to easily customize the configuration:

  - `withOptions(options: Prettier.Options)`: merge Prettier Options.
  - `withOverrides(...overrides: PrettierOverrides)`: add each Override argument to the overrides.
  - `withPlugins(...plugins: PrettierPlugins)`: add plugins

## 2.0.0

### Major Changes

- Updated all dependencies and made quality improvements

NOTE: There should not be any breaking changes, but to prevent accidental updates, any backend version changes will always cause a major bump.
