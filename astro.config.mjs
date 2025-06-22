// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    site: "https://simply-er1c.github.io",
    base: "my-repo",
    plugins: [tailwindcss()],
  },
});
