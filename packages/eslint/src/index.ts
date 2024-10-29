import { combinedConfig } from './combined.js'
import { jsConfig } from './js.js'
import { jsxConfig } from './jsx.js'
import { tsConfig } from './ts.js'
import { tsxConfig } from './tsx.js'

export const combined = combinedConfig
export const js = jsConfig
export const jsx = jsxConfig
export const ts = tsConfig
export const tsx = tsxConfig

export const configs = { combined, js, jsx, ts, tsx }

if (process.env.DEBUG != null) console.dir({ combinedConfig })

export default combinedConfig
