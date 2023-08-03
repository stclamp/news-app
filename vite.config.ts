import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/components', replacement: '/src/components' },
    ],
  },
  define: {
    'process.env': {},
  },
});
