import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['@chakra-ui/react', 'react', 'react-dom'],
  sourcemap: true,
})
