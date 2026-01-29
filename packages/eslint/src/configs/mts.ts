import {
    baseConfigs,
    baseOptions,
    esmFeatureOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsConfig = generateFlatConfig(
    'mts',
    createConfigSlice(
        '@tyisi/config-eslint/config/mts',
        ...baseConfigs,
        ...baseOptions,
        ...typescriptFeatureOptions,
        ...esmFeatureOptions
    )
)

export default mtsConfig
