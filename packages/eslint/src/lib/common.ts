import type { ConfigType, ConfigTypes } from './types.js'

import {
    globals,
    importPlugin,
    jsEslint,
    jsxA11y,
    recommendedFlatReactPluginsConfig
} from './externals.js'
import { rules } from './rules.js'

export const jsEslintConfigRecommended: ConfigType =
    jsEslint.configs.recommended
export const importFlatConfigRecommended: ConfigType =
    importPlugin.flatConfigs.recommended
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

export const commonRules = { rules: { ...rules.common, ...rules.import } }
export const reactRules = { rules: rules.react }
export const tsRules = { rules: rules.ts }
export const tsxRules = { rules: rules.tsx }

export const reactVersionSettings: ConfigType = {
    settings: { react: { version: 'detect' } }
}

export const tsSettings: ConfigType = {
    settings: {
        'import/resolver': {
            // You will also need to install and configure the TypeScript resolver
            // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
            typescript: true,
            node: {
                extensions: ['.ts']
            }
        }
    }
}

export const jsBaseOptions: ConfigTypes = [
    jsEslintConfigRecommended,
    importFlatConfigRecommended,
    nodeLanguageOptions,
    commonRules
]

export const commonJsFormatOptions: ConfigTypes = [commonJsLanguageOptions]

export const moduleJsFormatOptions: ConfigTypes = [moduleJsLanguageOptions]

export const jsxFeatureOptions: ConfigTypes = [
    jsxA11yFlatConfigRecommended,
    jsxA11yLanguageOptions,
    recommendedFlatReactPluginsConfig,
    browserLanguageOptions,
    nodeLanguageOptions,
    serviceWorkerLanguageOptions,
    reactRules,
    reactVersionSettings
]

export const typescriptFeatureOptions: ConfigTypes = [tsSettings, tsRules]

export const tsxFeatureOptions: ConfigTypes = [
    ...jsxFeatureOptions,
    tsxRules,
    ...typescriptFeatureOptions
]
