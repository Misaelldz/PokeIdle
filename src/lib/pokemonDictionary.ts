// =============================================================================
// pokemonDictionary.ts
// =============================================================================
// Central dictionary of Pokémon organized by category.
// Used by pokemonFilters.ts to determine item drop conditions.
//
// HOW TO USE:
//   import { POKEMON_BY_TYPE, MEGA_EVOLUTION_POKEMON, ... } from "./pokemonDictionary"
//
// HOW TO MAINTAIN:
//   - Add new Pokémon to the corresponding type array(s)
//   - Pokémon with dual types appear in BOTH type arrays
//   - Names must match exactly what ActivePokemon.name returns (PokeAPI name format)
// =============================================================================

// ── TIPOS ─────────────────────────────────────────────────────────────────────
// Each array contains ALL Pokémon (and their evolutions) of that type.
// Dual-type Pokémon appear in both arrays.

export const POKEMON_BY_TYPE: Record<string, string[]> = {

  normal: [
    // Gen I
    "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate",
    "Spearow", "Fearow",
    "Jigglypuff", "Wigglytuff",
    "Meowth", "Persian",
    "Farfetch'd",
    "Doduo", "Dodrio",
    "Lickitung",
    "Chansey",
    "Kangaskhan",
    "Tauros",
    "Ditto",
    "Eevee",
    "Porygon",
    "Snorlax",
    // Gen II
    "Sentret", "Furret",
    "Hoothoot", "Noctowl",
    "Aipom",
    "Dunsparce",
    "Teddiursa", "Ursaring",
    "Smeargle",
    "Miltank",
    "Blissey",
    // Gen III
    "Zigzagoon", "Linoone",
    "Whismur", "Loudred", "Exploud",
    "Skitty", "Delcatty",
    "Spinda",
    "Zangoose",
    "Castform",
    "Kecleon",
    // Gen IV
    "Bidoof", "Bibarel",
    "Buneary", "Lopunny",
    "Glameow", "Purugly",
    "Ambipom",
    "Lickilicky",
    "Porygon-Z",
    "Happiny",
    "Chatot",
    // Gen V
    "Patrat", "Watchog",
    "Lillipup", "Herdier", "Stoutland",
    "Audino",
    "Minccino", "Cinccino",
    "Bouffalant",
    "Braviary",
    // Gen VI
    "Fletchling",
    "Furfrou",
    "Meowstic",
    // Gen VII
    "Yungoos", "Gumshoos",
    "Pikipek", "Trumbeak", "Toucannon",
    "Komala",
    "Oranguru",
    // Gen VIII
    "Wooloo", "Dubwool",
    "Skwovet", "Greedent",
    "Obstagoon",
    // Gen IX
    "Lechonk", "Oinkologne",
    "Tandemaus", "Maushold",
  ],

  fire: [
    // Gen I
    "Charmander", "Charmeleon", "Charizard",
    "Vulpix", "Ninetales",
    "Growlithe", "Arcanine",
    "Ponyta", "Rapidash",
    "Magmar",
    "Flareon",
    "Moltres",
    // Gen II
    "Cyndaquil", "Quilava", "Typhlosion",
    "Slugma", "Magcargo",
    "Houndour", "Houndoom",
    "Magby",
    "Entei",
    // Gen III
    "Torchic", "Combusken", "Blaziken",
    "Numel", "Camerupt",
    "Torkoal",
    "Groudon",
    // Gen IV
    "Chimchar", "Monferno", "Infernape",
    "Buizel",
    "Magmortar",
    "Heatran",
    // Gen V
    "Tepig", "Pignite", "Emboar",
    "Pansear", "Simisear",
    "Darumaka", "Darmanitan",
    "Litwick", "Lampent", "Chandelure",
    "Heatmor",
    "Victini",
    "Reshiram",
    // Gen VI
    "Fennekin", "Braixen", "Delphox",
    "Fletchinder", "Talonflame",
    "Litleo", "Pyroar",
    "Volcanion",
    // Gen VII
    "Litten", "Torracat", "Incineroar",
    "Salandit", "Salazzle",
    "Turtonator",
    "Blacephalon",
    // Gen VIII
    "Scorbunny", "Raboot", "Cinderace",
    "Sizzlipede", "Centiskorch",
    "Coalossal",
    "Carkol",
    // Gen IX
    "Fuecoco", "Crocalor", "Skeledirge",
    "Charcadet", "Armarouge",
    "Capsakid", "Scovillain",
    "Chi-Yu",
  ],

  water: [
    // Gen I
    "Squirtle", "Wartortle", "Blastoise",
    "Psyduck", "Golduck",
    "Poliwag", "Poliwhirl", "Poliwrath",
    "Tentacool", "Tentacruel",
    "Slowpoke", "Slowbro",
    "Seel", "Dewgong",
    "Shellder", "Cloyster",
    "Krabby", "Kingler",
    "Horsea", "Seadra",
    "Goldeen", "Seaking",
    "Staryu", "Starmie",
    "Magikarp", "Gyarados",
    "Lapras",
    "Vaporeon",
    "Omanyte", "Omastar",
    "Kabuto", "Kabutops",
    "Dratini", "Dragonair", "Dragonite",
    // Gen II
    "Totodile", "Croconaw", "Feraligatr",
    "Marill", "Azumarill",
    "Wooper", "Quagsire",
    "Slowking",
    "Qwilfish",
    "Corsola",
    "Remoraid", "Octillery",
    "Mantine",
    "Kingdra",
    "Suicune",
    // Gen III
    "Mudkip", "Marshtomp", "Swampert",
    "Lotad", "Lombre", "Ludicolo",
    "Wingull", "Pelipper",
    "Surskit",
    "Carvanha", "Sharpedo",
    "Wailmer", "Wailord",
    "Barboach", "Whiscash",
    "Corphish", "Crawdaunt",
    "Feebas", "Milotic",
    "Spheal", "Sealeo", "Walrein",
    "Clamperl", "Huntail", "Gorebyss",
    "Relicanth",
    "Luvdisc",
    "Kyogre",
    // Gen IV
    "Piplup", "Prinplup", "Empoleon",
    "Buizel", "Floatzel",
    "Shellos", "Gastrodon",
    "Finneon", "Lumineon",
    "Mantyke",
    "Glaceon",
    "Phione", "Manaphy",
    // Gen V
    "Oshawott", "Dewott", "Samurott",
    "Panpour", "Simipour",
    "Tympole", "Palpitoad", "Seismitoad",
    "Tirtouga", "Carracosta",
    "Alomomola",
    "Frillish", "Jellicent",
    "Cubchoo", "Beartic",
    "Cryogonal",
    "Keldeo",
    // Gen VI
    "Froakie", "Frogadier", "Greninja",
    "Binacle", "Barbaracle",
    "Skrelp", "Dragalge",
    "Clauncher", "Clawitzer",
    "Bergmite", "Avalugg",
    "Popplio",
    // Gen VII
    "Popplio", "Brionne", "Primarina",
    "Wishiwashi",
    "Mareanie", "Toxapex",
    "Dewpider", "Araquanid",
    "Wimpod", "Golisopod",
    "Bruxish",
    "Tapu Fini",
    // Gen VIII
    "Sobble", "Drizzile", "Inteleon",
    "Chewtle", "Drednaw",
    "Arrokuda", "Barraskewda",
    "Cramorant",
    "Clobbopus", "Grapploct",
    "Eiscue",
    "Urshifu",
    // Gen IX
    "Quaxly", "Quaxwell", "Quaquaval",
    "Wiglett", "Wugtrio",
    "Finizen", "Palafin",
    "Veluza",
    "Dondozo",
    "Tatsugiri",
    "Iron Bundle",
    "Walking Wake",
  ],

  grass: [
    // Gen I
    "Bulbasaur", "Ivysaur", "Venusaur",
    "Oddish", "Gloom", "Vileplume",
    "Bellsprout", "Weepinbell", "Victreebel",
    "Exeggcute", "Exeggutor",
    "Tangela",
    // Gen II
    "Chikorita", "Bayleef", "Meganium",
    "Bellossom",
    "Hoppip", "Skiploom", "Jumpluff",
    "Sunkern", "Sunflora",
    "Celebi",
    // Gen III
    "Treecko", "Grovyle", "Sceptile",
    "Lotad", "Lombre", "Ludicolo",
    "Seedot", "Nuzleaf", "Shiftry",
    "Shroomish", "Breloom",
    "Roselia",
    "Cacnea", "Cacturne",
    "Lileep", "Cradily",
    // Gen IV
    "Turtwig", "Grotle", "Torterra",
    "Budew", "Roserade",
    "Cherubi", "Cherrim",
    "Carnivine",
    "Tangrowth",
    "Leafeon",
    "Shaymin",
    // Gen V
    "Snivy", "Servine", "Serperior",
    "Pansage", "Simisage",
    "Petilil", "Lilligant",
    "Maractus",
    "Deerling", "Sawsbuck",
    "Ferroseed", "Ferrothorn",
    "Foongus", "Amoonguss",
    "Virizion",
    // Gen VI
    "Chespin", "Quilladin", "Chesnaught",
    "Skiddo", "Gogoat",
    "Phantump", "Trevenant",
    "Pumpkaboo", "Gourgeist",
    // Gen VII
    "Rowlet", "Dartrix", "Decidueye",
    "Bounsweet", "Steenee", "Tsareena",
    "Comfey",
    "Fomantis", "Lurantis",
    "Morelull", "Shiinotic",
    "Tapu Bulu",
    // Gen VIII
    "Grookey", "Thwackey", "Rillaboom",
    "Gossifleur", "Eldegoss",
    "Applin", "Flapple", "Appletun",
    "Zarude",
    // Gen IX
    "Sprigatito", "Floragato", "Meowscarada",
    "Smoliv", "Dolliv", "Arboliva",
    "Toedscool", "Toedscruel",
    "Bramblin", "Brambleghast",
    "Wo-Chien",
    "Iron Leaves",
  ],

  electric: [
    // Gen I
    "Pichu", "Pikachu", "Raichu",
    "Magnemite", "Magneton",
    "Voltorb", "Electrode",
    "Electabuzz",
    "Jolteon",
    "Zapdos",
    // Gen II
    "Chinchou", "Lanturn",
    "Elekid",
    "Mareep", "Flaaffy", "Ampharos",
    "Raikou",
    // Gen III
    "Plusle",
    "Minun",
    "Volbeat",
    "Electrike", "Manectric",
    "Shinx", "Luxio", "Luxray",
    // Gen IV
    "Pachirisu",
    "Electivire",
    "Magnezone",
    "Rotom",
    // Gen V
    "Blitzle", "Zebstrika",
    "Emolga",
    "Joltik", "Galvantula",
    "Eelektrik", "Eelektross",
    "Tynamo",
    "Zekrom",
    "Thundurus",
    "Stunfisk",
    // Gen VI
    "Helioptile", "Heliolisk",
    "Dedenne",
    // Gen VII
    "Togedemaru",
    "Vikavolt",
    "Charjabug",
    "Xurkitree",
    "Tapu Koko",
    // Gen VIII
    "Yamper", "Boltund",
    "Toxel", "Toxtricity",
    "Pincurchin",
    "Regieleki",
    "Dracozolt", "Arctozolt",
    // Gen IX
    "Pawmi", "Pawmo", "Pawmot",
    "Tadbulb", "Bellibolt",
    "Wattrel", "Kilowattrel",
    "Miraidon",
    "Iron Hands",
    "Iron Thorns",
  ],

  ice: [
    // Gen I
    "Jynx",
    "Lapras",
    "Articuno",
    // Gen II
    "Sneasel",
    "Swinub", "Piloswine",
    "Delibird",
    "Smoochum",
    // Gen III
    "Snorunt", "Glalie", "Froslass",
    "Regice",
    "Spheal", "Sealeo", "Walrein",
    // Gen IV
    "Snover", "Abomasnow",
    "Glaceon",
    "Froslass",
    "Mamoswine",
    "Weavile",
    // Gen V
    "Vanillite", "Vanillish", "Vanilluxe",
    "Cubchoo", "Beartic",
    "Cryogonal",
    "Kyurem",
    // Gen VI
    "Bergmite", "Avalugg",
    "Amaura", "Aurorus",
    // Gen VII
    "Sandygast",
    "Alolan Sandshrew", "Alolan Sandslash",
    "Alolan Vulpix", "Alolan Ninetales",
    "Crabominable",
    // Gen VIII
    "Eiscue",
    "Galarian Darumaka", "Galarian Darmanitan",
    "Galarian Mr. Mime", "Mr. Rime",
    "Arctovish", "Arctozolt",
    "Regice",
    "Glastrier",
    "Calyrex",
    // Gen IX
    "Frigibax", "Arctibax", "Baxcalibur",
    "Cetoddle", "Cetitan",
    "Chien-Pao",
    "Iron Bundle",
  ],

  fighting: [
    // Gen I
    "Mankey", "Primeape",
    "Poliwrath",
    "Machop", "Machoke", "Machamp",
    "Hitmonlee",
    "Hitmonchan",
    // Gen II
    "Heracross",
    "Tyrogue",
    "Hitmontop",
    "Sneasel",
    // Gen III
    "Makuhita", "Hariyama",
    "Meditite", "Medicham",
    "Combusken", "Blaziken",
    "Breloom",
    // Gen IV
    "Riolu", "Lucario",
    "Croagunk", "Toxicroak",
    "Gallade",
    "Infernape",
    "Buizel",
    "Regigigas",
    // Gen V
    "Timburr", "Gurdurr", "Conkeldurr",
    "Throh", "Sawk",
    "Mienfoo", "Mienshao",
    "Cobalion", "Terrakion", "Virizion",
    "Keldeo",
    "Landorus",
    // Gen VI
    "Pancham", "Pangoro",
    "Hawlucha",
    // Gen VII
    "Crabrawler", "Crabominable",
    "Stufful", "Bewear",
    "Passimian",
    "Buzzwole",
    // Gen VIII
    "Falinks",
    "Clobbopus", "Grapploct",
    "Urshifu",
    // Gen IX
    "Quaquaval",
    "Flamigo",
    "Iron Valiant",
    "Annihilape",
  ],

  poison: [
    // Gen I
    "Bulbasaur", "Ivysaur", "Venusaur",
    "Weedle", "Kakuna", "Beedrill",
    "Ekans", "Arbok",
    "Nidoran♀", "Nidorina", "Nidoqueen",
    "Nidoran♂", "Nidorino", "Nidoking",
    "Oddish", "Gloom", "Vileplume",
    "Bellsprout", "Weepinbell", "Victreebel",
    "Tentacool", "Tentacruel",
    "Gastly", "Haunter", "Gengar",
    "Grimer", "Muk",
    "Koffing", "Weezing",
    // Gen II
    "Spinarak", "Ariados",
    "Qwilfish",
    "Slugma",
    "Murkrow",
    // Gen III
    "Roselia",
    "Gulpin", "Swalot",
    "Seviper",
    // Gen IV
    "Budew", "Roserade",
    "Glameow",
    "Croagunk", "Toxicroak",
    "Stunky", "Skuntank",
    // Gen V
    "Foongus", "Amoonguss",
    // Gen VI
    "Skrelp", "Dragalge",
    // Gen VII
    "Salandit", "Salazzle",
    "Mareanie", "Toxapex",
    "Nihilego",
    // Gen VIII
    "Toxel", "Toxtricity",
    "Galarian Weezing",
    // Gen IX
    "Shroodle", "Grafaiai",
    "Varoom", "Revavroom",
    "Glimmet", "Glimmora",
  ],

  ground: [
    // Gen I
    "Sandshrew", "Sandslash",
    "Nidoqueen", "Nidoking",
    "Diglett", "Dugtrio",
    "Geodude", "Graveler", "Golem",
    "Onix",
    "Cubone", "Marowak",
    "Rhyhorn", "Rhydon",
    "Wooper", "Quagsire",
    // Gen II
    "Phanpy", "Donphan",
    "Gligar",
    // Gen III
    "Mudkip", "Marshtomp", "Swampert",
    "Nincada",
    "Trapinch", "Vibrava", "Flygon",
    "Barboach", "Whiscash",
    "Camerupt",
    "Torkoal",
    "Numel",
    "Groudon",
    // Gen IV
    "Turtwig", "Grotle", "Torterra",
    "Hippopotas", "Hippowdon",
    "Rhyperior",
    "Gliscor",
    "Garchomp",
    // Gen V
    "Drilbur", "Excadrill",
    "Sandile", "Krokorok", "Krookodile",
    "Stunfisk",
    "Landorus",
    // Gen VI
    "Diggersby",
    "Zygarde",
    // Gen VII
    "Mudbray", "Mudsdale",
    "Sandygast", "Palossand",
    // Gen VIII
    "Silicobra", "Sandaconda",
    "Runerigus",
    // Gen IX
    "Tarountula",
    "Nacli", "Naclstack", "Garganacl",
    "Paldean Wooper", "Clodsire",
    "Great Tusk",
    "Sandy Shocks",
    "Iron Treads",
    "Ting-Lu",
  ],

  flying: [
    // Gen I
    "Charizard",
    "Pidgey", "Pidgeotto", "Pidgeot",
    "Spearow", "Fearow",
    "Zubat", "Golbat",
    "Farfetch'd",
    "Doduo", "Dodrio",
    "Scyther",
    "Aerodactyl",
    "Articuno", "Zapdos", "Moltres",
    "Dragonite",
    // Gen II
    "Hoothoot", "Noctowl",
    "Ledyba", "Ledian",
    "Crobat",
    "Togetic",
    "Xatu",
    "Murkrow",
    "Delibird",
    "Mantine",
    "Skarmory",
    "Lugia", "Ho-Oh",
    // Gen III
    "Taillow", "Swellow",
    "Wingull", "Pelipper",
    "Masquerain",
    "Swablu", "Altaria",
    "Volbeat",
    "Tropius",
    "Salamence",
    "Rayquaza",
    // Gen IV
    "Starly", "Staravia", "Staraptor",
    "Drifloon", "Drifblim",
    "Chatot",
    "Togekiss",
    "Yanmega",
    "Gliscor",
    "Giratina",
    // Gen V
    "Pidove", "Tranquill", "Unfezant",
    "Woobat", "Swoobat",
    "Sigilyph",
    "Emolga",
    "Archeops",
    "Braviary", "Mandibuzz",
    "Tornadus",
    "Reshiram",
    // Gen VI
    "Fletchling", "Fletchinder", "Talonflame",
    "Hawlucha",
    "Noibat", "Noivern",
    "Yveltal",
    // Gen VII
    "Pikipek", "Trumbeak", "Toucannon",
    "Oricorio",
    "Minior",
    "Celesteela",
    // Gen VIII
    "Rookidee", "Corvisquire", "Corviknight",
    "Cramorant",
    "Wattrel", "Kilowattrel",
    "Bombirdier",
    // Gen IX
    "Squawkabilly",
    "Flamigo",
    "Flittle", "Espathra",
  ],

  psychic: [
    // Gen I
    "Abra", "Kadabra", "Alakazam",
    "Slowpoke", "Slowbro",
    "Drowzee", "Hypno",
    "Exeggcute", "Exeggutor",
    "Jynx",
    "Mr. Mime",
    "Starmie",
    "Mewtwo", "Mew",
    // Gen II
    "Espeon",
    "Slowking",
    "Girafarig",
    "Xatu",
    "Smoochum",
    "Wobbuffet",
    "Lugia",
    "Celebi",
    // Gen III
    "Ralts", "Kirlia", "Gardevoir",
    "Spoink", "Grumpig",
    "Solrock", "Lunatone",
    "Chimecho",
    "Latias", "Latios",
    "Jirachi",
    "Deoxys",
    // Gen IV
    "Mime Jr.",
    "Gallade",
    "Uxie", "Mesprit", "Azelf",
    "Dialga", "Palkia", "Giratina",
    "Cresselia",
    "Manaphy",
    // Gen V
    "Munna", "Musharna",
    "Sigilyph",
    "Gothita", "Gothorita", "Gothitelle",
    "Solosis", "Duosion", "Reuniclus",
    "Elgyem", "Beheeyem",
    "Victini",
    "Meloetta",
    // Gen VI
    "Espurr", "Meowstic",
    "Inkay", "Malamar",
    "Hoopa",
    // Gen VII
    "Oranguru",
    "Tapu Lele",
    "Lunala",
    "Necrozma",
    "Cosmog", "Cosmoem",
    // Gen VIII
    "Hatenna", "Hattrem", "Hatterene",
    "Indeedee",
    "Calyrex",
    // Gen IX
    "Flittle", "Espathra",
    "Veluza",
    "Iron Valiant",
    "Farigiraf",
  ],

  bug: [
    // Gen I
    "Caterpie", "Metapod", "Butterfree",
    "Weedle", "Kakuna", "Beedrill",
    "Paras", "Parasect",
    "Venonat", "Venomoth",
    "Scyther",
    "Pinsir",
    // Gen II
    "Ledyba", "Ledian",
    "Spinarak", "Ariados",
    "Pineco", "Forretress",
    "Yanma",
    "Scizor",
    "Shuckle",
    "Heracross",
    // Gen III
    "Beautifly", "Dustox",
    "Surskit", "Masquerain",
    "Nincada", "Ninjask", "Shedinja",
    "Volbeat", "Illumise",
    "Anorith", "Armaldo",
    "Kricketot", "Kricketune",
    // Gen IV
    "Wormadam", "Mothim",
    "Burmy",
    "Combee", "Vespiquen",
    "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
    // Gen V
    "Sewaddle", "Swadloon", "Leavanny",
    "Venipede", "Whirlipede", "Scolipede",
    "Dwebble", "Crustle",
    "Shelmet", "Accelgor",
    "Karrablast", "Escavalier",
    "Joltik", "Galvantula",
    "Larvesta", "Volcarona",
    "Genesect",
    // Gen VI
    "Scatterbug", "Spewpa", "Vivillon",
    // Gen VII
    "Wimpod", "Golisopod",
    "Dewpider", "Araquanid",
    "Vikavolt",
    "Charjabug",
    "Buzzwole",
    "Pheromosa",
    // Gen VIII
    "Blipbug", "Dottler", "Orbeetle",
    "Snom", "Frosmoth",
    "Grubbin",
    // Gen IX
    "Nymble", "Lokix",
    "Tarountula", "Spidops",
    "Rellor", "Rabsca",
    "Iron Moth",
  ],

  rock: [
    // Gen I
    "Geodude", "Graveler", "Golem",
    "Onix",
    "Rhyhorn", "Rhydon",
    "Omanyte", "Omastar",
    "Kabuto", "Kabutops",
    "Aerodactyl",
    // Gen II
    "Sudowoodo",
    "Shuckle",
    "Corsola",
    "Larvitar", "Pupitar", "Tyranitar",
    // Gen III
    "Nosepass",
    "Solrock", "Lunatone",
    "Lileep", "Cradily",
    "Anorith", "Armaldo",
    "Regirock",
    // Gen IV
    "Cranidos", "Rampardos",
    "Shieldon", "Bastiodon",
    "Rhyperior",
    "Probopass",
    // Gen V
    "Roggenrola", "Boldore", "Gigalith",
    "Dwebble", "Crustle",
    "Tirtouga", "Carracosta",
    "Archen", "Archeops",
    "Terrakion",
    // Gen VI
    "Tyrunt", "Tyrantrum",
    "Amaura", "Aurorus",
    // Gen VII
    "Minior",
    "Rockruff", "Lycanroc",
    "Nihilego",
    // Gen VIII
    "Rolycoly", "Carkol", "Coalossal",
    "Stonjourner",
    // Gen IX
    "Nacli", "Naclstack", "Garganacl",
    "Klawf",
    "Glimmet", "Glimmora",
    "Ting-Lu",
  ],

  ghost: [
    // Gen I
    "Gastly", "Haunter", "Gengar",
    // Gen II
    "Misdreavus",
    // Gen III
    "Shuppet", "Banette",
    "Duskull", "Dusclops",
    "Sableye",
    // Gen IV
    "Drifloon", "Drifblim",
    "Mismagius",
    "Rotom",
    "Dusknoir",
    "Giratina",
    "Spiritomb",
    // Gen V
    "Litwick", "Lampent", "Chandelure",
    "Yamask", "Cofagrigus",
    "Frillish", "Jellicent",
    "Golett", "Golurk",
    "Phantump", "Trevenant",
    // Gen VI
    "Pumpkaboo", "Gourgeist",
    "Aegislash",
    // Gen VII
    "Sandygast", "Palossand",
    "Mimikyu",
    "Dhelmise",
    "Lunala",
    "Marshadow",
    // Gen VIII
    "Sinistea", "Polteageist",
    "Indeedee",
    "Runerigus",
    "Spectrier",
    "Calyrex",
    // Gen IX
    "Greavard", "Houndstone",
    "Bramblin", "Brambleghast",
    "Flutter Mane",
    "Wo-Chien",
  ],

  dragon: [
    // Gen I
    "Dratini", "Dragonair", "Dragonite",
    // Gen II
    "Kingdra",
    // Gen III
    "Vibrava", "Flygon",
    "Altaria",
    "Bagon", "Shelgon", "Salamence",
    "Latias", "Latios",
    "Rayquaza",
    // Gen IV
    "Gible", "Gabite", "Garchomp",
    "Dialga", "Palkia",
    "Giratina",
    // Gen V
    "Axew", "Fraxure", "Haxorus",
    "Druddigon",
    "Deino", "Zweilous", "Hydreigon",
    "Reshiram", "Zekrom", "Kyurem",
    // Gen VI
    "Noibat", "Noivern",
    "Skrelp", "Dragalge",
    "Tyrunt", "Tyrantrum",
    "Goomy", "Sliggoo", "Goodra",
    "Zygarde",
    // Gen VII
    "Turtonator",
    "Drampa",
    "Jangmo-o", "Hakamo-o", "Kommo-o",
    "Naganadel",
    // Gen VIII
    "Applin", "Flapple", "Appletun",
    "Dracozolt", "Dracovish",
    "Regidrago",
    "Eternatus",
    // Gen IX
    "Frigibax", "Arctibax", "Baxcalibur",
    "Tatsugiri",
    "Cyclizar",
    "Koraidon", "Miraidon",
    "Roaring Moon",
    "Iron Leaves",
    "Walking Wake",
  ],

  dark: [
    // Gen II
    "Murkrow",
    "Umbreon",
    "Sneasel",
    "Houndour", "Houndoom",
    "Tyranitar",
    // Gen III
    "Poochyena", "Mightyena",
    "Nuzleaf", "Shiftry",
    "Carvanha", "Sharpedo",
    "Cacturne",
    "Crawdaunt",
    "Absol",
    // Gen IV
    "Spiritomb",
    "Skuntank",
    "Weavile",
    "Honchkrow",
    "Darkrai",
    // Gen V
    "Sandile", "Krokorok", "Krookodile",
    "Scraggy", "Scrafty",
    "Vullaby", "Mandibuzz",
    "Zorua", "Zoroark",
    "Deino", "Zweilous", "Hydreigon",
    "Bisharp",
    "Pawniard",
    // Gen VI
    "Pangoro",
    "Inkay", "Malamar",
    "Yveltal",
    // Gen VII
    "Alolan Meowth", "Alolan Persian",
    "Alolan Rattata", "Alolan Raticate",
    "Incineroar",
    "Greninja",
    "Guzzlord",
    // Gen VIII
    "Obstagoon",
    "Morpeko",
    "Grimmsnarl",
    "Zarude",
    // Gen IX
    "Maschiff", "Mabosstiff",
    "Bombirdier",
    "Roaring Moon",
    "Iron Jugulis",
    "Chi-Yu",
    "Chien-Pao",
  ],

  steel: [
    // Gen I
    "Magnemite", "Magneton",
    "Scyther",
    // Gen II
    "Steelix",
    "Scizor",
    "Skarmory",
    "Forretress",
    // Gen III
    "Mawile",
    "Aron", "Lairon", "Aggron",
    "Beldum", "Metang", "Metagross",
    "Registeel",
    "Jirachi",
    // Gen IV
    "Empoleon",
    "Shieldon", "Bastiodon",
    "Wormadam",
    "Lucario",
    "Bronzor", "Bronzong",
    "Magnezone",
    "Probopass",
    "Dialga",
    // Gen V
    "Ferroseed", "Ferrothorn",
    "Klang", "Klinklang",
    "Klink",
    "Pawniard", "Bisharp",
    "Durant",
    "Cobalion",
    "Genesect",
    // Gen VI
    "Klefki",
    "Aegislash",
    "Carbink",
    // Gen VII
    "Togedemaru",
    "Celesteela",
    "Kartana",
    "Necrozma",
    // Gen VIII
    "Cufant", "Copperajah",
    "Corviknight",
    "Perrserker",
    "Zacian",
    "Zamazenta",
    "Melmetal",
    // Gen IX
    "Tinkatink", "Tinkatuff", "Tinkaton",
    "Orthworm",
    "Dachsbun",
    "Kingambit",
    "Iron Hands",
    "Iron Jugulis",
    "Iron Moth",
    "Iron Thorns",
    "Iron Treads",
    "Iron Bundle",
    "Iron Valiant",
  ],

  fairy: [
    // Gen I (retroactivo)
    "Clefairy", "Clefable",
    "Jigglypuff", "Wigglytuff",
    "Mr. Mime",
    "Snubbull", "Granbull",
    // Gen II
    "Marill", "Azumarill",
    "Togepi", "Togetic",
    "Misdreavus",
    // Gen III
    "Ralts", "Kirlia", "Gardevoir",
    "Mawile",
    // Gen IV
    "Mime Jr.",
    "Togekiss",
    "Cleffa",
    // Gen V
    "Audino",
    // Gen VI
    "Sylveon",
    "Dedenne",
    "Carbink",
    "Flabébé", "Floette", "Florges",
    "Spritzee", "Aromatisse",
    "Swirlix", "Slurpuff",
    "Klefki",
    "Snubbull", "Granbull",
    "Xerneas",
    "Diancie",
    // Gen VII
    "Comfey",
    "Morelull", "Shiinotic",
    "Mimikyu",
    "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini",
    "Magearna",
    // Gen VIII
    "Alcremie",
    "Impidimp", "Morgrem", "Grimmsnarl",
    "Milcery",
    "Hatterene",
    "Zacian",
    // Gen IX
    "Fidough", "Dachsbun",
    "Scream Tail",
    "Flutter Mane",
    "Iron Valiant",
  ],
};

