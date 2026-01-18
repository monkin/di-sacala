import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/di-sacala.ts'),
      name: 'DiSacala',
      fileName: 'index',
    },
  },
  plugins: [dts({ exclude: ['**/*.test.ts'] })],
});
