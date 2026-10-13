import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"]
      }
    }),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   workbox: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "image-cache",
    //           expiration: {
    //             maxEntries: 50, // Limit cache size
    //             maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    // use the legacy build of the PDF engine so the resume also renders in older phone browsers
    alias: [
      { find: /^pdfjs-dist$/, replacement: "pdfjs-dist/legacy/build/pdf.mjs" },
      {
        find: /^pdfjs-dist\/web\/pdf_viewer\.mjs$/,
        replacement: "pdfjs-dist/legacy/web/pdf_viewer.mjs",
      },
    ],
  },
  // older phone browsers: keep syntax at es2020 in dev as well as in the build
  esbuild: { target: "es2020" },
  optimizeDeps: { esbuildOptions: { target: "es2020" } },
  server: {
    host: "0.0.0.0",
  },
  build: {
    target: "es2020",
    assetsInlineLimit: 0, // Set to 0 to disable inlining completely
    outDir: "./build",
  },
});