// =============================================================================
// POKÉMON CON MEGAEVOLUCIÓN
// =============================================================================
// Used to conditionally show Mega Stones and Mega Bracelet.

export const MEGA_EVOLUTION_POKEMON: string[] = [
  // Gen I
  "Venusaur", "Charizard", "Blastoise",
  "Beedrill", "Pidgeot",
  "Alakazam", "Slowbro",
  "Gengar",
  "Kangaskhan",
  "Pinsir", "Scyther",
  "Gyarados",
  "Aerodactyl",
  "Mewtwo",
  // Gen II
  "Ampharos",
  "Steelix",
  "Scizor",
  "Heracross",
  "Houndoom",
  "Tyranitar",
  // Gen III
  "Sceptile", "Blaziken", "Swampert",
  "Gardevoir",
  "Sableye",
  "Mawile",
  "Aggron",
  "Medicham",
  "Manectric",
  "Sharpedo",
  "Camerupt",
  "Altaria",
  "Banette",
  "Absol",
  "Glalie",
  "Salamence",
  "Metagross",
  "Latias", "Latios",
  "Rayquaza",
  // Gen IV
  "Lopunny",
  "Lucario",
  "Garchomp",
  "Abomasnow",
  "Gallade",
  // Gen V
  "Audino",
  // Gen VI
  "Diancie",
];

