import type { ConfigType } from '../lib/types.js'

import {
    commonJsFormatOptions,
    jsBaseOptions,
    jsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cjsx',
    ...baseConfigs,
    ...jsBaseOptions,
    ...commonJsFormatOptions,
    ...jsxFeatureOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const cjsxConfig = generateFlatConfig('cjsx', cjsxBaseConfig)

export default cjsxConfig
