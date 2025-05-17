import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Design Thinking",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/introduction" },
    ],

    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Methods", link: "/methods" },
          {
            text: "Results",
            items: [
              { text: "Data Analysis", link: "/data-analysis" },
              { text: "Design", link: "/design" },
              { text: "Conclusion", link: "/conclusion" },
            ],
          },
        ],
      },
    ],
  },
});
