'use strict'

const cjs = require('./cjs.cjs')
const cjsx = require('./cjsx.cjs')
const cts = require('./cts.cjs')
const ctsx = require('./ctsx.cjs')
const js = require('./js.cjs')
const jsx = require('./jsx.cjs')
const mjs = require('./mjs.cjs')
const mjsx = require('./mjsx.cjs')
const mts = require('./mts.cjs')
const mtsx = require('./mtsx.cjs')
const ts = require('./ts.cjs')
const tsx = require('./tsx.cjs')

const combined = [
    {
        name: '@tyisi/config-eslint/config/combined',
        plugins: {}
    },
    ...cjs,
    ...cjsx,
    ...cts,
    ...ctsx,
    ...js,
    ...jsx,
    ...mjs,
    ...mjsx,
    ...mts,
    ...mtsx,
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
module.exports = combined
