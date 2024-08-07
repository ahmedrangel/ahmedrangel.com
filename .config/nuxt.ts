import { INFO } from "../utils/info.js";

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
  app: {
    rootId: "app",
    head: {
      title: INFO.name,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "darkreader-lock", content: "darkreader" }
      ]
    }
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "nuxt-aos", "@nuxt/eslint", "@nuxtjs/sitemap"],
  features: {
    inlineStyles: false
  },
  site: {
    url: "https://" + INFO.domain
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  sitemap: {
    dynamicUrlsApiEndpoint: "/__sitemap",
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "Zen Kaku Gothic New": [300, 400, 500, 700]
    }
  },
  aos: {
    easing: "ease-in-sine",
    duration: 500
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  }
});
