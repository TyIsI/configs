import { baseConfigs, baseOptions, jsxFeatureOptions } from '../lib/common.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsxConfig = generateFlatConfig(
    'jsx',
    createConfigSlice(
        '@tyisi/config-eslint/config/jsx',
        ...baseConfigs,
        ...baseOptions,
        ...jsxFeatureOptions,
        eslintConfigLoveWithoutTypescript,
        eslintConfigPrettierWithoutTypescript
    )
)

export default jsxConfig
