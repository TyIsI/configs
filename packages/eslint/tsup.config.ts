import { defineConfig, type Options } from 'tsup'

const buildEnv = process.env.NODE_ENV ?? 'development'

const getExt: Options['outExtension'] = () => {
    return { js: `.mjs` }
}

const options: Options = {
    entry: {
        index: './src/index.ts',
        cjs: './src/configs/cjs.ts',
        cjsx: './src/configs/cjsx.ts',
        combined: './src/configs/combined.ts',
        cts: './src/configs/cts.ts',
        ctsx: './src/configs/ctsx.ts',
        js: './src/configs/js.ts',
        jsx: './src/configs/jsx.ts',
        mjs: './src/configs/mjs.ts',
        mjsx: './src/configs/mjsx.ts',
        mts: './src/configs/mts.ts',
        mtsx: './src/configs/mtsx.ts',
        ts: './src/configs/ts.ts',
        tsx: './src/configs/tsx.ts'
    },
    outDir: './dist',
    splitting: false,
    sourcemap: false,
    clean: false,
    dts: false,
    shims: true,
    minify: buildEnv === 'production',
    outExtension: getExt
}

export default defineConfig(options)
