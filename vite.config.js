import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react"],
    },
  },
  optimizeDeps: {
    include: ["react-csv"],
  },
  build: {
    target: 'es2020' // Force ES2020 output
  },
});
