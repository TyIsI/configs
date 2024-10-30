import type { ConfigType } from '../lib/types.js'

import { commonJsFormatOptions, jsBaseOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cjs',
    ...baseConfigs,
    ...jsBaseOptions,
    ...commonJsFormatOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const cjsConfig = generateFlatConfig('cjs', cjsBaseConfig)

export default cjsConfig
