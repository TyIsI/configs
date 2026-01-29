import {
    baseConfigs,
    baseOptions,
    commonJsFeatureOptions,
    jsxFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsxConfig = generateFlatConfig(
    'cjsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/cjsx',
        ...baseConfigs,
        ...baseOptions,
        ...jsxFeatureOptions,
        ...commonJsFeatureOptions
    )
)

export default cjsxConfig
