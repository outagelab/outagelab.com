import { defineConfig } from 'vitepress'

// @ts-ignore
const gaTagId = process.env.GA_TAG_ID

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Outagelab",
  description: "Lightweight E2E Resilience Testing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: gaTagId ? [
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gaTagId}` }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTagId}');`
    ]
  ] : []
})
