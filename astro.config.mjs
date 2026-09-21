import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/pcdt
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/pcdt",
  output: "static",
  integrations: [tailwind()],
});
