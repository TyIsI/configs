import { js, ts } from '@tyisi/config-eslint'

export default [
    { ignores: ["packages/*/dist/**"] },
    ...js,
    ...ts
]
