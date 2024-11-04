import type { ConfigType } from '../lib/types.js'

import { baseOptions, commonJsFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cjs',
    ...baseConfigs,
    ...baseOptions,
    ...commonJsFeatureOptions
)

export const cjsConfig = generateFlatConfig('cjs', cjsBaseConfig)

export default cjsConfig
