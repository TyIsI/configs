export const Logger = {
    trace(...args: unknown[]) {
        console.log('TRACE', ...args)
    }
}

export interface IRequestAdapter {
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- It's an interface */
    getRequestArgument: <T = unknown>(requestArgumentName: string) => T
    setRenderProperty: (propertyName: string, propertyValue: unknown) => void
}
