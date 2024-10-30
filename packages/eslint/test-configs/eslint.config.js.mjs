import js from '../dist/js.mjs'
// import tsdoceslint from 'eslint-plugin-tsdoc'

export default [
    ...js,
    {
        files: ['**/*.js'],

        rules: {
            'class-methods-use-this': 'off',
            'import/no-dynamic-require': 'off'
        }
    }
    // {
    //     files: ['**/*.js', '**/*.ts'],

    //     plugins: {
    //         tsdoc: tsdoceslint
    //     },

    //     rules: {
    //         'tsdoc/syntax': 'warn'
    //     }
    // }
]
