import type { ConfigType } from '../lib/types.js'

import { baseOptions, esmFeatureOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const mjsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/mjs',
    ...baseConfigs,
    ...baseOptions,
    ...esmFeatureOptions
)

export const mjsConfig = generateFlatConfig('mjs', mjsBaseConfig)

export default mjsConfig
