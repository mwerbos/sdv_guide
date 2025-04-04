const bundles = [
  {
    heading: "Crafts Room",
    items: [
      {
        heading: "Spring Foraging Bundle",
        bgColor: "#86FFC3",
        fgColor: "#008040",
        items: ["Wild Horseradish", "Daffodil", "Leek", "Dandelion"],
      },
      {
        heading: "Summer Foraging Bundle",
        bgColor: "#FFDBEE",
        fgColor: "#A300FF",
        items: ["Grape", "Spice Berry", "Sweet Pea"],
      },
      {
        heading: "Fall Foraging Bundle",
        bgColor: "#FFD998",
        fgColor: "#FF4200",
        items: ["Common Mushroom", "Wild Plum", "Hazelnut", "Blackberry"],
      },
      {
        heading: "Winter Foraging Bundle",
        bgColor: "#DBF6FF",
        fgColor: "#00A0D8",
        items: ["Winter Root", "Crystal Fruit", "Snow Yam", "Crocus"],
      },
      {
        heading: "Construction Bundle",
        bgColor: "#FFD9A8",
        fgColor: "#A27A46",
        items: ["Wood (99)", "Wood (99)", "Stone (99)", "Hardwood (10)"],
      },
      {
        heading: "Exotic Foraging Bundle (5)",
        bgColor: "#FFF6D3",
        fgColor: "#00A658",
        items: [
          "Coconut",
          "Cactus Fruit",
          "Cave Carrot",
          "Red Mushroom",
          "Purple Mushroom",
          "Maple Syrup",
          "Oak Resin",
          "Pine Tar",
          "Morel",
        ],
      },
    ],
  },
  {
    heading: "Pantry",
    items: [
      {
        heading: "Spring Crops Bundle",
        bgColor: "#86FFC3",
        fgColor: "#008040",
        items: ["Parsnip", "Green Bean", "Cauliflower", "Potato"],
      },
      {
        heading: "Summer Crops Bundle",
        bgColor: "#FFDBEE",
        fgColor: "#A300FF",
        items: ["Tomato", "Hot Pepper", "Blueberry", "Melon"],
      },
      {
        heading: "Fall Crops Bundle",
        bgColor: "#FFD998",
        fgColor: "#FF4200",
        items: ["Corn", "Eggplant", "Pumpkin", "Yam"],
      },
      {
        heading: "Quality Crops Bundle (3)",
        bgColor: "#FDFF00",
        fgColor: "#564E00",
        items: [
          "Parsnip (Gold Star) (5)",
          "Melon (Gold Star) (5)",
          "Pumpkin (Gold Star) (5)",
          "Corn (Gold Star) (5)",
        ],
      },
      {
        heading: "Animal Bundle (5)",
        bgColor: "#FFECD6",
        fgColor: "#D1006C",
        items: [
          "Large Milk",
          "Large Egg (Brown)",
          "Large Egg (White)",
          "Large Goat Milk",
          "Wool",
          "Duck Egg",
        ],
      },
      {
        heading: "Artisan Bundle (6)",
        bgColor: "#F3E2FF",
        fgColor: "#002CB0",
        items: [
          "Truffle Oil",
          "Cloth",
          "Goat Cheese",
          "Cheese",
          "Honey",
          "Jelly",
          "Apple",
          "Apricot",
          "Orange",
          "Peach",
          "Pomegranate",
          "Cherry",
        ],
      },
    ],
  },
  {
    heading: "Fish Tank",
    items: [
      {
        heading: "River Fish Bundle",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          {
            labelText: "Sunfish",
            note: "River; 6am-7pm; Spring/Summer; Sun/Wind",
          },
          {
            labelText: "Catfish",
            note: "River/Secret Woods/Witch's Swamp; 6am-12am; Spring/Fall; Rain",
          },
          {
            labelText: "Shad",
            note: "River; 9am-2pm; Spring/Summer/Fall; Rain",
          },
          { labelText: "Tiger Trout", note: "River; 6am-7pm; Fall/Winter" },
        ],
      },
      {
        heading: "Lake Fish Bundle",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          { labelText: "Largemouth Bass", note: "Mountain Lake; 6am-7pm" },
          {
            labelText: "Carp",
            note: "Mountain Lake/Secret Woods; Spring/Summer/Fall",
          },
          { labelText: "Bullhead", note: "Mountain Lake" },
          {
            labelText: "Sturgeon",
            note: "Mountain Lake; 6am-7pm; Summer/Winter",
          },
        ],
      },
      {
        heading: "Ocean Fish Bundle",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          { labelText: "Sardine", note: "Ocean; 6am-7pm; Spring/Fall/Winter" },
          {
            labelText: "Tuna",
            note: "Ocean/Ginger Island; 6am-7pm; Summer/Winter",
          },
          {
            labelText: "Red Snapper",
            note: "Ocean; 6am-7pm; Summer/Fall; Rain",
          },
          {
            labelText: "Tilapia",
            note: "Ocean/Ginger Island; 6am-2pm; Summer/Fall",
          },
        ],
      },
      {
        heading: "Night Fishing Bundle",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          {
            labelText: "Walleye",
            note: "River/Mountain Lake/Forest Pond; 12pm-2am; Fall; Rain",
          },
          { labelText: "Bream", note: "River; 6pm-2am" },
          { labelText: "Eel", note: "Ocean; 4pm-2am; Spring/Fall; Rain" },
        ],
      },
      {
        heading: "Crab Pot Bundle (5)",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          { labelText: "Lobster", note: "" },
          { labelText: "Crayfish", note: "" },
          { labelText: "Crab", note: "" },
          { labelText: "Cockle", note: "" },
          { labelText: "Mussel", note: "" },
          { labelText: "Shrimp", note: "" },
          { labelText: "Snail", note: "" },
          { labelText: "Periwinkle", note: "" },
          { labelText: "Oyster", note: "" },
          { labelText: "Clam", note: "" },
        ],
      },
      {
        heading: "Specialty Fish Bundle",
        bgColor: "#96D8FF",
        fgColor: "#003E64",
        items: [
          { labelText: "Pufferfish", note: "Ocean; 12pm-4pm; Summer; Sun" },
          { labelText: "Ghostfish", note: "The Mines" },
          { labelText: "Sandfish", note: "The Desert; 6am-8pm" },
          { labelText: "Woodskip", note: "Secret Woods" },
        ],
      },
    ],
  },
  {
    heading: "Boiler Room",
    items: [
      {
        heading: "Blacksmith's Bundle",
        bgColor: "#E1E1E1",
        fgColor: "#BA0003",
        items: ["Copper Bar", "Iron Bar", "Gold Bar"],
      },
      {
        heading: "Geologist's Bundle",
        bgColor: "#E1E1E1",
        fgColor: "#BA0003",
        items: ["Quartz", "Earth Crystal", "Frozen Tear", "Fire Quartz"],
      },
      {
        heading: "Adventurer's Bundle (2)",
        bgColor: "#E1E1E1",
        fgColor: "#BA0003",
        items: ["Slime (99)", "Bat Wing (10)", "Solar Essence", "Void Essence"],
      },
    ],
  },
  {
    heading: "Bulletin Board",
    items: [
      {
        heading: "Chef's Bundle",
        bgColor: "#FFDE7C",
        fgColor: "#FF7200",
        items: [
          "Maple Syrup",
          "Fiddlehead Fern",
          "Truffle",
          "Poppy",
          "Maki Roll",
          "Fried Egg",
        ],
      },
      {
        heading: "Dye Bundle",
        bgColor: "#FAFFA3",
        fgColor: "#C702D8",
        items: [
          "Red Mushroom",
          "Sea Urchin",
          "Sunflower",
          "Duck Feather",
          "Aquamarine",
          "Red Cabbage",
        ],
      },
      {
        heading: "Field Research Bundle",
        bgColor: "#A3FFEC",
        fgColor: "#007C65",
        items: ["Purple Mushroom", "Nautilus Shell", "Chub", "Frozen Geode"],
      },
      {
        heading: "Fodder Bundle",
        bgColor: "#FFF2AD",
        fgColor: "#AA4800",
        items: ["Wheat (10)", "Hay (10)", "Apple (3)"],
      },
      {
        heading: "Enchanter's Bundle",
        bgColor: "#CEFFF6",
        fgColor: "#9100FF",
        items: ["Oak Resin", "Wine", "Rabbit's Foot", "Pomegranate"],
      },
    ],
  },
  {
    heading: "Vault",
    items: ["2,500 Bundle", "5,000 Bundle", "10,000 Bundle", "25,000 Bundle"],
  },
];
