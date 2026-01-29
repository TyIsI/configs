import {
    baseConfigs,
    baseOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsConfig = generateFlatConfig(
    'ts',
    createConfigSlice(
        '@tyisi/config-eslint/config/ts',
        ...baseConfigs,
        ...baseOptions,
        ...typescriptFeatureOptions
    )
)

export default tsConfig
