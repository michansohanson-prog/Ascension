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
          {
            text: "Session Recaps",
            collapsed: false,
            items: [
              { text: "Session 1", link: "/Sessions/Session1.md" },
              { text: "Session 2", link: "/Sessions/Session2.md" },
            ],
          },
          {
            text: "Characters",
            link: "/CharacterPage.md",
            collapsed: false,
            items: [
              { text: "Barvin", link: "/Characters/Barvin.md" },
              { text: "Blaise", link: "/Characters/Blaise.md" },
              { text: "Cassius", link: "/Characters/Cassius.md" },
              { text: "Noa", link: "/Characters/Noa.md" },
              { text: "Sicarious", link: "/Characters/Sicarious.md" },
            ],
          },
          {
            text: "Wiki",
            link: "/wiki",
            collapsed: false,
            items: [
              { text: "NPCs", link: "/NPCs/NPCs.md" },
              { text: "Locations", link: "/Locations/Locations.md" },
              { text: "Enemies", link: "Enemies/Enemies.md" },
              { text: "Items", link: "Items/Items.md" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/michansohanson-prog/Ascension",
      },
    ],
  },
});
