import deepmerge from 'deepmerge'

import type {
    ConfigType,
    ConfigTypes,
    ConfigTypeKeys,
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
        if (c.files == null) c = { ...c, files: fileGlobs[globName] }
        else if (Array.isArray(c.files))
            c.files = [...new Set([...c.files, ...fileGlobs[globName]])]

        return c
    })
}

export const hydrateConfigSlice = (...configItems: ConfigTypes): ConfigType => {
    const protectedConfigKeys = ['plugins', 'rules']

    return configItems.reduce<ConfigType>(
        // eslint-disable-next-line complexity -- trust me bro
        (collection: ConfigType, item: ConfigType) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- trust me bro
            for (const propKey of Object.keys(item) as ConfigTypeKeys) {
                const { [propKey]: existingEntry } = collection
                const { [propKey]: itemEntry } = item

                if (Array.isArray(existingEntry) && Array.isArray(itemEntry)) {
                    collection = {
                        ...collection,
                        [propKey]: [
                            ...new Set([...existingEntry, ...itemEntry])
                        ]
                    }
                } else if (
                    existingEntry != null &&
                    typeof existingEntry === 'object' &&
                    !Array.isArray(existingEntry) &&
                    itemEntry != null &&
                    typeof itemEntry === 'object' &&
                    !Array.isArray(itemEntry)
                ) {
                    if (protectedConfigKeys.includes(propKey))
                        collection = {
                            ...collection,
                            [propKey]: { ...existingEntry, ...itemEntry }
                        }
                    else {
                        // @ts-expect-error Trust me bro. I'm a Ferrari!
                        const deepMerged = deepmerge(existingEntry, itemEntry)

                        collection = {
                            ...collection,
                            [propKey]: deepMerged
                        }
                    }
                } else {
                    collection = { ...collection, [propKey]: itemEntry }
                }
            }

            return collection
        },
        {}
    )
}

export const isRulesetType = (inp?: unknown): inp is RuleType =>
    typeof inp === 'string' && ValidRuleTypes.includes(inp)

export const createConfigSlice = (
    name: string,
    ...objs: object[]
): ConfigType => ({
    ...hydrateConfigSlice(...objs),
    name
})

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
