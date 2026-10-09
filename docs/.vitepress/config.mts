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
      { text: "Lore", link: "/Lore.md" },
    ],

    sidebar: [
      {
        text: "Where the fuck are you going?",
        items: [
          {
            text: "Session Recaps",
            collapsed: false,
            items: [
              { text: "Session 1", link: "/Sessions/Session1" },
              { text: "Session 2", link: "/Sessions/Session2" },
            ],
          },
          {
            text: "Characters",
            link: "/CharacterPage.md",
            collapsed: false,
            items: [
              { text: "Barvin", link: "/Characters/Barvin" },
              { text: "Blaise", link: "/Characters/Blaise" },
              { text: "Cassius", link: "/Characters/Cassius" },
              { text: "Noa", link: "/Characters/Noa" },
              { text: "Sicarious", link: "/Characters/Sicarious" },
            ],
          },
          {
            text: "Lore",
            link: "/Lore",
            collapsed: false,
            items: [
              { text: "Gods", link: "/Gods/Gods" },
              { text: "Minor Arcana", link: "/MinorArcana/MinorArcana" },
              { text: "NPCs", link: "/NPCs/NPCs" },
              { text: "Locations", link: "/Locations/Locations" },
              { text: "Enemies", link: "/Enemies/Enemies" },
              { text: "Items", link: "/Items/Items" },
            ],
          },
          {
            text: "Resources",
            collapsed: false,
            items: [
              {
                text: "Character Origins",
                link: "/Resources/character-origins",
              },
              {
                text: "Character Creation",
                link: "/Resources/character-creation",
              },
              {
                text: "Classes",
                link: "/Resources/classes",
              },
              {
                text: "Feats",
                link: "/Resources/feats",
              },
              {
                text: "Equipment",
                link: "/Resources/equipment",
              },
              {
                text: "Spells",
                link: "/Resources/spells",
              },
              {
                text: "Magic Items",
                link: "/Resources/magic-items",
              },
              {
                text: "Animals",
                link: "/Resources/animals",
              },
              {
                text: "Monsters",
                link: "/Resources/monsters",
              },
              {
                text: "Monsters A-Z",
                link: "/Resources/monsters-A-Z",
              },
              {
                text: "Playing the Game",
                link: "/Resources/playing-the-game",
              },
              {
                text: "Gameplay Toolbox",
                link: "/Resources/gameplay-toolbox",
              },
              {
                text: "Rules Glossary",
                link: "/Resources/rules-glossary",
              },
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
