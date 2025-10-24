import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: [
      "delimo.org", // ← сюда вставляешь свой ngrok-домен
    ],
    host: true, // чтобы слушал все интерфейсы
    port: 5173, // можешь оставить свой
  },
});