// =============================================================================
// POKÉMON CON EVOLUCIONES POR OBJETO ESPECÍFICO
// =============================================================================

export const ITEM_EVOLUTION_POKEMON: Record<string, string[]> = {
  // Pokémon que evolucionan con intercambio + objeto
  "metal-coat":    ["Scyther", "Onix"],
  "kings-rock":    ["Poliwhirl", "Slowpoke"],
  "dragon-scale":  ["Horsea", "Seadra"],
  "upgrade":       ["Porygon"],
  "dubious-disc":  ["Porygon2"],
  "electirizer":   ["Electabuzz"],
  "magmarizer":    ["Magmar"],
  "protector":     ["Rhydon"],
  "reaper-cloth":  ["Dusclops"],
  "prism-scale":   ["Feebas"],
  "whipped-dream": ["Swirlix"],
  "sachet":        ["Spritzee"],
  // Pokémon que evolucionan con piedra
  "fire-stone":    ["Vulpix", "Growlithe", "Eevee", "Pansear"],
  "water-stone":   ["Poliwhirl", "Shellder", "Staryu", "Eevee", "Lombre", "Panpour"],
  "thunder-stone": ["Pikachu", "Eevee", "Eelektrik", "Charjabug"],
  "leaf-stone":    ["Gloom", "Weepinbell", "Exeggcute", "Nuzleaf", "Pansage"],
  "moon-stone":    ["Nidorina", "Nidorino", "Clefairy", "Jigglypuff", "Skitty", "Munna"],
  "sun-stone":     ["Gloom", "Sunkern", "Cottonee", "Petilil", "Helioptile"],
  "shiny-stone":   ["Togetic", "Roselia", "Minccino", "Floette"],
  "dusk-stone":    ["Murkrow", "Misdreavus", "Lampent", "Doublade"],
  "dawn-stone":    ["Kirlia", "Snorunt"],
  "ice-stone":     ["Alolan Sandshrew", "Alolan Vulpix", "Galarian Darumaka"],
  "oval-stone":    ["Happiny"],
  // Otros métodos
  "razor-claw":    ["Sneasel"],
  "razor-fang":    ["Gligar"],
};

