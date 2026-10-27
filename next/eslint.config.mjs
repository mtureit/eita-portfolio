import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts']),
  ...nextVitals,
  ...nextTs,
  prettier,
])
