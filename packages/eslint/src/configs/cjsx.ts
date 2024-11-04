import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    commonJsFeatureOptions,
    jsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const cjsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cjsx',
    ...baseConfigs,
    ...baseOptions,
    ...jsxFeatureOptions,
    ...commonJsFeatureOptions
)

export const cjsxConfig = generateFlatConfig('cjsx', cjsxBaseConfig)

export default cjsxConfig
