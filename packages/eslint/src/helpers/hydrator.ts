/* eslint-disable @typescript-eslint/prefer-destructuring, no-param-reassign -- YOLO */

export function wrapImport(i: object): object {
    return '__esModule' in i &&
        'default' in i &&
        i.__esModule != null &&
        i.default != null
        ? i.default
        : i
}

export const hydrateConfigData = (
    hydrationDict: Record<string, object>,
    obj: object,
    path?: string[]
): object => {
    path ??= []

    const hydrationKeys = Object.keys(hydrationDict)

    return Object.entries(obj).reduce<typeof obj>((c, [k, v]) => {
        const localPath = [...path, k]
        const localPathString = localPath.join('.')

        if (v != null && typeof v === 'object' && !Array.isArray(v)) {
            if (hydrationKeys.includes(localPathString)) {
                // @ts-expect-error -- all as planned
                c[k] = wrapImport(hydrationDict[localPathString])
            } else {
                // @ts-expect-error -- all as planned
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- YOLO
                c[k] = hydrateConfigData(hydrationDict, v, localPath)
            }
        } else {
            // @ts-expect-error -- all as planned
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- YOLO
            c[k] = v
        }

        if (path.length === 0) {
            if ('$imports' in obj) delete obj.$imports

            if ('plugins' in c)
                // @ts-expect-error -- YOLO
                Object.keys(c.plugins).forEach((plugin) => {
                    if (
                        // @ts-expect-error -- YOLO
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- YOLO
                        c.plugins[plugin].rules == null &&
                        // @ts-expect-error -- YOLO
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- YOLO
                        c.plugins[plugin].plugin != null
                    )
                        // @ts-expect-error -- YOLO
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment -- YOLO
                        c.plugins[plugin] = c.plugins[plugin].plugin

                    // // @ts-expect-error -- YOLO
                    // // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- YOLO
                    // if (c.plugins[plugin].rules == null)
                    //     throw new Error(
                    //         `Missing rule definitions for: ${plugin}`
                    //     )
                })
        }

        return c
    }, obj)
}
