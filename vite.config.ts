import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from "vite-plugin-pwa";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
		registerType: "autoUpdate",
	}),
],
	build: {
		assetsInlineLimit: 0, // Set to 0 to disable inlining completely
		outDir: './build',
	},
});
