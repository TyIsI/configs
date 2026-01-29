import {
    baseConfigs,
    baseOptions,
    commonJsFeatureOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsConfig = generateFlatConfig(
    'cts',
    createConfigSlice(
        '@tyisi/config-eslint/config/cts',
        ...baseConfigs,
        ...baseOptions,
        ...typescriptFeatureOptions,
        ...commonJsFeatureOptions
    )
)

export default ctsConfig
