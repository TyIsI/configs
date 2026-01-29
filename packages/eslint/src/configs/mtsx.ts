import {
    baseConfigs,
    baseOptions,
    esmFeatureOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsxConfig = generateFlatConfig(
    'mtsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/mtsx',
        ...baseConfigs,
        ...baseOptions,
        ...tsxFeatureOptions,
        ...esmFeatureOptions
    )
)

export default mtsxConfig
