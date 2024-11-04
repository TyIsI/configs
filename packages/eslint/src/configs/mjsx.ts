import type { ConfigType } from '../lib/types.js'

import {
    baseOptions,
    esmFeatureOptions,
    jsxFeatureOptions
} from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsxBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mjsx',
    ...baseConfigs,
    ...baseOptions,
    ...jsxFeatureOptions,
    ...esmFeatureOptions
)

export const mjsxConfig = generateFlatConfig('mjsx', mjsxBaseConfig)

export default mjsxConfig
