import type { Linter } from 'eslint'

import type { TSESLint } from '@typescript-eslint/utils'
import type { ReactFlatConfig } from 'eslint-plugin-react'
import type { ValidRuleTypes } from './constants.js'

export type FileTypes = 'js' | 'jsx' | 'ts' | 'tsx'

export type RuleType = (typeof ValidRuleTypes)[number]

export interface RuleSets
    extends Partial<Record<RuleType, Linter.Config['rules']>> {}

interface NamefulConfigs
    extends Omit<Linter.Config, 'languageOptions' | 'plugins' | 'rules'> {
    processor?:
        | string
        | Linter.Config['processor']
        | TSESLint.FlatConfig.Config['processor']
    plugins?: Linter.Config['plugins'] | ReactFlatConfig['plugins']
}

interface NamefulReactFlatConfig
    extends Omit<ReactFlatConfig, 'plugins'>,
        NamefulConfigs {}

interface NamefulConfigLove
    extends Omit<TSESLint.FlatConfig.Config, 'processor' | 'plugins'>,
        NamefulConfigs {}

export type ConfigType =
    | Linter.Config
    | NamefulReactFlatConfig
    | NamefulConfigLove
    | TSESLint.FlatConfig.Config

export type ConfigTypes = ConfigType[]
