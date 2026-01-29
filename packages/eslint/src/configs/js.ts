import { baseConfigs, baseOptions } from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsConfig = generateFlatConfig(
    'js',
    createConfigSlice(
        '@tyisi/config-eslint/config/js',
        ...baseConfigs,
        ...baseOptions
    )
)

export default jsConfig
