import type { ConfigType } from '../lib/types.js'

import { jsBaseOptions, typescriptFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/ts',
    ...baseConfigs,
    ...jsBaseOptions,
    ...typescriptFeatureOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const tsConfig = generateFlatConfig('ts', tsBaseConfig)

export default tsConfig
