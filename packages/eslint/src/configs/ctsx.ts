import type { ConfigType } from '../lib/types.js'

import {
    commonJsFormatOptions,
    jsBaseOptions,
    tsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/ctsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...tsxFeatureOptions,
    ...commonJsFormatOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const ctsxConfig = generateFlatConfig('ctsx', ctsxBaseConfig)

export default ctsxConfig
