import {
    eslintConfigLove,
    globals,
    importPlugin,
    jsxA11y
} from './lib/externals.js'
import {
    coerceConfigName,
    createConfigSlice,
    generateFlatConfig
} from './lib/functions.js'
import {
    reactVersionSettings,
    recommendedFlatReactPluginsConfig,
    rules,
    tsSettings
} from './lib/rules.js'

const tsxBaseConfig = createConfigSlice(
    '@tyisi/config-eslint/config/tsx',
    'tsx',
    tsSettings,
    recommendedFlatReactPluginsConfig,
    jsxA11y.flatConfigs.recommended,
    { languageOptions: jsxA11y.flatConfigs.recommended.languageOptions },
    { languageOptions: { globals: globals.serviceworker } },
    { languageOptions: { globals: globals.amd } },
    { languageOptions: { globals: globals.browser } },
    { languageOptions: { globals: globals.node } },
    { rules: rules.tsx },
    { rules: rules.react }
)

export const tsxConfig = generateFlatConfig(
    'tsx',
    coerceConfigName(
        'jsxA11y.flatConfigs.recommended',
        jsxA11y.flatConfigs.recommended
    ),
    coerceConfigName(
        'eslintPluginReact.configs.flat.recommended',
        recommendedFlatReactPluginsConfig
    ),
    coerceConfigName('react-version-settings', reactVersionSettings),
    coerceConfigName(
        'eslintConfigLove',
        importPlugin.flatConfigs.recommended,
        importPlugin.flatConfigs.typescript,
        eslintConfigLove
    ),
    coerceConfigName('tsxConfig', tsxBaseConfig)
)

if (process.env.DEBUG != null) console.dir({ tsxConfig })

export default tsxConfig
