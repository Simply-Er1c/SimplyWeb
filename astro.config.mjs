import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://simplyer1c.art",
  vite: {
    plugins: [tailwindcss()],
  },
});
