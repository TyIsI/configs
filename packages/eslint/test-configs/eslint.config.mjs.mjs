import mjs from '../dist/mjs.mjs'
// import tsdoceslint from 'eslint-plugin-tsdoc'

export default [
    ...mjs,
    {
        files: ['**/*.mjs'],

        rules: {
            'class-methods-use-this': 'off',

            'import/no-dynamic-require': 'off'
        }
    }
]
