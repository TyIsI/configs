import jsEslint from '@eslint/js'
import eslintConfigLove from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import globals from 'globals'

import type { ConfigType } from './types.js'
import type { TSESLint } from '@typescript-eslint/utils'

import { baseExcludeRules } from './constants.js'
import { withFilteredConfigProp } from './functions.js'

/** @public */
export {
    eslintConfigLove,
    eslintConfigPrettier,
    eslintPluginReact,
    globals,
    importPlugin,
    jsEslint,
    jsxA11y
}

/** @public */
export const eslintConfigLoveWithoutTypescript: ConfigType = {
    plugins: withFilteredConfigProp(
        eslintConfigLove,
        'plugins',
        'exclude',
        // @ts-expect-error -- TODO: FIX ME YOLO
        '@typescript-eslint'
    ),
    rules: withFilteredConfigProp(
        eslintConfigLove,
        'rules',
        'exclude',
        ...baseExcludeRules,
        '@typescript-eslint'
    )
}

/** @public */
export const eslintConfigPrettierWithoutTypescript: ConfigType = {
    rules: withFilteredConfigProp(
        eslintConfigPrettier,
        'rules',
        'exclude',
        ...baseExcludeRules,
        '@typescript-eslint'
    )
}

/** @public */
export const eslintConfigLoveOnlyTypescript: TSESLint.FlatConfig.Config = {
    linterOptions: eslintConfigLove.linterOptions,
    languageOptions: eslintConfigLove.languageOptions,
    plugins: withFilteredConfigProp(
        eslintConfigLove,
        'plugins',
        'only',
        '@typescript-eslint',
        'import'
    ),
    rules: withFilteredConfigProp(
        eslintConfigLove,
        'rules',
        'only',
        '@typescript-eslint',
        'import'
    )
}

/** @public */
export const eslintConfigPrettierOnlyTypescript: ConfigType = {
    rules: withFilteredConfigProp(
        eslintConfigLove,
        'rules',
        'only',
        '@typescript-eslint'
    )
}

/** @public */
export const recommendedFlatReactPluginsConfig: ConfigType = {
    plugins: {
        react: {
            ...eslintPluginReact,
            rules: eslintPluginReact.rules
        }
    },

    languageOptions: eslintPluginReact.configs.flat.recommended.languageOptions,

    rules: eslintPluginReact.configs.flat.recommended.rules
}
