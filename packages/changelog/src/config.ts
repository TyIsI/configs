import type { GenerateChangelog, GitCzConfig } from './types'

const types = {
    feat: {
        description: 'A new feature',
        emoji: '✨',
        value: 'feat'
    },
    fix: {
        description: 'Fix a bug',
        emoji: '🐛',
        value: 'fix'
    },
    hotfix: {
        description: 'Hotfix',
        emoji: '🚑️',
        value: 'hotfix'
    },
    assets: {
        description: 'Assets (images/etc)',
        emoji: '🍱',
        value: 'assets'
    },
    breaking: {
        description: 'Breaking changes',
        emoji: '💥',
        value: 'breaking'
    },
    build: {
        description: 'Build related changes',
        emoji: '🧰',
        value: 'build'
    },
    chore: {
        description: "Other changes that don't modify src or test files",
        emoji: '🤖',
        value: 'chore'
    },
    ci: {
        description: 'Changes to CI configuration files and scripts',
        emoji: '👷',
        value: 'ci'
    },
    cleanup: {
        description: 'Cleaning up code/repository',
        emoji: '🔥',
        value: 'cleanup'
    },
    content: {
        description: 'Content',
        emoji: '📝',
        value: 'content'
    },
    dependencies: {
        description: 'Dependencies related changes',
        emoji: '📦',
        value: 'dependencies'
    },
    dev: {
        description: 'Development related changes',
        emoji: '🧰',
        value: 'dev'
    },
    docs: {
        description: 'Documentation only changes',
        emoji: '✏️ ',
        value: 'docs'
    },
    package: {
        description: 'Package related changes',
        emoji: '📦',
        value: 'package'
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
    release: {
        description: 'Create a release commit',
        emoji: '🚀',
        value: 'release'
    },
    repository: {
        description: 'Repository related changes',
        emoji: '📦',
        value: 'repository'
    },
    revert: {
        description: 'Revert changes',
        emoji: '⏪',
        value: 'revert'
    },
    schema: {
        description: 'Database related changes',
        emoji: '🗃️ ',
        value: 'schema'
    },
    stories: {
        description: 'Storybook updates',
        emoji: '📖',
        value: 'stories'
    },
    style: {
        description: 'Improve structure / format of the code',
        emoji: '📝',
        value: 'style'
    },
    test: {
        description: 'Add or update tests',
        emoji: '✅',
        value: 'test'
    },
    tools: {
        description: 'Tools and scripts',
        emoji: '🛠️ ',
        value: 'tools'
    },
    visual: {
        description: 'Visual styling',
        emoji: '🎨',
        value: 'visual'
    },
    wip: {
        description: 'Work in Progress',
        emoji: '🚧',
        value: 'wip'
    }
}

/** @public */
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

/** @public */
export default generateChangelog()
