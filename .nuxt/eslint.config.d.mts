import type { FlatConfigComposer } from "../node_modules/.pnpm/eslint-flat-config-utils@2.1.1/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../node_modules/.pnpm/@nuxt+eslint-config@1.3.0_@typescript-eslint+utils@8.39.0_eslint@9.33.0_jiti@2.5.1__typ_ef7096eab29594fe88384b49c805ba3b/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../node_modules/.pnpm/@nuxt+eslint-config@1.3.0_@typescript-eslint+utils@8.39.0_eslint@9.33.0_jiti@2.5.1__typ_ef7096eab29594fe88384b49c805ba3b/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }