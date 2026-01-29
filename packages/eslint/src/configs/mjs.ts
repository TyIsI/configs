import { baseConfigs, baseOptions, esmFeatureOptions } from '../lib/common.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsConfig = generateFlatConfig(
    'mjs',
    createConfigSlice(
        '@tyisi/config-eslint/config/mjs',
        ...baseConfigs,
        ...baseOptions,
        ...esmFeatureOptions
    )
)

export default mjsConfig
