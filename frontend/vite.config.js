import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false, // ✅ Bypass SSL verification (for self-signed certs)
      },
    },
  },
  plugins: [react()],
});
