import {
    baseConfigs,
    baseOptions,
    commonJsFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsConfig = generateFlatConfig(
    'cjs',
    createConfigSlice(
        '@tyisi/config-eslint/config/cjs',
        ...baseConfigs,
        ...baseOptions,
        ...commonJsFeatureOptions
    )
)

export default cjsConfig
