import type { ConfigExport } from './types.js'

export const isConfigExport = (inp?: unknown): inp is ConfigExport =>
    inp != null &&
    typeof inp === 'object' &&
    !Array.isArray(inp) &&
    'default' in inp &&
    Array.isArray(inp.default)
