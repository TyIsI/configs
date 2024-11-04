import cjs from '../dist/cjs.mjs'
import cjsx from '../dist/cjsx.mjs'
// import combined from '../dist/combined.mjs'
import cts from '../dist/cts.mjs'
import ctsx from '../dist/ctsx.mjs'
// import index from '../dist/index.mjs'
import js from '../dist/js.mjs'
import jsx from '../dist/jsx.mjs'
import mjs from '../dist/mjs.mjs'
import mjsx from '../dist/mjsx.mjs'
import mts from '../dist/mts.mjs'
import mtsx from '../dist/mtsx.mjs'
import ts from '../dist/ts.mjs'
import tsx from '../dist/tsx.mjs'

const imports = {
    cjs,
    cjsx,
    // combined,
    cts,
    ctsx,
    // index,
    js,
    jsx,
    mjs,
    mjsx,
    mts,
    mtsx,
    ts,
    tsx
}

Object.keys(imports).forEach((importKey) =>
    console.log(
        `${importKey}:`,
        imports[importKey].length,
        imports[importKey][0].files
    )
)
