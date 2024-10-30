import type { ConfigType } from '../lib/types.js'

import {
    jsBaseOptions,
    moduleJsFormatOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mtsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...tsxFeatureOptions,
    ...moduleJsFormatOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const mtsxConfig = generateFlatConfig('mtsx', mtsxBaseConfig)

export default mtsxConfig
