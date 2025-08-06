import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import type { ReactFlatConfig } from 'eslint-plugin-react'

export type FileTypes =
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

export type RuleType =
    | 'common'
    | 'commonTS'
    | 'imports'
    | 'react'
    | 'reactBaseRules'
    | 'ts'
    | 'tsx'

export type RuleTypes = RuleType[]

export type RuleSet = Linter.Config['rules']

export interface RuleSets extends Partial<Record<RuleType, RuleSet>> {}

interface NamefulConfigs
    extends Omit<Linter.Config, 'languageOptions' | 'plugins' | 'rules'> {
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

export type ConfigTypeKey = keyof ConfigType
export type ConfigTypeKeys = ConfigTypeKey[]

export type ConfigTypes = ConfigType[]

export interface ImportResolverSettings {
    typescript?: boolean
    extensions?: string[]
}
