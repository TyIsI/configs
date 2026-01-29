/* eslint-disable no-param-reassign -- necessary */

import deepmerge from 'deepmerge'

import type {
    ConfigType,
    ConfigTypeKeys,
    ConfigTypes,
    FilteredConfigKey,
    FilteredConfigType,
    FilteredOutput,
    ImportResolverSettings,
    OneOf,
    RuleType
} from './types.js'

import { fileGlobs, type FileTypes, ValidRuleTypes } from './constants.js'
import { getObjectKeys } from './utils.js'

export const generateFlatConfig = (
    globName: FileTypes,
    ...configs: ConfigTypes
): ConfigTypes => {
    if (typeof globName !== 'string') {
        throw new Error(`globName is not string: ${typeof globName}`)
    }

    return configs.map((c) => {
        if (!('files' in c) || c.files == null)
            c = { ...c, files: fileGlobs[globName] }
        else if (Array.isArray(c.files)) {
            c.files = [...new Set([...c.files, ...fileGlobs[globName]])]
        }

        return c
    })
}

const hydrateConfigSlice = (...configItems: ConfigTypes): ConfigType => {
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
                    if (protectedConfigKeys.includes(propKey)) {
                        collection = {
                            ...collection,
                            [propKey]: { ...existingEntry, ...itemEntry }
                        }
                    } else {
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

export const createConfigSlice = (
    name: string,
    ...slices: ConfigTypes
): ConfigType => ({
    ...hydrateConfigSlice(...slices),
    name
})

export const createImportResolverSettings = ({
    typescript,
    extensions = ['.ts']
}: ImportResolverSettings): ConfigType => ({
    settings: {
        'import/resolver': {
            typescript,
            node: {
                extensions
            }
        }
    }
})

export const withFilteredConfigProp = <
    Config extends FilteredConfigType = FilteredConfigType,
    Prop extends FilteredConfigKey = FilteredConfigKey,
    ConfigProp extends Config[Prop] = Config[Prop],
    K extends keyof ConfigProp = keyof ConfigProp,
    A extends 'only' | 'exclude' = 'only' | 'exclude'
>(
    config: Config,
    propName: Prop,
    action: A,
    ...filters: K[]
): FilteredOutput<OneOf<'only', A>, ConfigProp, K> => {
    if (!(propName in config)) {
        throw new Error('Invalid config property')
    }

    if (config[propName] == null) {
        throw new Error('Missing config property')
    }

    if (
        !Array.isArray(filters) ||
        (Array.isArray(filters) && !filters.every((f) => typeof f === 'string'))
    ) {
        throw new Error('Invalid filters argument')
    }

    const selectiveFilter = action === 'only'

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- TODO: FIX ME YOLO
    const configProp: ConfigProp = config[propName] as ConfigProp

    if (configProp == null || Object.keys(configProp).length === 0) {
        throw new Error('Invalid config property')
    }

    const propKeys: K[] = getObjectKeys(configProp)

    const filterFind = new RegExp(`^(${filters.join('|')})`, 'v')

    const filterSet = propKeys.filter(
        // @ts-expect-error -- TODO: TRUST ME BRO
        (p) => selectiveFilter === filterFind.test(p)
    )

    const filteredPropsKeys = propKeys.filter((p) =>
        selectiveFilter
            ? selectiveFilter === filterSet.includes(p)
            : selectiveFilter !== filterSet.includes(p)
    )

    return filteredPropsKeys.reduce(
        (c, configPropKey) =>
            // @ts-expect-error -- TODO: FIX ME YOLO
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO: FIX ME YOLO
            ({ ...c, [configPropKey]: configProp[configPropKey] }),
        {}
    )
}

/* eslint-enable no-param-reassign -- necessary */
