'use strict'

function filterObject(obj, ...filters) {
    return Object.entries(obj).reduce((c, [k, v]) => {
        if (!filters.includes(k)) c[k] = v
        return c
    }, {})
}
