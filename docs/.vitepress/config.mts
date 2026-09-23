import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ascension",
  description: "A website for use during our DnD Campaign.",
  base: "/Ascension/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Characters", link: "/CharacterPage.md" },
      { text: "Wiki", link: "/wiki.md" },
    ],

    sidebar: [
      {
        text: "Where the fuck are you going?",
        items: [
          { text: "Characters", link: "/CharacterPage.md" },
          {
            text: "Wiki",
            link: "/wiki",
            collapsed: false,
            items: [
              { text: "NPCs" },
              { text: "Locations" },
              { text: "Enemies" },
              { text: "Items" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
