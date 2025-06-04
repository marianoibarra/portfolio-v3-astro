import partytown from "@astrojs/partytown";
import { defineConfig, fontProviders } from "astro/config";
import { URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: URL,
  integrations: [partytown()],
  experimental: {
    fonts: [
      {
        name: "Figtree",
        cssVariable: "--font-figtree",
        provider: fontProviders.google(),
        // subsets: ["latin"],
        styles: ["normal"],
        weights: [400, 500, 600, 700],
        fallbacks: ["sans-serif"],
        unicodeRange: ["U+0020-007F", "U+00A0-00FF"],
        display: "block",
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [400],
        fallbacks: ["monospace"],
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
