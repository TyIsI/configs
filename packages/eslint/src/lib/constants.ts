import type { ConfigTypes, FileTypes } from './types.js'

export const fileGlobs: Record<FileTypes, string[]> = {
    cjs: ['**/*.cjs'],
    cjsx: ['**/*.cjsx'],
    cts: ['**/*.cts'],
    ctsx: ['**/*.ctsx'],
    js: ['**/*.js'],
    jsx: ['**/*.jsx'],
    mjs: ['**/*.mjs'],
    mjsx: ['**/*.mjsx'],
    mts: ['**/*.mts'],
    mtsx: ['**/*.mtsx'],
    ts: ['**/*.ts'],
    tsx: ['**/*.tsx']
}

export const ValidRuleTypes = [
    'common',
    'commonTS',
    'import',
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
