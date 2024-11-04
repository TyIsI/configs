import type { ConfigTypes, FileTypes } from './types.js'

export const fileGlobs: Record<FileTypes, string[]> = {
    cjs: ['**/*.cjs'],
    cjsx: ['**/*.cjsx'],
    cts: ['**/*.cts'],
    ctsx: ['**/*.ctsx'],
    js: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    jsx: ['**/*.jsx', '**/*.cjsx', '**/*.mjsx'],
    mjs: ['**/*.mjs'],
    mjsx: ['**/*.mjsx'],
    mts: ['**/*.mts'],
    mtsx: ['**/*.mtsx'],
    ts: ['**/*.ts', '**/*.cts', '**/*.mts'],
    tsx: ['**/*.tsx', '**/*.ctsx', '**/*.mtsx']
}

export const ValidRuleTypes = [
    'common',
    'commonTS',
    'imports',
    'react',
    'reactBaseRules',
    'ts',
    'tsx'
] as const

export const baseConfigs: ConfigTypes = [
    {
        name: '@tyisi/config-eslint/baseConfig/ignores',

        ignores: ['**/node_modules/', '**/build/', '**/dist/', '**/env.d.ts']
    }
]
