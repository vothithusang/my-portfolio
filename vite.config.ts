import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      assets: resolve(__dirname, "./src/assets"),
      elements: resolve(__dirname, "./src/elements"),
      components: resolve(__dirname, "./src/components"),
    },
  },
});
