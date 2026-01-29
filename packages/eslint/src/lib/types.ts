import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import type { ReactFlatConfig } from 'eslint-plugin-react'

/** @public */
export type RuleType =
    | 'common'
    | 'commonTS'
    | 'imports'
    | 'react'
    | 'reactBaseRules'
    | 'ts'
    | 'tsx'

/** @public */
export type RuleTypes = RuleType[]

/** @public */
export type RuleSet = Linter.Config['rules']

/** @public */
export interface RuleSets extends Partial<Record<RuleType, RuleSet>> {}


/** @public */
export type ConfigType =
    | Linter.Config
    | ReactFlatConfig
    | TSESLint.FlatConfig.Config

    /** @public */
    export type ConfigTypeKey = keyof ConfigType
/** @public */
export type ConfigTypeKeys = ConfigTypeKey[]

/** @public */
export type ConfigTypes = ConfigType[]

/** @public */
export interface ImportResolverSettings {
    typescript?: boolean
    extensions?: string[]
}

/** @public */
export interface ConfigTypeRules {
    rules: RuleSet
}

/** @public */
export interface ConfigExport {
    default: ConfigTypes
}

/** @public */
export type FilteredConfigKey = Extract<
    keyof Partial<ConfigType>,
    'plugins' | 'rules' | 'settings'
>

/** @public */
export type FilteredConfigType = Pick<Partial<ConfigType>, FilteredConfigKey>

/** @public */
export type FilterConfigProp<T extends FilteredConfigKey = FilteredConfigKey> =
    FilteredConfigType[T]

/** @public */
export type FilteredOutput<
    E extends boolean,
    P extends FilterConfigProp,
    F extends keyof P = keyof P
> = E extends true ? Partial<Pick<P, F>> : Partial<Omit<P, F>>

/** @public */
export type OneOf<A, B> = (
    A extends B ? (Extract<B, A> extends never ? false : true) : false
) extends true
    ? true
    : false
