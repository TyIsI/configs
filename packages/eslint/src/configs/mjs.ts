import type { ConfigType } from '../lib/types.js'

import { jsBaseOptions, moduleJsFormatOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mjs',
    ...baseConfigs,
    ...jsBaseOptions,
    ...moduleJsFormatOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const mjsConfig = generateFlatConfig('mjs', mjsBaseConfig)

export default mjsConfig
