import globals from 'globals'
import {
    eslintConfigLove,
    importPlugin,
    jsEslint,
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
    rules
} from './lib/rules.js'

const jsxBaseConfig = createConfigSlice(
    '@tyisi/config-eslint/config/jsx',
    'jsx',
    jsEslint.configs.recommended,
    recommendedFlatReactPluginsConfig,
    jsxA11y.flatConfigs.recommended,
    { languageOptions: jsxA11y.flatConfigs.recommended.languageOptions },
    { languageOptions: { globals: globals.serviceworker } },
    { languageOptions: { globals: globals.amd } },
    { languageOptions: { globals: globals.browser } },
    { languageOptions: { globals: globals.node } },
    { rules: rules.react }
)

export const jsxConfig = generateFlatConfig(
    'jsx',
    coerceConfigName(
        'jsEslint.configs.recommended',
        jsEslint.configs.recommended
    ),
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
        eslintConfigLove
    ),
    coerceConfigName('jsxConfig', jsxBaseConfig)
)

if (process.env.DEBUG != null) console.dir({ jsxConfig })

export default jsxConfig
