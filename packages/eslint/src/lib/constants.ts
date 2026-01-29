export type FileTypes = keyof typeof fileGlobs

export const fileGlobs: Record<string, string[]> = {
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
]

export const baseExcludeRules: string[] = ['no-negated-condition', 'strict']
