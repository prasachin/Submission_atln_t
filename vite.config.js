import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-ace', 'brace'],
  },
  esbuild: {
    jsxInject: 'import React from "react";', // Ensure React is always in scope
  },
});
