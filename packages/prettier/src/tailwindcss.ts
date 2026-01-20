import config from './base.js'

export default config
    .withPlugins('prettier-plugin-tailwindcss')
    .withOptions({ tailwindFunctions: ['clsx'] })
