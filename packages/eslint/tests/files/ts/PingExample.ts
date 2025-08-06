import type { IRequestAdapter } from './Colore'

/**
 * The Ping class is an example class for remoting.
 */
export class PingExample {
    public reply(requestObject: IRequestAdapter): void {
        if (requestObject.getRequestArgument('message') != null) {
            requestObject.setRenderProperty(
                'message',
                requestObject.getRequestArgument<string>('message')
            )
        } else {
            requestObject.setRenderProperty('message', 'message in a bottle')
        }

        requestObject.setRenderProperty('ts', Date.now().toString())
    }
}

export default PingExample
