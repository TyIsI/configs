import type { KnipConfig } from 'knip'

const config: KnipConfig = {
    workspaces: {
        'packages/eslint': {
            entry: ['src/configs/*.ts'],
            project: [
                'lib/**/*.{cjs,mjs}',
                'src/**/*.ts',
                '!src/fafo/*.ts',
                '!tests/files/*'
            ]
        }
    },
    tags: ['-lintignore', '-internal'],
    ignoreDependencies: [
        '@types/react',
        'cosmiconfig',
        'eslint-import-resolver-typescript',
        'postcss-scss',
        'prettier',
        'react',
        'tsup',
        'tsx',
        /@tyisi\/config-\w+/,
        /prettier-plugin-\w+/
    ],
    ignoreExportsUsedInFile: {
        interface: true,
        type: true
    },
    ignoreBinaries: [
        'tools/fix-dist-extensions.sh',
        'tools/generate-project-readme.sh',
        'prettier'
    ],
    ignore: ['packages/*/dist/**'],
    ignoreIssues: {
        'packages/eslint/src/helpers/generate-hydrators.ts': ['files'],
        'packages/eslint/lib/all.cjs': ['files'],
        'packages/eslint/lib/all.mjs': ['files'],
        'packages/eslint/lib/combined.cjs': ['files'],
        'packages/eslint/lib/combined.mjs': ['files'],
        'packages/eslint/lib/lib.cjs': ['files'],
        'packages/eslint/lib/lib.mjs': ['files'],
        'packages/eslint/src/helpers/types.ts': ['files'],
        'packages/eslint/src/index.ts': ['files'],
        'packages/eslint/src/lib/guards.ts': ['files'],
        'packages/eslint/src/lib/imports.ts': ['files']
    }
}

/** @public */
export default config
