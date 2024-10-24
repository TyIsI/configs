import type { Linter } from 'eslint'

type ExportedConfigs =
    | 'recommended'
    | 'errors'
    | 'warnings'
    | 'stage-0'
    | 'react'
    | 'react-native'
    | 'electron'
    | 'typescript'

type ExportedFlatConfigs =
    | 'recommended'
    | 'errors'
    | 'warnings'
    | 'react'
    | 'react-native'
    | 'electron'
    | 'typescript'

declare const EslintImportPlugin: {
    rules: Linter.Config['rules']
    flatConfigs: Record<ExportedFlatConfigs, Linter.Config>
    configs: Record<ExportedConfigs, Linter.Config>
}

export = EslintImportPlugin
