import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    esmFeatureOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mtsx',
    ...baseConfigs,
    ...baseOptions,
    ...tsxFeatureOptions,
    ...esmFeatureOptions
)

export const mtsxConfig = generateFlatConfig('mtsx', mtsxBaseConfig)

export default mtsxConfig
