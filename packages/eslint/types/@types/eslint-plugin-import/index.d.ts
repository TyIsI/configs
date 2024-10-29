declare module 'eslint-plugin-import' {
    import type { Linter } from 'eslint'
    import 'eslint-plugin-import'

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

    type rules = Linter.Config['rules']
    type flatConfigs = Record<ExportedFlatConfigs, Linter.Config>
    type configs = Record<ExportedConfigs, Linter.Config>

    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class EslintPluginImport {
        static rules: Linter.Config['rules']
        static flatConfigs: Record<ExportedFlatConfigs, Linter.Config>
        static configs: Record<ExportedConfigs, Linter.Config>
    }

    export default EslintPluginImport
}
