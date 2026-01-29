import * as url from 'node:url'

const __dirname =
    import.meta.dirname ?? url.fileURLToPath(new URL('.', import.meta.url))
const __filename = url.fileURLToPath(import.meta.url)

function filterObject(obj, ...filters) {
    return Object.entries(obj).reduce((c, [k, v]) => {
        if (!filters.includes(k)) c[k] = v
        return c
    }, {})
}
