import type { ConfigType } from '../lib/types.js'

import {
    jsBaseOptions,
    moduleJsFormatOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mtsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mts',
    ...baseConfigs,
    ...jsBaseOptions,
    ...typescriptFeatureOptions,
    ...moduleJsFormatOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const mtsConfig = generateFlatConfig('mts', mtsBaseConfig)

export default mtsConfig
