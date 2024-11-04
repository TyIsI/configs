import type { ConfigType } from '../lib/types.js'

import { baseOptions, typescriptFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/ts',
    ...baseConfigs,
    ...baseOptions,
    ...typescriptFeatureOptions
)

export const tsConfig = generateFlatConfig('ts', tsBaseConfig)

export default tsConfig
