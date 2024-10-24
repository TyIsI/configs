const { generateChangelog } = require('@tyisi/config-changelog')

module.exports = generateChangelog(
    'changelog',
    'eslint',
    'prettier',
    'stylelint'
)
