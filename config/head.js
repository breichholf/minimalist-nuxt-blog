const buildDate = new Date().toISOString()

import siteMeta from "../assets/config"

export default {
  title: "Brian Reichholf | Data Scientist & Molecular Biology PhD",
  htmlAttrs: {
    lang: siteMeta.lang,
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: siteMeta.description },
    { hid: "author", name: "author", content: siteMeta.author },
    { hid: "robots", name: "robots", content: "index,follow" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@breichholf" },
    { name: "theme-color", content: "#ffffff" },
    { property: "og:type", content: "profile" },
    { property: "og:updated_time", content: buildDate },
  ],
}
