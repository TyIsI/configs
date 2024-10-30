import type { ConfigType } from '../lib/types.js'

import {
    commonJsFormatOptions,
    jsBaseOptions,
    typescriptFeatureOptions
} from '../lib/common.js'
import { eslintConfigLove, eslintConfigPrettier } from '../lib/externals.js'
import { createConfigSlice, generateFlatConfig } from '../lib/functions.js'

const ctsBaseConfig: ConfigType = createConfigSlice(
    '@tyisi/config-eslint/config/cts',
    ...jsBaseOptions,
    ...commonJsFormatOptions,
    ...typescriptFeatureOptions,
    eslintConfigLove,
    eslintConfigPrettier
)

export const ctsConfig = generateFlatConfig('cts', ctsBaseConfig)

export default ctsConfig
