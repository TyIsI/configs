import { defineConfig, type Options } from 'tsup'

const buildEnv = process.env.NODE_ENV ?? 'development'

const options: Options[] = [
    {
        format: 'cjs',
        entry: {
            hydrator: './src/helpers/hydrator.ts'
        },
        outDir: './dist',
        splitting: true,
        sourcemap: false,
        clean: false,
        shims: true,
        dts: true,
        minify: buildEnv === 'production',
        outExtension: () => ({ js: `.cjs`, dts: '.d.cts' })
    },
    {
        format: 'esm',
        entry: {
            hydrator: './src/helpers/hydrator.ts'
        },
        outDir: './dist',
        splitting: true,
        sourcemap: false,
        clean: false,
        dts: false,
        minify: buildEnv === 'production',
        outExtension: () => ({ js: `.mjs`, dts: '.d.mts' })
    },
    {
        format: ['cjs', 'esm'],
        entry: {
            all: './src/configs/all.ts',
            combined: './src/configs/combined.ts',
            cjs: './src/configs/cjs.ts',
            cjsx: './src/configs/cjsx.ts',
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
        splitting: true,
        sourcemap: false,
        clean: false,
        dts: {
            only: true,
            entry: {
                all: './src/configs/all.ts',
                combined: './src/configs/combined.ts',
                cjs: './src/configs/cjs.ts',
                cjsx: './src/configs/cjsx.ts',
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
            }
        },
        minify: buildEnv === 'production',
        outExtension: ({ format }) =>
            format === 'cjs'
                ? { js: '.cjs', dts: '.d.cts' }
                : { js: '.mjs', dts: '.d.mts' }
    }
]

/** @internal */
export default defineConfig(options)
