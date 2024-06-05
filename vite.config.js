import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  server: {
    // port: 3000,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
  theme: {
    extend: {},
  },
  plugins: [react()],
});
