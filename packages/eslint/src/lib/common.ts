import type { ConfigType, ConfigTypeRules, ConfigTypes } from './types.js'

import {
    eslintConfigLoveOnlyTypescript,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierOnlyTypescript,
    eslintConfigPrettierWithoutTypescript,
    globals,
    importPlugin,
    jsEslint,
    jsxA11y,
    recommendedFlatReactPluginsConfig
} from './externals.js'
import { createImportResolverSettings } from './functions.js'
import { rules } from './rules.js'

/** @public */
export const baseConfigs: ConfigTypes = [
    {
        name: '@tyisi/config-eslint/baseConfig/ignores',

        ignores: ['**/node_modules/', '**/build/', '**/dist/', '**/env.d.ts']
    }
]

/** @public */
export const jsEslintConfigRecommended: ConfigType =
    jsEslint.configs.recommended

/** @public */
export const importFlatConfigJavascript: ConfigType =
    importPlugin.flatConfigs.recommended


/** @public */
export const importFlatConfigTypescript: ConfigType =
    importPlugin.flatConfigs.typescript


/** @public */
export const jsxA11yFlatConfigRecommended: ConfigType =
    jsxA11y.flatConfigs.recommended


/** @public */
export const browserLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.browser }
}


/** @public */
export const browserRulesOptions: ConfigType = {
    rules: {
        'no-console': 'error'
    }
}


/** @public */
export const cliRulesOptions: ConfigType = {
    rules: {
        'no-console': 'off'
    }
}


/** @public */
export const commonJsLanguageOptions: ConfigType = {
    languageOptions: { ecmaVersion: 'latest', sourceType: 'commonjs' }
}


/** @public */
export const moduleJsLanguageOptions: ConfigType = {
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' }
}


/** @public */
export const nodeLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.node }
}


/** @public */
export const serviceWorkerLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.serviceworker }
}

/** @public */
export const jsxA11yLanguageOptions: ConfigType = {
    languageOptions: jsxA11y.flatConfigs.recommended.languageOptions
}


/** @public */
export const commonRules: ConfigTypeRules = {
    rules: { ...rules.common, ...rules.imports }
}


/** @public */
export const reactRules: ConfigTypeRules = { rules: rules.react }


/** @public */
export const tsRules: ConfigTypeRules = { rules: rules.ts }


/** @public */
export const tsxRules: ConfigTypeRules = { rules: rules.tsx }


/** @public */
export const reactVersionSettings: ConfigType = {
    settings: { react: { version: 'detect' } }
}


/** @public */
export const tsSettings: ConfigType = createImportResolverSettings({
    typescript: true
})


/** @public */
export const tsxSettings: ConfigType = createImportResolverSettings({
    typescript: true,
    extensions: ['.ts', '.tsx']
})


/** @public */
export const baseOptions: ConfigTypes = [
    jsEslintConfigRecommended,
    nodeLanguageOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript,
    commonRules
]


/** @public */
export const commonJsFeatureOptions: ConfigTypes = [commonJsLanguageOptions]


/** @public */
export const esmFeatureOptions: ConfigTypes = [moduleJsLanguageOptions]


/** @public */
export const jsxFeatureOptions: ConfigTypes = [
    jsxA11yFlatConfigRecommended,
    jsxA11yLanguageOptions,
    recommendedFlatReactPluginsConfig,
    browserLanguageOptions,
    browserRulesOptions,
    serviceWorkerLanguageOptions,
    reactVersionSettings,
    reactRules
]


/** @public */
export const typescriptFeatureOptions: ConfigTypes = [
    importFlatConfigTypescript,
    eslintConfigLoveOnlyTypescript,
    eslintConfigPrettierOnlyTypescript,
    tsSettings,
    tsRules
]

/** @public */
export const tsxFeatureOptions: ConfigTypes = [
    ...typescriptFeatureOptions,
    ...jsxFeatureOptions,
    tsxRules
]
