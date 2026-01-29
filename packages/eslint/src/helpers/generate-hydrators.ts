/* eslint-disable eqeqeq, no-console, no-param-reassign -- YOLO LMAO */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import { isConfigExport } from '../lib/guards.js'
import { getMappedImportSource, isValidImport } from '../lib/imports.js'

import {
    validFileTypes,
    type SuspendedConfig,
    type ValidFileType
} from './types.js'

const isValidFileType = (inp?: unknown): inp is ValidFileType =>
    typeof inp === 'string' && (validFileTypes as string[]).includes(inp)

const rootDir = path.resolve(
    path.join(
        typeof __dirname === 'undefined' ? import.meta.dirname : __dirname,
        '../..'
    )
)

if (process.cwd() !== rootDir) process.chdir(rootDir)

generateSuspendedConfig()

function generateSuspendedConfig(): void {
    if (process.argv.length < 3) throw new Error('Missing arguments')

    const outputFileTypes = process.argv.slice(2, process.argv.length)

    if (!outputFileTypes.every((e) => isValidFileType(e)))
        throw new Error(
            `Invalid output file types: ${outputFileTypes.join(', ')}`
        )

    outputFileTypes.forEach((outputFileType) => {
        void generateOutputFiles(outputFileType)
    })
}

async function generateOutputFiles(outputFileType: string): Promise<void> {
    const configFilePath = path.resolve(
        path.join(rootDir, `./src/configs/${outputFileType}.ts`)
    )

    if (!fs.existsSync(configFilePath))
        throw new Error(`Config file ${configFilePath} was not found!`)

    const configImport = (await import(configFilePath)) as unknown

    if (!isConfigExport(configImport))
        throw new Error(`Invalid import for ${outputFileType}`)

    const config: SuspendedConfig = coerceEslintMetaData(
        configImport.default[0]
    ) as SuspendedConfig

    generateHydratorFiles(outputFileType, config)
}

function generateHydratorFiles(
    outputFileType: string,
    config: SuspendedConfig
): void {
    generateDataFile(config, outputFileType)

    generateHydratorFile('cjs', config.$imports, outputFileType)

    generateHydratorFile('esm', config.$imports, outputFileType)
}

function generateDistFilePath(outputFileType: string, ext: string): string {
    return path.resolve(path.join(rootDir, `./dist/${outputFileType}.${ext}`))
}

function generateDataFile(
    config: SuspendedConfig,
    outputFileType: string
): void {
    saveFile(
        generateDistFilePath(outputFileType, 'json'),
        JSON.stringify(config, importsReplacer)
    )
}

function generateHydratorFile(
    dialect: 'cjs' | 'esm',
    imports: string[] | undefined,
    outputFileType: string
): void {
    imports ??= []

    const generateCJS = dialect === 'cjs'

    const importDict = new Map<string, string>()

    const content: string[] = [
        '// @ts-nocheck',
        generateCJS
            ? `const fs = require('node:fs')`
            : `import fs from 'node:fs'`,
        generateCJS
            ? `const path = require('node:path')`
            : `import path from 'node:path'`,
        '',
        generateCJS ? `require('./lib.cjs')` : `import './lib.mjs'`,
        '',
        generateCJS
            ? `const { hydrateConfigData } = require('./hydrator.cjs')`
            : `import { hydrateConfigData } from './hydrator.mjs'`,
        '',
        ...imports.map(($import) => {
            const importParts = getMappedImportSource($import).split('!')

            const normalizedImportName =
                importParts.length > 1
                    ? normalizeImportName(importParts.join('-'))
                    : normalizeImportName(importParts[0])

            importDict.set($import, normalizedImportName)

            return generateCJS
                ? `const ${generateImportReceiver(true, normalizedImportName, importParts[1])} = require('${importParts[0]}')`
                : `import ${generateImportReceiver(false, normalizedImportName, importParts[1])} from '${importParts[0]}'`
        }),
        '',
        [
            'const hydrationDict = {',
            importDict
                .entries()
                .map(([k, v]) => `'${k}': ${v}`)
                .toArray()
                .join(', '),
            '}'
        ].join(' '),
        '',
        generateCJS
            ? `const data = JSON.parse(fs.readFileSync(path.resolve(path.join(__dirname,'./${outputFileType}.json')),'utf-8'))`
            : `const data = JSON.parse(fs.readFileSync(path.resolve(path.join(import.meta.dirname,'./${outputFileType}.json')),'utf-8'))`,
        '',
        `const config = [hydrateConfigData(hydrationDict,data)]`,
        '',
        generateCJS ? 'module.exports = config' : 'export default config',
        ''
    ]

    saveFile(
        generateDistFilePath(outputFileType, generateCJS ? 'cjs' : 'mjs'),
        content.join('\n')
    )
}

function saveFile(filePath: string, data: string): void {
    console.debug(`Saving file ${filePath}...`)
    fs.writeFileSync(filePath, data, {
        encoding: 'utf-8'
    })
}

function importsReplacer(_k: string, v: unknown): unknown {
    // console.log('importsReplacer', k, '=>', v)
    if (
        v != null &&
        typeof v === 'object' &&
        !Array.isArray(v) &&
        'meta' in v &&
        v.meta != null &&
        typeof v.meta === 'object' &&
        !Array.isArray(v.meta) &&
        'name' in v.meta &&
        typeof v.meta.name === 'string'
    ) {
        return { $import: v.meta.name }
    }

    return v
}

// function filterObject(obj: object, ...filters: string[]): object {
//     return Object.entries(obj).reduce((c, [k, v]) => {
//         if (!filters.includes(k))
//             // @ts-expect-error -- YOLO
//             // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- YOLO
//             c[k] = v
//         return c
//     }, {})
// }

function coerceEslintMetaData(
    obj: object,
    path?: string[],
    seen?: string[]
): object {
    path ??= []
    seen ??= []

    const result = Object.entries(obj).reduce<typeof obj>((c, [k, v]) => {
        const localPath = [...path, k]
        const localPathString = localPath.join('.')

        // @ts-expect-error -- all as planned
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- all as planned
        c[k] = v

        if (v != null && typeof v === 'object' && !Array.isArray(v)) {
            if (isValidImport(localPathString)) {
                if (!('meta' in v)) {
                    // @ts-expect-error -- all as planned
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- all as planned
                    c[k] = {
                        ...v,
                        meta: { name: getMappedImportSource(localPathString) }
                    }
                }

                seen.push(localPathString)
            } else if (
                seen.findIndex((e) => e.startsWith(localPathString)) === -1
            ) {
                // @ts-expect-error -- all as planned
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- all as planned
                c[k] = coerceEslintMetaData(v, localPath, seen)
            }
        }

        return c
    }, {})

    return path.length === 0 ? { ...result, $imports: seen } : result
}

function generateImportReceiver(
    generateCJS: boolean,
    normalizedImportName: string,
    namedImport?: string
): string {
    // eslint-disable-next-line no-negated-condition -- LMAO
    return namedImport != null
        ? `{ ${namedImport}${generateCJS ? ':' : ' as '} ${normalizedImportName} }`
        : normalizedImportName
}

function normalizeImportName(importName: string): string {
    let normalizedImportName = `import-${importName.replace(/^.*eslint-plugin-/v, '')}`

    // eslint-disable-next-line prefer-named-capture-group -- YOLO
    for (const plugin of normalizedImportName.matchAll(/-((\w)(\w*))/gv)) {
        const from: string = plugin[0]
        const to = `${plugin[2].toUpperCase()}${plugin[3]}`

        normalizedImportName = normalizedImportName.replace(from, to)
    }

    return normalizedImportName
}
