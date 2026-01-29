import { defineConfig, type Options } from 'tsup'

const getExt: Options['outExtension'] = ({ format }) => {
    let ext = 'js'

    if (format === 'cjs') ext = 'cjs'
    if (format === 'esm') ext = 'mjs'

    return { js: `.${ext}` }
}

const options: Options = {
    entry: ['./src/index.ts'],
    splitting: true,
    sourcemap: false,
    dts: false,
    outExtension: getExt,
    cjsInterop: true
}

/** @internal */
export default defineConfig(options)
