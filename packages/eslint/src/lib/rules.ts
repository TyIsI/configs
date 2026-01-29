import type { RuleSet, RuleSets } from './types.js'

import { eslintConfigLoveOnlyTypescript } from './externals.js'

const common: RuleSet = {
    'no-unused-vars': [
        'error',
        {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_'
        }
    ],

    'class-methods-use-this': ['off'],

    'no-magic-numbers': ['off'],

    'no-console': 'off',

    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    'no-negated-condition': 'off'
}

const imports: RuleSet = {
    // analysis/correctness
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',

    // red flags (thus, warnings)
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',

    'import/first': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],

    'import/order': [
        'error',
        {
            'alphabetize': {
                caseInsensitive: true,
                order: 'asc'
            },

            'groups': [
                'builtin',
                'external',
                'type',
                'internal',
                'parent',
                'sibling',
                'object'
            ],

            'newlines-between': 'always-and-inside-groups',

            'pathGroups': [
                {
                    group: 'builtin',
                    pattern: 'react',
                    position: 'before'
                },
                {
                    group: 'internal',
                    pattern: '@/**',
                    position: 'before'
                },
                {
                    group: 'object',
                    pattern: '**/*.types',
                    position: 'after'
                },
                {
                    group: 'object',
                    pattern: '**/*.s?css',
                    position: 'after'
                }
            ],

            'pathGroupsExcludedImportTypes': ['react'],

            'sortTypesGroup': true,

            'newlines-between-types': 'always-and-inside-groups'
        }
    ]
}

const commonTS: RuleSet = {
    ...eslintConfigLoveOnlyTypescript.rules,
    'no-loop-func': ['off'],
    'no-underscore-dangle': ['off'],
    'no-unused-expressions': ['off'],
    'no-unused-vars': ['off'],
    'import/no-dynamic-require': ['warn'],
    'import/no-unresolved': ['off'],

    '@typescript-eslint/no-magic-numbers': ['off'],

    '@typescript-eslint/naming-convention': [
        'error',
        {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow'
        },

        {
            selector: 'import',
            format: ['camelCase', 'PascalCase']
        },

        {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },

        {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },

        {
            selector: 'typeLike',
            format: ['PascalCase']
        },

        {
            format: ['strictCamelCase'],
            leadingUnderscore: 'allowSingleOrDouble',
            modifiers: ['destructured'],
            selector: 'variable'
        },

        {
            selector: 'objectLiteralProperty',
            format: null,
            modifiers: ['requiresQuotes']
        }
    ],

    '@typescript-eslint/no-loop-func': ['error'],

    '@typescript-eslint/no-unused-expressions': [
        'error',
        {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: false
        }
    ],

    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_'
        }
    ],

    '@typescript-eslint/no-empty-object-type': [
        'error',
        {
            allowInterfaces: 'always',
            allowObjectTypes: 'never',
            allowWithName: '(Options|Props)$'
        }
    ],

    '@typescript-eslint/class-methods-use-this': ['off']
}

const reactBaseRules: RuleSet = {
    'jsx-a11y/accessible-emoji': ['off'],
    'jsx-a11y/anchor-is-valid': [
        'error',
        {
            aspects: ['invalidHref', 'preferButton'],
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight']
        }
    ],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'import/no-nodejs-modules': ['warn']
}

const react: RuleSet = { ...common, ...reactBaseRules }

const ts: RuleSet = { ...common, ...commonTS }

const tsx: RuleSet = { ...ts, ...reactBaseRules }

export const rules: RuleSets = {
    common,
    imports,
    commonTS,
    reactBaseRules,
    react,
    ts,
    tsx
}
