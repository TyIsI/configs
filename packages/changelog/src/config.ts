import type { GenerateChangelog, GitCzConfig } from './types'

const types = {
    hotfix: {
        description: 'Hotfix',
        emoji: '🚑️',
        value: 'hotfix'
    },
    feat: {
        description: 'A new feature',
        emoji: '✨',
        value: 'feat'
    },
    fix: {
        description: 'A bug fix',
        emoji: '🐛',
        value: 'fix'
    },
    breaking: {
        description: 'Breaking changes',
        emoji: '💥',
        value: 'breaking'
    },
    perf: {
        description: 'A code change that improves performance',
        emoji: '⚡️',
        value: 'perf'
    },
    refactor: {
        description: 'A code change that neither fixes a bug or adds a feature',
        emoji: '🚚',
        value: 'refactor'
    },
    schema: {
        description: 'Database related changes',
        emoji: '🗃️ ',
        value: 'schema'
    },
    content: {
        description: 'Content',
        emoji: '📝',
        value: 'content'
    },
    style: {
        description: 'Visual',
        emoji: '💄',
        value: 'style'
    },
    assets: {
        description: 'Assets (images/etc)',
        emoji: '🍱',
        value: 'assets'
    },
    cleanup: {
        description: 'Cleaning up code/repository',
        emoji: '🔥',
        value: 'cleanup'
    },
    docs: {
        description: 'Documentation only changes',
        emoji: '✏️ ',
        value: 'docs'
    },
    test: {
        description: 'Adding/updating tests',
        emoji: '❎',
        value: 'test'
    },
    formatting: {
        description: 'Formatting',
        emoji: '📝',
        value: 'formatting'
    },
    dev: {
        description: 'Development related changes',
        emoji: '🧰',
        value: 'dev'
    },
    stories: {
        description: 'Storybook updates',
        emoji: '📖',
        value: 'stories'
    },
    build: {
        description: 'Build related changes',
        emoji: '🧰',
        value: 'build'
    },
    ci: {
        description: 'CI related changes',
        emoji: '🎡',
        value: 'ci'
    },
    repository: {
        description: 'Repository related changes',
        emoji: '📦',
        value: 'repository'
    },
    package: {
        description: 'Package related changes',
        emoji: '📦',
        value: 'package'
    },
    dependencies: {
        description: 'Dependencies related changes',
        emoji: '📦',
        value: 'dependencies'
    },
    release: {
        description: 'Create a release commit',
        emoji: '🏹',
        value: 'release'
    },
    tools: {
        description: 'Tools and scripts',
        emoji: '🛠️ ',
        value: 'tools'
    },
    chore: {
        description: 'Build process or auxiliary tool changes',
        emoji: '🤖',
        value: 'chore'
    },
    wip: {
        description: 'Work in Progress',
        emoji: '🚧',
        value: 'wip'
    }
}

export const generateChangelog: GenerateChangelog = (
    ...packages: string[]
): GitCzConfig => {
    const scopes = ['', 'all', ...packages]

    return {
        disableEmoji: false,
        format: '{type}{scope}: {emoji}{subject}',
        list: Object.keys(types),
        maxMessageLength: 80,
        minMessageLength: 3,
        questions: ['scope', 'type', 'subject', 'body', 'breaking', 'issues'],
        scopes,
        types,
        messages: {
            type: "Select the type of change that you're committing:",
            customScope: 'Select the scope this change affects:',
            subject:
                'Write a short, imperative mood description of the change:\n',
            body: 'Provide a longer description of the change:\n ',
            breaking: 'List any breaking changes:\n',
            footer: 'Issues this commit closes, e.g #123:',
            confirmCommit: 'The packages that this commit has affected\n'
        }
    }
}

export default generateChangelog
