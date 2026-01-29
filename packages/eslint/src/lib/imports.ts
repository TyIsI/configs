const importsMap = {
    'languageOptions.parser': 'typescript-eslint!parser',
    'plugins.@typescript-eslint': 'typescript-eslint',
    'plugins.@eslint-community/eslint-comments':
        '@eslint-community/eslint-plugin-eslint-comments',
    'plugins.import': 'eslint-plugin-import',
    'plugins.jsx-a11y': 'eslint-plugin-jsx-a11y',
    'plugins.n': 'eslint-plugin-n',
    'plugins.promise': 'eslint-plugin-promise',
    'plugins.react': 'eslint-plugin-react'
}

export const isValidImport = (inp: unknown): inp is keyof typeof importsMap =>
    typeof inp === 'string' && inp in importsMap

export const getMappedImportSource = (importKey: string): string => {
    if (!isValidImport(importKey))
        throw new Error(`Import ${importKey} not found!`)

    return importsMap[importKey]
}
