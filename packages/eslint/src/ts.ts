import type { Linter } from 'eslint'
import { eslintConfigLove, importPlugin } from './lib/externals.js'
import {
    coerceConfigName,
    createConfigSlice,
    generateFlatConfig
} from './lib/functions.js'
import { rules, tsSettings } from './lib/rules.js'

const tsBaseConfig: Linter.Config = createConfigSlice(
    '@tyisi/config-eslint/config/ts',
    'ts',
    tsSettings,
    {
        rules: rules.ts
    }
)

export const tsConfig = generateFlatConfig(
    'ts',
    coerceConfigName(
        'eslintConfigLove',
        importPlugin.flatConfigs.recommended,
        importPlugin.flatConfigs.typescript,
        eslintConfigLove
    ),
    coerceConfigName('tsConfig', tsBaseConfig)
)

if (process.env.DEBUG != null) console.dir({ tsConfig })

export default tsConfig
