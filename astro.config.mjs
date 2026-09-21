import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/pcdt
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/pcdt",
  output: "static",
  integrations: [tailwind()],
});
