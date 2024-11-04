import type { ConfigType } from '../lib/types.js'

import { baseOptions, tsxFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/tsx',
    ...baseConfigs,
    ...baseOptions,
    ...tsxFeatureOptions
)

export const tsxConfig = generateFlatConfig('tsx', tsxBaseConfig)

export default tsxConfig
