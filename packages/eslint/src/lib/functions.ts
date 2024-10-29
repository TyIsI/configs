import type { Linter } from 'eslint'
import {
    baseConfigs,
    endConfigs,
    fileGlobs,
    ValidRuleTypes
} from './constants.js'
import type { FileTypes, ConfigTypes, RuleType, RuleSets } from './types.js'

export const generateFlatConfig = (
    globName: FileTypes,
    ...configs: Linter.Config[]
): Linter.Config[] => {
    if (typeof globName !== 'string')
        throw new Error(`globName is not string: ${typeof globName}`)

    return [...baseConfigs, ...configs, ...endConfigs]
}

export const hydrateConfigSlice = (
    ...configItems: ConfigTypes
): Linter.Config => {
    return configItems.reduce((c, o) => {
        if ('files' in o) {
            c.files =
                'files' in c
                    ? [...new Set([...(c.files ?? []), ...(o.files ?? [])])]
                    : (c.files = o.files)
        }

        if ('ignores' in o) {
            c.ignores =
                'ignores' in c
                    ? [...new Set([...(c.ignores ?? []), ...(o.ignores ?? [])])]
                    : (c.ignores = o.ignores)
        }

        if ('language' in o) {
            // @ts-expect-error non existent
            c.language = o.language
        }

        if ('languageOptions' in o)
            c.languageOptions = {
                ...(c.languageOptions ?? {}),
                ...o.languageOptions
            }

        if ('linterOptions' in o)
            c.linterOptions = {
                ...(c.linterOptions ?? {}),
                ...o.linterOptions
            }

        if ('plugins' in o)
            c.plugins = {
                ...(c.plugins ?? {}),
                ...o.plugins
            }

        if ('processor' in o) c.processor = o.processor

        if ('rules' in o)
            c.rules = {
                ...(c.rules ?? {}),
                ...o.rules
            }

        if ('settings' in o)
            c.settings = {
                ...(c.settings ?? {}),
                ...o.settings
            }

        return c
    }, {}) as Linter.Config
}

export const coerceConfigName = (
    configName: string,
    ...configItems: ConfigTypes
): Linter.Config => {
    if (!Array.isArray(configItems))
        throw new Error(`configItem is not a valid object`)

    const configItem = hydrateConfigSlice(...configItems)

    return !('name' in configItem)
        ? (Object.assign({}, configItem, {
              name: configName
          }) as Linter.Config)
        : configItem
}

export const isRulesetType = (name?: unknown): name is RuleType => {
    return ValidRuleTypes.includes(name as RuleType)
}

export const hoistRuleset = (
    name: string,
    rules: RuleSets,
    ...rulesets: Array<Linter.Config['rules']>
): void => {
    if (!isRulesetType(name)) throw new Error('Invalid ruleset')

    if (rules[name] != null) throw new Error('Ruleset already exists')

    const ruleset = rulesets.reduce((c, e) => ({ ...c, ...e }), {})

    rules[name] = ruleset
}

export const createConfigSlice = (
    name: string,
    glob: FileTypes,
    ...objs: object[]
): Linter.Config => {
    return {
        name,
        files: fileGlobs[glob],
        ...hydrateConfigSlice(...objs)
    }
}
