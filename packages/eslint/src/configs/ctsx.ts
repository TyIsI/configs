import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    commonJsFeatureOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/ctsx',
    ...baseConfigs,
    ...baseOptions,
    ...tsxFeatureOptions,
    ...commonJsFeatureOptions
)

export const ctsxConfig = generateFlatConfig('ctsx', ctsxBaseConfig)

export default ctsxConfig
