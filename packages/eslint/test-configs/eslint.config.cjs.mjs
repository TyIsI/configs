import { inspect } from 'util'
import cjs from '../dist/cjs.mjs'
// import tsdoceslint from 'eslint-plugin-tsdoc'

export default [
    ...cjs,
    {
        files: ['**/*.cjs'],

        rules: {
            'class-methods-use-this': 'off',
            'import/no-dynamic-require': 'off'
        }
    }
]
