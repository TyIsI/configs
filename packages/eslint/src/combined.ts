import type { Linter } from 'eslint'

import { jsConfig } from './js.js'
import { jsxConfig } from './jsx.js'
import { tsConfig } from './ts.js'
import { tsxConfig } from './tsx.js'

export const combinedConfig: Linter.Config[] = {
    ...jsConfig,
    ...jsxConfig,
    ...tsConfig,
    ...tsxConfig
}

if (process.env.DEBUG != null) console.dir({ combinedConfig })

export default combinedConfig
