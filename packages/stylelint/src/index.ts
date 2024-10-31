const config = {
    plugins: ['stylelint-order', 'stylelint-prettier'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-css-modules',
        'stylelint-config-property-sort-order-smacss',
        'stylelint-config-clean-order'
    ],
    rules: {
        'block-no-empty': null,
        'no-empty-source': null,
        'selector-class-pattern': [
            '^([A-Za-z][a-z0-9]*)(\\-{0,2}[A-Za-z0-9][a-z0-9]*)*$',
            {
                resolveNestedSelectors: true
            }
        ],
        'custom-property-pattern': [
            '([a-z][a-z0-9]*)(\\-{0,2}[A-Za-z0-9][a-z0-9]*)*$',
            {
                resolveNestedSelectors: true
            }
        ],
        'media-query-no-invalid': null,
        'no-invalid-position-at-import-rule': null,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-order': ['width', 'height'],
        'scss/comment-no-empty': null,
        'prettier/prettier': true
    },
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss'
        }
    ]
}

export default config
