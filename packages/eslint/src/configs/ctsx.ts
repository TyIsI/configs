import {
    baseConfigs,
    baseOptions,
    commonJsFeatureOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsxConfig = generateFlatConfig(
    'ctsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/ctsx',
        ...baseConfigs,
        ...baseOptions,
        ...tsxFeatureOptions,
        ...commonJsFeatureOptions
    )
)

export default ctsxConfig
