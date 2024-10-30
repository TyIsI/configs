import type { ConfigType } from '../lib/types.js'

import { jsBaseOptions, jsxFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/jsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...jsxFeatureOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const jsxConfig = generateFlatConfig('jsx', jsxBaseConfig)

export default jsxConfig
