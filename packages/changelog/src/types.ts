type QuestionTypes =
    | 'scope'
    | 'type'
    | 'subject'
    | 'body'
    | 'breaking'
    | 'issues'

type MessageTypes =
    | 'type'
    | 'customScope'
    | 'subject'
    | 'body'
    | 'breaking'
    | 'footer'
    | 'confirmCommit'

interface GitCzType {
    description?: string
    emoji?: string
    value?: string
}

export interface GitCzConfig {
    disableEmoji?: boolean
    format?: string
    list?: string[]
    maxMessageLength?: number
    minMessageLength?: number
    questions?: QuestionTypes[]
    scopes?: string[]
    types?: Record<string, GitCzType>
    messages?: Record<MessageTypes, string>
}

export type GenerateChangelog = (...packages: string[]) => GitCzConfig
