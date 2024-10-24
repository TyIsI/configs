import js from '@eslint/js'
import type { Linter } from 'eslint'
import eslintConfigLove from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import globals from 'globals'
import {
    ValidRuleTypes,
    fileGlobs,
    type ConfigTypes,
    type FileTypes,
    type RuleSets,
    type RuleType
} from './lib'

const rules: RuleSets = {
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
        '@typescript-eslint/no-magic-numbers': 'off'
    },
    import: {
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
        ],

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
        ]
    }
}

function generateFlatConfig(
    globName: FileTypes,
    ...configs: Linter.Config[]
): Linter.Config[] {
    if (typeof globName !== 'string')
        throw new Error(`globName is not string: ${typeof globName}`)

    return [...baseConfig, ...configs, ...endConfig].map((configItem) => ({
        ...configItem,
        files: fileGlobs[globName]
    }))
}

function coerceConfigName(
    configName: string,
    configItem: ConfigTypes
): Linter.Config {
    if (typeof configItem !== 'object' || Array.isArray(configItem))
        throw new Error(`configItem is not a valid object`)

    return (
        configItem.name == null
            ? { ...configItem, name: configName }
            : configItem
    ) as Linter.Config
}

function isRulesetType(name?: unknown): name is RuleType {
    return ValidRuleTypes.includes(name as RuleType)
}

function hoistRuleset(name: string, ruleset: Linter.Config['rules']): void {
    if (!isRulesetType(name)) throw new Error('Invalid ruleset')

    if (rules[name] != null) throw new Error('Ruleset already exists')

    rules[name] = ruleset
}

hoistRuleset('reactBaseRules', {
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
})

const flatReactPluginsConfigs = eslintPluginReact.configs.flat as Record<
    string,
    Linter.Config
>

const reactPlugins = {
    eslintPluginReact
}

hoistRuleset('react', {
    ...rules.common,
    ...rules.reactBaseRules
})

hoistRuleset('ts', {
    ...rules.common,
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
})

hoistRuleset('tsx', {
    ...rules.ts,
    ...rules.reactBaseRules
})

const baseConfig = [
    {
        name: '@interspatial/tdm-prettier-config/config/baseConfig/ignores',

        ignores: ['**/node_modules/', '**/build/', '**/dist/', '**/env.d.ts']
    }
]

const endConfig = [eslintConfigPrettier]

const importPluginFlatConfigRecommend = importPlugin.flatConfigs.recommended

const jsConfig: Linter.Config = {
    name: '@interspatial/tdm-prettier-config/config/js',

    files: fileGlobs.js,

    ...js.configs.recommended,
    ...importPluginFlatConfigRecommend,

    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },

    rules: rules.common
}

const jsxConfig = {
    name: '@interspatial/tdm-prettier-config/config/jsx',

    files: fileGlobs.jsx,

    ...js.configs.recommended,
    ...importPlugin.flatConfigs.recommended,

    plugins: reactPlugins,

    ...jsxA11y.flatConfigs.recommended,

    languageOptions: {
        ...jsxA11y.flatConfigs.recommended.languageOptions,

        globals: {
            ...globals.serviceworker,
            ...globals.amd,
            ...globals.browser,
            ...globals.node
        }
    },

    rules: rules.react
}

const tsSettings = {
    settings: {
        'import/resolver': {
            // You will also need to install and configure the TypeScript resolver
            // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
            typescript: true,
            node: {
                extensions: ['.ts']
            }
        }
    }
}

const tsConfig: Linter.Config = {
    name: '@interspatial/tdm-prettier-config/config/ts',

    files: fileGlobs.ts,

    rules: rules.ts,

    ...tsSettings
}

const tsxConfig = {
    name: '@interspatial/tdm-prettier-config/config/tsx',

    files: fileGlobs.tsx,

    rules: rules.tsx,

    ...tsSettings
}

export const configs = {
    js: generateFlatConfig(
        'js',
        coerceConfigName('js.configs.recommended', js.configs.recommended),
        coerceConfigName('importPlugin.flatConfigs.recommended', {
            rules: importPlugin.flatConfigs.recommended.rules
        }),
        coerceConfigName('eslintConfigLove', eslintConfigLove),
        jsConfig
    ),

    jsx: generateFlatConfig(
        'jsx',
        coerceConfigName('js.configs.recommended', js.configs.recommended),
        coerceConfigName('importPlugin.flatConfigs.recommended', {
            rules: importPlugin.flatConfigs.recommended.rules
        }),
        coerceConfigName(
            'jsxA11y.flatConfigs.recommended',
            jsxA11y.flatConfigs.recommended
        ),
        coerceConfigName(
            'eslintPluginReact.configs.flat.recommended',
            flatReactPluginsConfigs.recommended
        ),
        coerceConfigName(
            `eslintPluginReact.configs.flat['jsx-runtime']`,
            flatReactPluginsConfigs['jsx-runtime']
        ),
        coerceConfigName('react-version-settings', {
            settings: { react: { version: 'detect' } }
        }),
        coerceConfigName('eslintConfigLove', eslintConfigLove),
        jsxConfig as Linter.Config
    ),

    ts: generateFlatConfig(
        'ts',
        coerceConfigName('importPlugin.flatConfigs.recommended', {
            rules: importPlugin.flatConfigs.recommended.rules
        }),
        coerceConfigName(
            'jsxA11y.flatConfigs.recommended',
            jsxA11y.flatConfigs.recommended
        ),
        coerceConfigName('eslintConfigLove', eslintConfigLove),
        tsConfig
    ),

    tsx: generateFlatConfig(
        'tsx',
        coerceConfigName('importPlugin.flatConfigs.recommended', {
            rules: importPlugin.flatConfigs.recommended.rules
        }),
        coerceConfigName('importPlugin.flatConfigs.typescript', {
            rules: importPlugin.flatConfigs.typescript.rules
        }),
        coerceConfigName(
            'jsxA11y.flatConfigs.recommended',
            jsxA11y.flatConfigs.recommended
        ),
        coerceConfigName(
            'eslintPluginReact.configs.flat.recommended',
            flatReactPluginsConfigs.recommended
        ),
        coerceConfigName(
            `eslintPluginReact.configs.flat['jsx-runtime']`,
            flatReactPluginsConfigs['jsx-runtime']
        ),
        coerceConfigName('react-version-settings', {
            settings: { react: { version: 'detect' } }
        }),
        coerceConfigName('eslintConfigLove', eslintConfigLove),
        tsxConfig
    )
}

export const combinedConfig = [
    ...configs.js,
    ...configs.jsx,
    ...configs.ts,
    ...configs.tsx
]

export default combinedConfig