// =============================================================================
// POKÉMON ESPECÍFICOS PARA OBJETOS HELD
// =============================================================================

export const ITEM_SPECIFIC_POKEMON: Record<string, string[]> = {
  PIKACHU:      ["Pichu", "Pikachu", "Raichu"],
  CUBONE:       ["Cubone", "Marowak"],
  CLAMPERL:     ["Clamperl", "Huntail", "Gorebyss"],
  CHANSEY:      ["Happiny", "Chansey", "Blissey"],
  FARFETCHD:    ["Farfetch'd", "Sirfetch'd"],
  DITTO:        ["Ditto"],
  LATIAS_LATIOS:["Latias", "Latios"],
  DIALGA:       ["Dialga"],
  PALKIA:       ["Palkia"],
  GIRATINA:     ["Giratina"],
};

// =============================================================================
// POKÉMON LEGENDARIOS Y MÍTICOS
// =============================================================================

export const LEGENDARY_POKEMON: string[] = [
  // Gen I
  "Articuno", "Zapdos", "Moltres", "Mewtwo",
  // Gen II
  "Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh",
  // Gen III
  "Regirock", "Regice", "Registeel",
  "Latias", "Latios",
  "Kyogre", "Groudon", "Rayquaza",
  // Gen IV
  "Uxie", "Mesprit", "Azelf",
  "Dialga", "Palkia", "Giratina",
  "Heatran", "Regigigas", "Cresselia",
  // Gen V
  "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus",
  "Reshiram", "Zekrom", "Landorus", "Kyurem",
  // Gen VI
  "Xerneas", "Yveltal", "Zygarde",
  // Gen VII
  "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini",
  "Cosmog", "Cosmoem", "Solgaleo", "Lunala",
  "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela",
  "Kartana", "Guzzlord",
  "Necrozma",
  "Stakataka", "Blacephalon",
  // Gen VIII
  "Zacian", "Zamazenta", "Eternatus",
  "Kubfu", "Urshifu",
  "Regieleki", "Regidrago",
  "Glastrier", "Spectrier", "Calyrex",
  // Gen IX
  "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu",
  "Koraidon", "Miraidon",
  "Walking Wake", "Iron Leaves",
  "Okidogi", "Munkidori", "Fezandipiti",
  "Ogerpon", "Terapagos",
];

export const MYTHICAL_POKEMON: string[] = [
  "Mew",
  "Celebi",
  "Jirachi", "Deoxys",
  "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus",
  "Victini", "Keldeo", "Meloetta", "Genesect",
  "Diancie", "Hoopa", "Volcanion",
  "Magearna", "Marshadow", "Zeraora",
  "Meltan", "Melmetal",
  "Zarude",
  "Glastrier",
  "Pecharunt",
];