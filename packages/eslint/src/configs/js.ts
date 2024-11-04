import type { ConfigType } from '../lib/types.js'

import { baseOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/js',
    ...baseConfigs,
    ...baseOptions
)

export const jsConfig = generateFlatConfig('js', jsBaseConfig)

export default jsConfig
