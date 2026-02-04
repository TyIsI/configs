import * as Prettier from 'prettier'

type PrettierOverrides = Required<Prettier.Config>['overrides']

type PrettierPlugins = Required<Prettier.Config>['plugins']

abstract class PrettierConfig
    implements Partial<Prettier.Config>, Prettier.Options
{
    [x: string]: unknown

    overrides?: PrettierOverrides
    plugins?: PrettierPlugins
}

export class Config extends PrettierConfig {
    constructor() {
        super()

        this.arrowParens = 'always'
        this.bracketSameLine = false
        this.bracketSpacing = true
        this.embeddedLanguageFormatting = 'auto'
        this.htmlWhitespaceSensitivity = 'strict'
        this.jsxSingleQuote = true
        this.proseWrap = 'preserve'
        this.quoteProps = 'consistent'
        this.semi = false
        this.singleAttributePerLine = false
        this.singleQuote = true
        this.trailingComma = 'none'
    }

    withOptions(options: Prettier.Options): this {
        if (
            typeof options !== 'object' ||
            options == null ||
            Array.isArray(options)
        )
            throw new Error('Invalid options')

        for (const option in options) {
            if (option === 'overrides' && Array.isArray(options[option]))
                this.withOverrides(...options[option])
            else if (option === 'plugins' && Array.isArray(options[option]))
                this.withPlugins(...options[option])
            else this[option] = options[option]
        }

        return this
    }

    withOverrides(...overrides: PrettierOverrides): this {
        this.overrides ??= []

        this.overrides.push(...overrides)

        return this
    }

    withPlugins(...plugins: PrettierPlugins): this {
        this.plugins ??= []

        this.plugins.push(...plugins)

        return this
    }
}

const config = new Config()

export default config
