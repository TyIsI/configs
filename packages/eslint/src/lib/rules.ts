import type { RuleSets } from './types.js'

export const rules: RuleSets = {
    common: {
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

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',

        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',

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
                'newlines-between': 'always',

                'pathGroups': [
                    {
                        group: 'builtin',
                        pattern: 'react',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/app/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/components/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/images/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/lib/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/pages/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/providers/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/shared/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/services/**',
                        position: 'before'
                    },
                    {
                        group: 'internal',
                        pattern: '@/types/**',
                        position: 'before'
                    },
                    {
                        group: 'object',
                        pattern: '**/*.types.ts',
                        position: 'after'
                    },
                    {
                        group: 'object',
                        pattern: '**/*.s?css',
                        position: 'after'
                    }
                ],

                'pathGroupsExcludedImportTypes': ['react']
            }
        ]
    },
    commonTS: {
        'no-loop-func': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'import/no-dynamic-require': 'warn',
        'import/no-unresolved': 'off',

        // '@typescript-eslint/naming-convention': [
        //     'error',
        //     {
        //         selector: 'default',
        //         format: ['camelCase'],
        //         leadingUnderscore: 'allow',
        //         trailingUnderscore: 'allow'
        //     },

        //     {
        //         selector: 'import',
        //         format: ['camelCase', 'PascalCase']
        //     },

        //     {
        //         selector: 'variable',
        //         format: ['camelCase', 'UPPER_CASE'],
        //         leadingUnderscore: 'allow',
        //         trailingUnderscore: 'allow'
        //     },

        //     {
        //         selector: 'typeLike',
        //         format: ['PascalCase']
        //     },
        //     {
        //         format: ['strictCamelCase'],
        //         leadingUnderscore: 'allowSingleOrDouble',
        //         modifiers: ['destructured'],
        //         selector: 'variable'
        //     }
        // ],

        '@typescript-eslint/no-loop-func': 'error',

        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowTernary: true
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
                allowWithName: '(Options|Props)$'
            }
        ]
    },

    reactBaseRules: {
        'jsx-a11y/accessible-emoji': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                aspects: ['invalidHref', 'preferButton'],
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight']
            }
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-nodejs-modules': 'warn'
    }
}

rules.react = { ...rules.common, ...rules.reactBaseRules }

rules.ts = { ...rules.common, ...rules.commonTS }

rules.tsx = { ...rules.ts, ...rules.reactBaseRules }
