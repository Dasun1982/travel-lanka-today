export default {
  cacheDir: `.vite-cache-${Date.now()}`,
  build: {
    outDir: 'dist-luxury',
    emptyOutDir: false
  },
  resolve: {
    preserveSymlinks: true
  },
  esbuild: {
    jsx: 'automatic'
  }
};
