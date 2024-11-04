import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    commonJsFeatureOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cts',
    ...baseConfigs,
    ...baseOptions,
    ...typescriptFeatureOptions,
    ...commonJsFeatureOptions
)

export const ctsConfig = generateFlatConfig('cts', ctsBaseConfig)

export default ctsConfig
