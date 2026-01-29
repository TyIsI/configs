import { baseConfigs, baseOptions, tsxFeatureOptions } from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const tsxConfig = generateFlatConfig(
    'tsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/tsx',
        ...baseConfigs,
        ...baseOptions,
        ...tsxFeatureOptions
    )
)

export default tsxConfig
