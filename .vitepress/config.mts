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
      { text: "Docs", link: "/docs" },
      // { text: "Pricing", link: "/markdown-examples" },
      {
        text: "Sign In",
        link: "https://app.outagelab.com",
        target: "_self",
        rel: "sponsored",
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is OutageLab?",
            link: "/docs/introduction/what-is-outagelab",
          },
          {
            text: "Getting Started",
            link: "/docs/introduction/getting-started",
          },
          {
            text: "Ways to Use it",
            link: "/docs/introduction/ways-to-use-it",
          },
        ],
      },
      {
        text: "Features",
        items: [{ text: "Outage Types", link: "/docs/features/outage-types" }],
      },
      {
        text: "Reference",
        items: [
          {
            text: "Integration SDK's",
            link: "/docs/reference/integration-sdks",
            items: [
              {
                text: "JavaScript",
                link: "/docs/reference/integration-sdks/javascript",
              },
              {
                text: "Other Languages",
                link: "/docs/reference/integration-sdks/other",
              },
              // { text: "Golang", link: "/golang-sdk" },
              // { text: "Python", link: "/python-sdk" },
              // { text: "Ruby", link: "/ruby-sdk" },
              // { text: "Java", link: "/java-sdk" },
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
