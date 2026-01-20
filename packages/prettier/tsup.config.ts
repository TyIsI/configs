import { defineConfig, type Options } from 'tsup'

const getExt: Options['outExtension'] = ({ format }) => {
    if (format === 'cjs') return { js: '.cjs', dts: '.d.cts' }
    else if (format === 'esm') return { js: '.mjs', dts: '.d.mts' }
    else throw new Error('Unsupported file format')
}

/** @internal */
export default defineConfig([
    {
        format: 'cjs',
        entry: [
            './src/base.ts',
            './src/full.ts',
            './src/sh.ts',
            './src/tailwindcss.ts'
        ],
        splitting: true,
        sourcemap: false,
        dts: false,
        outExtension: () => ({ js: '.cjs', dts: '.d.cts' }),
        cjsInterop: true
    },
    {
        format: 'esm',
        entry: [
            './src/base.ts',
            './src/full.ts',
            './src/sh.ts',
            './src/tailwindcss.ts'
        ],
        splitting: true,
        sourcemap: false,
        dts: false,
        outExtension: () => ({ js: '.mjs', dts: '.d.mts' }),
        cjsInterop: false
    },
    {
        format: 'cjs',
        entry: [
            './src/base.ts',
            './src/full.ts',
            './src/sh.ts',
            './src/tailwindcss.ts'
        ],
        splitting: true,
        sourcemap: false,
        dts: {
            only: true,
            entry: [
                './src/base.ts',
                './src/full.ts',
                './src/sh.ts',
                './src/tailwindcss.ts'
            ]
        },
        outExtension: () => ({ js: '.cjs', dts: '.d.cts' }),
        onSuccess: 'tools/fix-dist-extensions.sh'
    },
    {
        format: 'esm',
        entry: [
            './src/base.ts',
            './src/full.ts',
            './src/sh.ts',
            './src/tailwindcss.ts'
        ],
        splitting: true,
        sourcemap: false,
        dts: {
            only: true,
            entry: [
                './src/base.ts',
                './src/full.ts',
                './src/sh.ts',
                './src/tailwindcss.ts'
            ]
        },
        outExtension: () => ({ js: '.mjs', dts: '.d.mts' }),
        onSuccess: 'tools/fix-dist-extensions.sh'
    }
])
