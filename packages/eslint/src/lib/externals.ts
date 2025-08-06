import jsEslint from '@eslint/js'
import eslintConfigLove from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import globals from 'globals'

import type { Linter, Rule } from 'eslint'

export {
    eslintConfigLove,
    eslintConfigPrettier,
    eslintPluginReact,
    globals,
    importPlugin,
    jsEslint,
    jsxA11y
}

export const eslintConfigLoveWithoutTypescript: Linter.Config = {
    // @ts-expect-error mismatch
    plugins: Object.entries(eslintConfigLove.plugins)
        .filter(([plugin]) => !plugin.includes('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {}),
    // @ts-expect-error mismatch
    rules: Object.entries(eslintConfigLove.rules)
        .filter(([k]) => !k.startsWith('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {})
}

export const eslintConfigPrettierWithoutTypescript: Linter.Config = {
    rules: Object.entries(eslintConfigPrettier.rules)
        .filter(([k]) => !k.startsWith('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {})
}

export const eslintConfigLoveOnlyTypescript: Linter.Config = {
    linterOptions: eslintConfigLove.linterOptions,
    // @ts-expect-error mismatch
    languageOptions: eslintConfigLove.languageOptions,
    // @ts-expect-error mismatch
    plugins: Object.entries(eslintConfigLove.plugins)
        .filter(([plugin]) => plugin.includes('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {}),
    // @ts-expect-error mismatch
    rules: Object.entries(eslintConfigLove.rules)
        .filter(([k]) => k.startsWith('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {})
}

export const eslintConfigPrettierOnlyTypescript: Linter.Config = {
    rules: Object.entries(eslintConfigPrettier.rules)
        .filter(([k]) => k.startsWith('@typescript-eslint'))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {})
}

export const recommendedFlatReactPluginsConfig: Linter.Config = {
    plugins: {
        react: {
            rules: eslintPluginReact.rules as Record<string, Rule.RuleModule>
        }
    },

    languageOptions: eslintPluginReact.configs.flat.recommended.languageOptions,

    rules: eslintPluginReact.configs.flat.recommended.rules
}
