import type { ConfigType } from '../lib/types.js'

export type ValidFileType =
    | 'cjs'
    | 'cjsx'
    | 'cts'
    | 'ctsx'
    | 'js'
    | 'jsx'
    | 'mjs'
    | 'mjsx'
    | 'mts'
    | 'mtsx'
    | 'ts'
    | 'tsx'

export const validFileTypes: ValidFileType[] = [
    'cjs',
    'cjsx',
    'cts',
    'ctsx',
    'js',
    'jsx',
    'mjs',
    'mjsx',
    'mts',
    'mtsx',
    'ts',
    'tsx'
]

export type SuspendedConfig = ConfigType & { $imports?: string[] }
