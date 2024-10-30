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

export const recommendedFlatReactPluginsConfig: Linter.Config = {
    plugins: {
        react: {
            rules: eslintPluginReact.rules as Record<string, Rule.RuleModule>
        }
    },

    // @ts-expect-error non existent
    languageOptions: eslintPluginReact.configs.flat.recommended.languageOptions,

    // @ts-expect-error non existent
    rules: eslintPluginReact.configs.flat.recommended.rules
}
