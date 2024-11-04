import deepmerge from 'deepmerge'

import type {
    ConfigType,
    ConfigTypeKeys,
    ConfigTypes,
    FileTypes,
    ImportResolverSettings,
    RuleType
} from './types.js'

import { fileGlobs, ValidRuleTypes } from './constants.js'

export const generateFlatConfig = (
    globName: FileTypes,
    ...configs: ConfigTypes
): ConfigTypes => {
    if (typeof globName !== 'string')
        throw new Error(`globName is not string: ${typeof globName}`)

    return configs.map((c) => {
        if (c.files == null) c.files = fileGlobs[globName]
        else if (Array.isArray(c.files))
            c.files = [...new Set([...c.files, ...fileGlobs[globName]])]

        return c
    })
}

export const hydrateConfigSlice = (...configItems: ConfigTypes): ConfigType => {
    const protectedConfigKeys = ['plugins', 'rules']

    return configItems.reduce((collection, item) => {
        for (const propKey of Object.keys(item) as ConfigTypeKeys) {
            if (
                propKey in collection &&
                Array.isArray(collection[propKey]) &&
                Array.isArray(item[propKey])
            ) {
                // @ts-expect-error mismatch
                collection[propKey] = [
                    ...new Set([...collection[propKey], ...item[propKey]])
                ]
            } else if (
                propKey in collection &&
                collection[propKey] != null &&
                typeof collection[propKey] === 'object' &&
                item[propKey] != null &&
                typeof item[propKey] === 'object'
            ) {
                // @ts-expect-error mismatch
                collection[propKey] = protectedConfigKeys.includes(propKey)
                    ? { ...collection[propKey], ...item[propKey] }
                    : // @ts-expect-error mismatch
                      deepmerge(collection[propKey], item[propKey])
            } else {
                // @ts-expect-error mismatch
                collection[propKey] = item[propKey]
            }
        }

        return collection
    }, {})
}

export const isRulesetType = (name?: unknown): name is RuleType => {
    return ValidRuleTypes.includes(name as RuleType)
}

export const createConfigSlice = (
    name: string,
    ...objs: object[]
): ConfigType => {
    return {
        ...hydrateConfigSlice(...objs),
        name
    }
}

export const createImportResolverSettings = ({
    typescript,
    extensions
}: ImportResolverSettings): ConfigType => {
    extensions ??= ['.ts']

    return {
        settings: {
            'import/resolver': {
                typescript,
                node: {
                    extensions
                }
            }
        }
    }
}
