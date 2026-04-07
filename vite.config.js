import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sri from 'vite-plugin-sri';

export default defineConfig({
  base: "/",
  plugins: [
    react(), 
    tailwindcss(),
    sri()
  ],
  build: {
    chunkSizeWarningLimit: 1000, // naikkan jadi 1MB
    outDir: "dist",
    sourcemap: false
  },
});