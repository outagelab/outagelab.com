import { defineConfig } from "vitepress";

// @ts-ignore
const gaTagId = process.env.GA_TAG_ID;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OutageLab",
  description: "Lightweight E2E Resilience Testing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/markdown-examples" },
      { text: "Sign In", link: "https://app.outagelab.com" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is OutageLab?", link: "/what-is-outagelab" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Features",
        items: [{ text: "Outage Types", link: "/docs/outage-types" }],
      },
      {
        text: "Reference",
        items: [
          {
            text: "Client SDK's",
            link: "/client-sdks",
            items: [
              { text: "JavaScript", link: "/javascript-sdk" },
              { text: "Golang", link: "/golang-sdk" },
              { text: "Python", link: "/python-sdk" },
              { text: "Ruby", link: "/ruby-sdk" },
              { text: "Java", link: "/java-sdk" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/outagelab/outagelab" },
    ],
    search: {
      provider: "local",
    },
  },
  head: gaTagId
    ? [
        [
          "script",
          {
            async: "",
            src: `https://www.googletagmanager.com/gtag/js?id=${gaTagId}`,
          },
        ],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTagId}');`,
        ],
      ]
    : [],
});
