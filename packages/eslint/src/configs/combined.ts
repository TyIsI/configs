/* eslint-disable @typescript-eslint/no-misused-spread -- Intentional misuse due javascript*/
import type { ConfigTypes } from '../lib/types.js'

import cjs from './cjs.js'
import cjsx from './cjsx.js'
import cts from './cts.js'
import ctsx from './ctsx.js'
import js from './js.js'
import jsx from './jsx.js'
import mjs from './mjs.js'
import mjsx from './mjsx.js'
import mts from './mts.js'
import mtsx from './mtsx.js'
import ts from './ts.js'
import tsx from './tsx.js'

const combined: ConfigTypes = {
    ...cjs,
    ...cjsx,
    ...cts,
    ...ctsx,
    ...mjs,
    ...mjsx,
    ...mts,
    ...mtsx,
    ...js,
    ...jsx,
    ...ts,
    ...tsx
}

export default combined
/* eslint-enable @typescript-eslint/no-misused-spread */
