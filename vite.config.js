import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 8000,
    host: true,
    origin: "http://localhost:8000",
    watch: {
      usePolling: true
    }
  },
});
