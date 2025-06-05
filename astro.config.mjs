import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import { URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: URL,
  integrations: [partytown()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
