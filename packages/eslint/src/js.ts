import type { Linter } from 'eslint'
import { eslintConfigLove, importPlugin, jsEslint } from './lib/externals.js'
import {
    coerceConfigName,
    createConfigSlice,
    generateFlatConfig
} from './lib/functions.js'
import { rules } from './lib/rules.js'

const jsBaseConfig: Linter.Config = createConfigSlice(
    '@tyisi/config-eslint/config/js',
    'js',
    jsEslint.configs.recommended,
    { languageOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
    { rules: rules.common }
)

export const jsConfig = generateFlatConfig(
    'js',
    coerceConfigName(
        'jsEslint.configs.recommended',
        jsEslint.configs.recommended
    ),
    coerceConfigName(
        'eslintConfigLove',
        importPlugin.flatConfigs.recommended,
        eslintConfigLove
    ),
    coerceConfigName('jsConfig', jsBaseConfig)
)

if (process.env.DEBUG != null) console.dir({ jsConfig })

export default jsConfig
