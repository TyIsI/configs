import { cjsConfig } from './configs/cjs.js'
import { cjsxConfig } from './configs/cjsx.js'
import { combinedConfig } from './configs/combined.js'
import { ctsConfig } from './configs/cts.js'
import { ctsxConfig } from './configs/ctsx.js'
import { jsConfig } from './configs/js.js'
import { jsxConfig } from './configs/jsx.js'
import { mjsConfig } from './configs/mjs.js'
import { mjsxConfig } from './configs/mjsx.js'
import { mtsConfig } from './configs/mts.js'
import { mtsxConfig } from './configs/mtsx.js'
import { tsConfig } from './configs/ts.js'
import { tsxConfig } from './configs/tsx.js'

export const cjs = cjsConfig
export const cjsx = cjsxConfig
export const combined = combinedConfig
export const cts = ctsConfig
export const ctsx = ctsxConfig
export const js = jsConfig
export const jsx = jsxConfig
export const mjs = mjsConfig
export const mjsx = mjsxConfig
export const mts = mtsConfig
export const mtsx = mtsxConfig
export const ts = tsConfig
export const tsx = tsxConfig

export const configs = {
    cjs,
    cjsx,
    combined,
    cts,
    ctsx,
    js,
    jsx,
    mjs,
    mjsx,
    mts,
    mtsx,
    ts,
    tsx
}

export default combinedConfig
