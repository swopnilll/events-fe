import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable sourcemaps for smaller builds
    cssCodeSplit: true, // Enable CSS splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code (e.g., dependencies) into a separate chunk
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
