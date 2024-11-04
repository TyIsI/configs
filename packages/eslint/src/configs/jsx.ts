import type { ConfigType } from '../lib/types.js'

import { baseOptions, jsxFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/jsx',
    ...baseConfigs,
    ...baseOptions,
    ...jsxFeatureOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const jsxConfig = generateFlatConfig('jsx', jsxBaseConfig)

export default jsxConfig
