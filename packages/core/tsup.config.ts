import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/route.ts'],
  format: 'esm',
  dts: true,
  clean: true,
  minify: false,
  target: ['node16'],
  outExtension: () => {
    return {
      js: '.mjs',
    }
  },
  publicDir: 'inject',
  external: ['virtual:link-preview-config'],
})
