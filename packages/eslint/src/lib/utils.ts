export const getObjectKeys = <
    T extends object = object,
    K extends keyof T = keyof T
>(
    obj: T
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- TODO: FIX ME YOLO
): K[] => Object.keys(obj) as K[]
