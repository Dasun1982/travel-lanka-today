export default {
  cacheDir: `.vite-cache-${Date.now()}`,
  build: {
    outDir: 'dist',
    emptyOutDir: false
  },
  resolve: {
    preserveSymlinks: true
  },
  esbuild: {
    jsx: 'automatic'
  }
};
