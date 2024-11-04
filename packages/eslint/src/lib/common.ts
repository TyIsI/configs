import type { ConfigType, ConfigTypes } from './types.js'

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

export const jsEslintConfigRecommended: ConfigType =
    jsEslint.configs.recommended
export const importFlatConfigTypescript: ConfigType =
    importPlugin.flatConfigs.typescript
export const jsxA11yFlatConfigRecommended: ConfigType =
    jsxA11y.flatConfigs.recommended

export const browserLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.browser }
}

export const commonJsLanguageOptions: ConfigType = {
    languageOptions: { ecmaVersion: 'latest', sourceType: 'commonjs' }
}

export const moduleJsLanguageOptions: ConfigType = {
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' }
}

export const nodeLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.node }
}

export const serviceWorkerLanguageOptions: ConfigType = {
    languageOptions: { globals: globals.serviceworker }
}

export const jsxA11yLanguageOptions: ConfigType = {
    languageOptions: jsxA11y.flatConfigs.recommended.languageOptions
}

export const commonRules = { rules: { ...rules.common, ...rules.imports } }
export const reactRules = { rules: rules.react }
export const tsRules = { rules: rules.ts }
export const tsxRules = { rules: rules.tsx }

export const reactVersionSettings: ConfigType = {
    settings: { react: { version: 'detect' } }
}

export const tsSettings: ConfigType = createImportResolverSettings({
    typescript: true
})

export const tsxSettings: ConfigType = createImportResolverSettings({
    typescript: true,
    extensions: ['.ts', '.tsx']
})

export const baseOptions: ConfigTypes = [
    jsEslintConfigRecommended,
    nodeLanguageOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript,
    commonRules
]

export const commonJsFeatureOptions: ConfigTypes = [commonJsLanguageOptions]

export const esmFeatureOptions: ConfigTypes = [moduleJsLanguageOptions]

export const jsxFeatureOptions: ConfigTypes = [
    jsxA11yFlatConfigRecommended,
    jsxA11yLanguageOptions,
    recommendedFlatReactPluginsConfig,
    browserLanguageOptions,
    serviceWorkerLanguageOptions,
    reactVersionSettings,
    reactRules
]

export const typescriptFeatureOptions: ConfigTypes = [
    importFlatConfigTypescript,
    eslintConfigLoveOnlyTypescript,
    eslintConfigPrettierOnlyTypescript,
    tsSettings,
    tsRules
]

export const tsxFeatureOptions: ConfigTypes = [
    ...typescriptFeatureOptions,
    ...jsxFeatureOptions,
    tsxRules
]
