import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react"],
      // Force JavaScript version of Rollup
      plugins: [
        {
          name: "disable-rollup-native",
          resolveId(source) {
            if (source === "native") return false;
          },
        },
      ],
    },
    target: "es2020",
  },
  optimizeDeps: {
    include: ["react-csv"],
    // Disable esbuild for dependencies that cause issues
    esbuildOptions: {
      plugins: [
        {
          name: "disable-native",
          setup(build) {
            build.onResolve({ filter: /^native$/ }, () => ({ path: false }));
          },
        },
      ],
    },
  },
});
