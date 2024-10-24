import type { Linter } from 'eslint'

import type { TSESLint } from '@typescript-eslint/utils'
import type { ReactFlatConfig } from 'eslint-plugin-react'

export type FileTypes = 'js' | 'jsx' | 'ts' | 'tsx'

export type RuleType = (typeof ValidRuleTypes)[number]

export interface RuleSets
    extends Partial<Record<RuleType, Linter.Config['rules']>> {}

interface NamefulConfigs {
    name?: Linter.Config['name']
}

interface NamefulReactFlatConfig extends ReactFlatConfig, NamefulConfigs {}

interface NamefulConfigLove
    extends TSESLint.FlatConfig.Config,
        NamefulConfigs {}

export type ConfigTypes =
    | Linter.Config
    | NamefulReactFlatConfig
    | NamefulConfigLove

export const fileGlobs: Record<FileTypes, string[]> = {
    js: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    jsx: ['**/*.jsx'],
    ts: ['**/*.ts', '**/*.cts', '**/*.mts'],
    tsx: ['**/*.tsx']
}

export const ValidRuleTypes = [
    'common',
    'import',
    'react',
    'reactBaseRules',
    'ts',
    'tsx'
] as const
