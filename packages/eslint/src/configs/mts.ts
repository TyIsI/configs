import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    esmFeatureOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mts',
    ...baseConfigs,
    ...baseOptions,
    ...typescriptFeatureOptions,
    ...esmFeatureOptions
)

export const mtsConfig = generateFlatConfig('mts', mtsBaseConfig)

export default mtsConfig
