import { js, ts } from '@tyisi/config-eslint'

/** @public */
export default [{ ignores: ['packages/*/dist/**'] }, ...js, ...ts]
