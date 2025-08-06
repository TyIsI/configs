/* eslint-disable @typescript-eslint/no-misused-spread -- Intentional misuse due javascript*/
import type { ConfigTypes } from '../lib/types.js'

import { cjsConfig } from './cjs.js'
import { cjsxConfig } from './cjsx.js'
import { ctsConfig } from './cts.js'
import { ctsxConfig } from './ctsx.js'
import { jsConfig } from './js.js'
import { jsxConfig } from './jsx.js'
import { mjsConfig } from './mjs.js'
import { mjsxConfig } from './mjsx.js'
import { mtsConfig } from './mts.js'
import { mtsxConfig } from './mtsx.js'
import { tsConfig } from './ts.js'
import { tsxConfig } from './tsx.js'

export const combinedConfig: ConfigTypes = {
    ...cjsConfig,
    ...cjsxConfig,
    ...ctsConfig,
    ...ctsxConfig,
    ...jsConfig,
    ...jsxConfig,
    ...mjsConfig,
    ...mjsxConfig,
    ...mtsConfig,
    ...mtsxConfig,
    ...tsConfig,
    ...tsxConfig
}

export default combinedConfig
/* eslint-enable @typescript-eslint/no-misused-spread */
