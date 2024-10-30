import type { ConfigType } from '../lib/types.js'

import { jsBaseOptions, tsxFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/tsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...tsxFeatureOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const tsxConfig = generateFlatConfig('tsx', tsxBaseConfig)

export default tsxConfig
