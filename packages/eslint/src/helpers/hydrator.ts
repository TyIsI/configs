/* eslint-disable @typescript-eslint/prefer-destructuring, eqeqeq, no-param-reassign -- LMAO */

import plugin from 'eslint-plugin-n'

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
                c[k] = hydrationDict[localPathString]
            } else {
                // @ts-expect-error -- all as planned
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- LMAO
                c[k] = hydrateConfigData(hydrationDict, v, localPath)
            }
        } else {
            // @ts-expect-error -- all as planned
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- LMAO
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
