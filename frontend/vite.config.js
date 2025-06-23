import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://grab-your-meal-backend.onrender.com/",
        changeOrigin: true,
        secure: false, // ✅ Bypass SSL verification (for self-signed certs)
      },
    },
  },
  plugins: [react()],
});
