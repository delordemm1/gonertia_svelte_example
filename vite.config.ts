import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.ts",
      publicDirectory: "public",
      buildDirectory: "build",
      refresh: true,
    }),
    svelte({
      compilerOptions: {
        hydratable: true,
      },
      preprocess: [vitePreprocess()],
    }),
  ],
  build: {
    manifest: true, // Generate manifest.json file
    outDir: "public/build",
    emptyOutDir: true,
    // rollupOptions: {
    //   input: "resources/js/app.js",
    //   output: {
    //     entryFileNames: "assets/[name].js",
    //     chunkFileNames: "assets/[name].js",
    //     assetFileNames: "assets/[name].[ext]",
    //     manualChunks: undefined, // Disable automatic chunk splitting
    //   },
    // },
  },
  server: {
    hmr: {
      host: "localhost",
    },
    host: "localhost",
    port: 3200,
  },
});
