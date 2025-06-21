import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015', // Support Chrome 61+ (well below Chrome 92)
    cssTarget: 'chrome61', // Support Chrome 61+
    rollupOptions: {
      output: {
        // Ensure compatibility with older browsers
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  esbuild: {
    target: 'es2015', // Transpile to ES2015 for Chrome 61+ compatibility
    // Additional options for better compatibility
    supported: {
      'dynamic-import': false, // Disable dynamic imports for older browsers
    }
  },
  // Define for older browser compatibility
  define: {
    global: 'globalThis',
  },
  server: {
    // Ensure development server works with older browsers
    fs: {
      strict: false
    }
  }
});