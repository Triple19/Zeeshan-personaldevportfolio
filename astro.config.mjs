// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Triple19.github.io",
  base: "/Zeeshan-personaldevportfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});