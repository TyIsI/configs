import type { ConfigType } from '../lib/types.js'

import { jsBaseOptions } from '../lib/common.js'
import { baseConfigs } from '../lib/constants.js'
import {
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
} from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const jsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/js',
    ...baseConfigs,
    ...jsBaseOptions,
    eslintConfigLoveWithoutTypescript,
    eslintConfigPrettierWithoutTypescript
)

export const jsConfig = generateFlatConfig('js', jsBaseConfig)

export default jsConfig
