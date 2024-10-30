import type { ConfigType } from '../lib/types.js'

import {
    jsBaseOptions,
    jsxFeatureOptions,
    moduleJsFormatOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mjsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...moduleJsFormatOptions,
    ...jsxFeatureOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const mjsxConfig = generateFlatConfig('mjsx', mjsxBaseConfig)

export default mjsxConfig
