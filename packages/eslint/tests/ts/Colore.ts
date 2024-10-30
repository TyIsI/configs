export const Logger = {
    trace(...args: unknown[]) {
        console.log('TRACE', ...args)
    }
}

export interface IRequestAdapter {
    getRequestArgument: (requestArgumentName: string) => unknown
    setRenderProperty: (propertyName: string, propertyValue: unknown) => void
}
