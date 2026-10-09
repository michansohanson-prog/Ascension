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
            collapsed: false,
            items: [
              { text: "Our Party", link: "/CharacterPage.md" },
              { text: "Barvin", link: "/Characters/Barvin" },
              { text: "Blaise", link: "/Characters/Blaise" },
              { text: "Cassius", link: "/Characters/Cassius" },
              { text: "Noa", link: "/Characters/Noa" },
              { text: "Sicarious", link: "/Characters/Sicarious" },
            ],
          },
          {
            text: "Lore",
            collapsed: false,
            items: [
              { text: "Overview", link: "/Lore" },
              { text: "Gods", link: "/Gods/Gods" },
              { text: "Minor Arcana", link: "/MinorArcana/MinorArcana" },
              { text: "NPCs", link: "/NPCs/NPCs" },
              { text: "Locations", link: "/Locations/Locations" },
              { text: "Enemies", link: "/Enemies/Enemies" },
              { text: "Items", link: "/Items/Items" },
            ],
          },
          {
            text: "Resources: 5E",
            collapsed: true,
            items: [
              {
                text: "Races",
                collapsed: true,
                items: [
                  { text: "Racial Traits", link: "/5E/01_Races/Racial_Traits" },
                  {
                    text: "Dragonborn",
                    link: "/5E/01_Races/Races_Each/Dragonborn",
                  },
                  {
                    text: "Dwarf",
                    link: "/5E/01_Races/Races_Each/Dwarf",
                  },
                  {
                    text: "Elf",
                    link: "/5E/01_Races/Races_Each/Elf",
                  },
                  {
                    text: "Gnome",
                    link: "/5E/01_Races/Races_Each/Gnome",
                  },
                  {
                    text: "Half-Elf",
                    link: "/5E/01_Races/Races_Each/Half-Elf",
                  },
                  {
                    text: "Half-Orc",
                    link: "/5E/01_Races/Races_Each/Half-Orc",
                  },
                  {
                    text: "Halfling",
                    link: "/5E/01_Races/Races_Each/Halfling",
                  },
                  {
                    text: "Human",
                    link: "/5E/01_Races/Races_Each/Human",
                  },
                  {
                    text: "Tiefling",
                    link: "/5E/01_Races/Races_Each/Tiefling",
                  },
                ],
              },
              {
                text: "Classes",
                collapsed: true,
                items: [
                  { text: "Barbarian", link: "/5E/02_Classes/Barbarian" },
                  { text: "Bard", link: "/5E/02_Classes/Bard" },
                  { text: "Cleric", link: "/5E/02_Classes/Cleric" },
                  { text: "Druid", link: "/5E/02_Classes/Druid" },
                  { text: "Fighter", link: "/5E/02_Classes/Fighter" },
                  { text: "Monk", link: "/5E/02_Classes/Monk" },
                  { text: "Paladin", link: "/5E/02_Classes/Paladin" },
                  { text: "Ranger", link: "/5E/02_Classes/Ranger" },
                  { text: "Rogue", link: "/5E/02_Classes/Rogue" },
                  { text: "Sorcerer", link: "/5E/02_Classes/Sorcerer" },
                  { text: "Warlock", link: "/5E/02_Classes/Warlock" },
                  { text: "Wizard", link: "/5E/02_Classes/Wizard" },
                ],
              },
              {
                text: "Characterization",
                collapsed: true,
                items: [
                  {
                    text: "Alignment",
                    link: "/5E/03_Characterization/Alignment",
                  },
                  {
                    text: "Backgrounds",
                    link: "/5E/03_Characterization/Backgrounds",
                  },
                  {
                    text: "Beyond LVL 1",
                    link: "/5E/03_Characterization/Beyond_1st_Level",
                  },
                  {
                    text: "Inspiration",
                    link: "/5E/03_Characterization/Inspiration",
                  },
                  {
                    text: "Languages",
                    link: "/5E/03_Characterization/Languages",
                  },
                  {
                    text: "Multiclassing",
                    link: "/5E/03_Characterization/Multiclassing",
                  },
                ],
              },
              {
                text: "Equipment",
                collapsed: true,
                items: [
                  {
                    text: "Adventuring Gear",
                    link: "/5E/04_Equipment/Adventuring_Gear",
                  },
                  {
                    text: "Armor",
                    link: "/5E/04_Equipment/Armor",
                  },
                  {
                    text: "Coinage",
                    link: "/5E/04_Equipment/Coinage",
                  },
                  {
                    text: "Expenses",
                    link: "/5E/04_Equipment/Expenses",
                  },
                  {
                    text: "Selling",
                    link: "/5E/04_Equipment/Selling_Treasure",
                  },
                  {
                    text: "Tools",
                    link: "/5E/04_Equipment/Tools",
                  },
                  {
                    text: "Trade Goods",
                    link: "/5E/04_Equipment/Trade_Goods",
                  },
                  {
                    text: "Transportation",
                    link: "/5E/04_Equipment/Transportation",
                  },
                  {
                    text: "Weapons",
                    link: "/5E/04_Equipment/Weapons",
                  },
                ],
              },
              {
                text: "Feats",
                collapsed: true,
                items: [
                  { text: "Feats - Incomplete", link: "/5E/05_Feats/Feats" },
                ],
              },
              {
                text: "Gameplay",
                collapsed: true,
                items: [
                  {
                    text: "Adventuring",
                    link: "/5E/06_Gameplay/Adventuring",
                  },
                  {
                    text: "Order of Combat",
                    link: "/5E/06_Gameplay/Order_of_Combat",
                  },
                  {
                    text: "Ability Scores",
                    link: "/5E/06_Gameplay/Using_Ability_Scores",
                  },
                ],
              },
              {
                text: "Spells",
                collapsed: true,
                items: [
                  {
                    text: "Spellcasting",
                    link: "/5E/07_Spells/Spellcasting",
                  },
                  {
                    text: "Spells List",
                    link: "/5E/07_Spells/Spell_Lists",
                  },
                  {
                    text: "Spells A",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_A",
                  },
                  {
                    text: "Spells B",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_B",
                  },
                  {
                    text: "Spells C",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_C",
                  },
                  {
                    text: "Spells D",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_D",
                  },
                  {
                    text: "Spells E",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_E",
                  },
                  {
                    text: "Spells F",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_F",
                  },
                  {
                    text: "Spells G",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_G",
                  },
                  {
                    text: "Spells H",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_H",
                  },
                  {
                    text: "Spells I",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_I",
                  },
                  {
                    text: "Spells J",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_J",
                  },
                  {
                    text: "Spells K",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_K",
                  },
                  {
                    text: "Spells L",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_L",
                  },
                  {
                    text: "Spells M",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_M",
                  },
                  {
                    text: "Spells N",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_N",
                  },
                  {
                    text: "Spells O",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_O",
                  },
                  {
                    text: "Spells P",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_P",
                  },
                  {
                    text: "Spells Q",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_Q",
                  },
                  {
                    text: "Spells R",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_R",
                  },
                  {
                    text: "Spells S",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_S",
                  },
                  {
                    text: "Spells T",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_T",
                  },
                  {
                    text: "Spells U",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_U",
                  },
                  {
                    text: "Spells V",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_V",
                  },
                  {
                    text: "Spells W",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_W",
                  },
                  {
                    text: "Spells X",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_X",
                  },
                  {
                    text: "Spells Y",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_Y",
                  },
                  {
                    text: "Spells Z",
                    link: "/5E/07_Spells/Spells_A-Z/Spells_Z",
                  },
                ],
              },
              {
                text: "Gamemastering",
                collapsed: true,
                items: [
                  {
                    text: "Conditions",
                    link: "/5E/08_Gamemastering/Conditions",
                  },
                  {
                    text: "Diseases",
                    link: "/5E/08_Gamemastering/Diseases",
                  },
                  {
                    text: "Madness",
                    link: "/5E/08_Gamemastering/Madness",
                  },
                  {
                    text: "Objects",
                    link: "/5E/08_Gamemastering/Objects",
                  },
                  {
                    text: "Pantheons",
                    link: "/5E/08_Gamemastering/Pantheons",
                  },
                  {
                    text: "Planes",
                    link: "/5E/08_Gamemastering/Planes",
                  },
                  {
                    text: "Poisons",
                    link: "/5E/08_Gamemastering/Poisons",
                  },
                  {
                    text: "Traps",
                    link: "/5E/08_Gamemastering/Traps",
                  },
                ],
              },
              {
                text: "Magic Items",
                collapsed: true,
                items: [
                  {
                    text: "Magic Items General",
                    link: "/5E/09_Magic_Items/Magic_Items",
                  },
                  {
                    text: "Sentient Magic",
                    link: "/5E/09_Magic_Items/Sentient_Magic",
                  },
                  {
                    text: "Artifacts",
                    link: "/5E/09_Magic_Items/Artifacts",
                  },
                  {
                    text: "Magic Items A",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_A",
                  },
                  {
                    text: "Magic Items B",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_B",
                  },
                  {
                    text: "Magic Items C",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_C",
                  },
                  {
                    text: "Magic Items D",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_D",
                  },
                  {
                    text: "Magic Items E",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_E",
                  },
                  {
                    text: "Magic Items F",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_F",
                  },
                  {
                    text: "Magic Items G",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_G",
                  },
                  {
                    text: "Magic Items H",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_H",
                  },
                  {
                    text: "Magic Items I",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_I",
                  },
                  {
                    text: "Magic Items J",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_J",
                  },
                  {
                    text: "Magic Items K",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_K",
                  },
                  {
                    text: "Magic Items L",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_L",
                  },
                  {
                    text: "Magic Items M",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_M",
                  },
                  {
                    text: "Magic Items N",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_N",
                  },
                  {
                    text: "Magic Items O",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_O",
                  },
                  {
                    text: "Magic Items P",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_P",
                  },
                  {
                    text: "Magic Items Q",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_Q",
                  },
                  {
                    text: "Magic Items R",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_R",
                  },
                  {
                    text: "Magic Items S",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_S",
                  },
                  {
                    text: "Magic Items T",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_T",
                  },
                  {
                    text: "Magic Items U",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_U",
                  },
                  {
                    text: "Magic Items V",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_V",
                  },
                  {
                    text: "Magic Items W",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_W",
                  },
                  {
                    text: "Magic Items X",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_X",
                  },
                  {
                    text: "Magic Items Y",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_Y",
                  },
                  {
                    text: "Magic Items Z",
                    link: "/5E/09_Magic_Items/Magic_Items_A-z/Magic_Items_Z",
                  },
                ],
              },
              { text: "NPC's", link: "/5E/10_Monsters/Monsters_A-Z/NPCs" },
              {
                text: "Creatures",
                collapsed: true,
                items: [
                  {
                    text: "Creatures A-C",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_A-C",
                  },
                  {
                    text: "Creatures D-F",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_D-F",
                  },
                  {
                    text: "Creatures G-I",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_G-I",
                  },
                  {
                    text: "Creatures J-L",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_J-L",
                  },
                  {
                    text: "Creatures M-O",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_M-O",
                  },
                  {
                    text: "Creatures P-R",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_P-R",
                  },
                  {
                    text: "Creatures S-U",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_S-U",
                  },
                  {
                    text: "Creatures V-Z",
                    link: "/5E/10_Monsters/Monsters_A-Z/Creatures_V-Z",
                  },
                ],
              },
              {
                text: "Monsters",
                collapsed: true,
                items: [
                  {
                    text: "Monsters General",
                    link: "/5E/10_Monsters/Monsters",
                  },
                  {
                    text: "Monsters A",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_A",
                  },
                  {
                    text: "Monsters B",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_B",
                  },
                  {
                    text: "Monsters C",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_C",
                  },
                  {
                    text: "Monsters D",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_D",
                  },
                  {
                    text: "Monsters E",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_E",
                  },
                  {
                    text: "Monsters F",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_F",
                  },
                  {
                    text: "Monsters G",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_G",
                  },
                  {
                    text: "Monsters H",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_H",
                  },
                  {
                    text: "Monsters I",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_I",
                  },
                  {
                    text: "Monsters J",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_J",
                  },
                  {
                    text: "Monsters K",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_K",
                  },
                  {
                    text: "Monsters L",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_L",
                  },
                  {
                    text: "Monsters M",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_M",
                  },
                  {
                    text: "Monsters N",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_N",
                  },
                  {
                    text: "Monsters O",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_O",
                  },
                  {
                    text: "Monsters P",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_P",
                  },
                  {
                    text: "Monsters Q",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_Q",
                  },
                  {
                    text: "Monsters R",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_R",
                  },
                  {
                    text: "Monsters S",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_S",
                  },
                  {
                    text: "Monsters T",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_T",
                  },
                  {
                    text: "Monsters U",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_U",
                  },
                  {
                    text: "Monsters V",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_V",
                  },
                  {
                    text: "Monsters W",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_W",
                  },
                  {
                    text: "Monsters X",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_X",
                  },
                  {
                    text: "Monsters Y",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_Y",
                  },
                  {
                    text: "Monsters Z",
                    link: "/5E/10_Monsters/Monsters_A-Z/Monsters_Z",
                  },
                ],
              },
            ],
          },
          {
            text: "Resources *NOTE: 5.21 may be different",
            collapsed: true,
            items: [
              {
                text: "Character Origins",
                link: "/Resources521/character-origins",
              },
              {
                text: "Character Creation",
                link: "/Resources521/character-creation",
              },
              {
                text: "Classes",
                link: "/Resources521/classes",
              },
              {
                text: "Feats",
                link: "/Resources521/feats",
              },
              {
                text: "Equipment",
                link: "/Resources521/equipment",
              },
              {
                text: "Spells",
                link: "/Resources521/spells",
              },
              {
                text: "Magic Items",
                link: "/Resources521/magic-items",
              },
              {
                text: "Animals",
                link: "/Resources521/animals",
              },
              {
                text: "Monsters",
                link: "/Resources521/monsters",
              },
              {
                text: "Monsters A-Z",
                link: "/Resources521/monsters-A-Z",
              },
              {
                text: "Playing the Game",
                link: "/Resources521/playing-the-game",
              },
              {
                text: "Gameplay Toolbox",
                link: "/Resources521/gameplay-toolbox",
              },
              {
                text: "Rules Glossary",
                link: "/Resources521/rules-glossary",
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
