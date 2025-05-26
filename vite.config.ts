import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
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
  build: {
    assetsInlineLimit: 0, // Set to 0 to disable inlining completely
    outDir: "./build",
  },
});
