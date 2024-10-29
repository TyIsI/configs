import { defineConfig, type Options } from 'tsup'

const buildEnv = process.env.NODE_ENV ?? 'development'

const getExt: Options['outExtension'] = () => {
    return { js: `.mjs` }
}

const options: Options = {
    entry: {
        index: './src/index.ts',
        combined: './src/combined.ts',
        js: './src/js.ts',
        jsx: './src/jsx.ts',
        ts: './src/ts.ts',
        tsx: './src/tsx.ts'
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
