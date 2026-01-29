/* eslint-disable import/no-unresolved -- YOLO */
import cjs from './cjs.mjs'
import cjsx from './cjsx.mjs'
import cts from './cts.mjs'
import ctsx from './ctsx.mjs'
import mjs from './mjs.mjs'
import mjsx from './mjsx.mjs'
import mts from './mts.mjs'
import mtsx from './mtsx.mjs'
import js from './js.mjs'
import jsx from './jsx.mjs'
import ts from './ts.mjs'
import tsx from './tsx.mjs'

const combined = [
    {
        name: '@tyisi/config-eslint/config/combined',
        plugins: {}
    },
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
].reduce((c, e, idx) => {
    if (idx === 0) c.push(e)
    else if (idx > 0) {
        const { plugins, ...restConfig } = e

        c[0].plugins = { ...c[0].plugins, ...plugins }

        c.push(restConfig)
    }

    return c
}, [])

/** @public */
export default combined
