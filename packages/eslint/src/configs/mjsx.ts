import {
    baseConfigs,
    baseOptions,
    esmFeatureOptions,
    jsxFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsxConfig = generateFlatConfig(
    'mjsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/mjsx',
        ...baseConfigs,
        ...baseOptions,
        ...jsxFeatureOptions,
        ...esmFeatureOptions
    )
)

export default mjsxConfig
