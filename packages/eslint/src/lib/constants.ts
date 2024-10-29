import { eslintConfigPrettier } from './externals.js'
import type { FileTypes } from './types.js'

export const fileGlobs: Record<FileTypes, string[]> = {
    js: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    jsx: ['**/*.jsx'],
    ts: ['**/*.ts', '**/*.cts', '**/*.mts'],
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

export const baseConfigs = [
    {
        name: '@tyisi/config-eslint/baseConfig/ignores',

        ignores: ['**/node_modules/', '**/build/', '**/dist/', '**/env.d.ts']
    }
]

export const endConfigs = [eslintConfigPrettier]
