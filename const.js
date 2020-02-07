// const dates
const birthdayDate = new Date(2001, 3, 2);
const javaStartDate = new Date(2015, 0, 1);// taking 1st january 2015 as a reference since I have no "official date"

// const projects
const listProjects = {
    // -------------------------------------------------- personal projects --------------------------------------------------
    personal: {
        // -------------------------------------------------- premium plugins --------------------------------------------------
        premiumPlugins: [
            {
                name: "QuestCreator",
                description: "my most popular premium plugin so far, to create quests, adventures, and more mechanics",
                details: "2017",
                maintained: true,
                link: "https://www.spigotmc.org/resources/questcreator-with-pools-scoreboards-guis-in-game-editor.38734/"
            },
            {
                name: "SupremeShops",
                description: "my most massive (personal) plugin so far, a complete shops plugin with different options (merchants/renting/dynamic prices/...)",
                details: "2019",
                maintained: true,
                link: "https://www.spigotmc.org/resources/supremeshops-block-sign-gui-shop-npc-merchants-renting-dynamic-prices.70235/"
            },
            {
                name: "BettingGames",
                description: "a complete casino games suite, inspired by 'CS:GO' gambling",
                details: "2018",
                maintained: true,
                link: "https://www.spigotmc.org/resources/bettinggames.63503/"
            },
            {
                name: "Potatoes",
                description: "a mini-game pretty similar to TNT Tag",
                details: "2015",
                maintained: true,
                link: "https://www.spigotmc.org/resources/potatoes.12353/"
            }
        ],
        // -------------------------------------------------- free plugins --------------------------------------------------
        freePlugins: [
            {
                name: "GCore",
                description: "my main library, used with my bigger plugins",
                details: "2016",
                maintained: true,
                link: "https://www.spigotmc.org/resources/24180/",
                codeLink: "https://gitlab.com/GuillaumeVDN/GCore"
            },
            {
                name: "CustomCommands",
                description: "a plugin to create... custom commands, how surprising ! :o",
                details: "2015",
                maintained: true,
                link: "https://www.spigotmc.org/resources/14363/",
                codeLink: "https://gitlab.com/GuillaumeVDN/CustomCommands"
            },
            {
                name: "GParticles",
                description: "cosmetics plugin (my first public plugin, re-uploaded in 2015 for some reason)",
                details: "2015",
                maintained: true,
                link: "https://www.spigotmc.org/resources/10225/",
                codeLink: "https://gitlab.com/GuillaumeVDN/GParticles"
            },
            {
                name: "GSlotMachine",
                description: "a simple slots machine plugin",
                details: "2018",
                maintained: true,
                link: "https://www.spigotmc.org/resources/55107/",
                codeLink: "https://gitlab.com/GuillaumeVDN/GSlotMachine"
            },
            {
                name: "ScrollBoard",
                description: "a scoreboard plugin that can be scrolled up and down",
                details: "2016",
                maintained: false,
                link: "https://www.spigotmc.org/resources/24697/",
                codeLink: "https://github.com/GuillaumeVDN/ScrollBoard"
            },
            {
                name: "SurvivalMysteryChests",
                description: "a plugin to create mystery boxes",
                details: "2016",
                maintained: false,
                link: "https://www.spigotmc.org/resources/15755/",
                codeLink: "https://github.com/GuillaumeVDN/SurvivalMysteryChests"
            },
            {
                name: "ItemBloquer",
                description: "a basic plugin to prevent some items to spawn",
                details: "2019",
                maintained: false,
                link: "https://www.spigotmc.org/resources/69895/"
            },
            {
                name: "HoloXP",
                description: "a basic hologram displayed when killing mobs",
                details: "2019",
                maintained: false,
                link: "https://www.spigotmc.org/resources/63860/",
                codeLink: "https://github.com/GuillaumeVDN/HoloXP"
            },
            {
                name: "BungeeMessagingAPI",
                description: "a very basic API to communicate with BungeeCord",
                details: "2017",
                maintained: false,
                link: "https://www.spigotmc.org/resources/41846/",
                codeLink: "https://github.com/GuillaumeVDN/BungeeMessagingAPI"
            }
        ],
        // -------------------------------------------------- bots --------------------------------------------------
        bots: [
            {
                name: "g-bot",
                description: "a bot for my plugins support discord server",
                details: "2020",
                maintained: true,
                link: "http://guillaumevdn.com/plugins/discord/",
                codeLink: "https://gitlab.com/GuillaumeVDN/g-bot",
            },
            {
                name: "sinf11ba-bot",
                description: "a bot for a student discord server - made it to familiarize myself with the basics of python",
                details: "2019",
                maintained: false,
                codeLink: "https://gitlab.com/GuillaumeVDN/sinf11ba-bot"
            }
        ],
        // -------------------------------------------------- web --------------------------------------------------
        web: [
            {
                name: "This website",
                description: "still hand made and rustic-looking (on purpose !) - made it to familiarize myself with the basics of vue.js",
                details: "2020",
                maintained: true,
                codeLink: "https://gitlab.com/GuillaumeVDN/website"
            },
            {
                name: "Legacy website",
                description: "the previous version of my website, even more hand-made and with (more) common mistakes",
                details: "2017",
                maintained: false,
                link: "./legacy-website/"
            }
        ],
        // -------------------------------------------------- misc --------------------------------------------------
        misc: [
            {
                name: "Compilation maker",
                description: "simple util to extract video parts, add text to them and merge them together",
                details: "2020",
                maintained: true,
                codeLink: "https://gitlab.com/GuillaumeVDN/compilationmaker"
            },
            {
                name: "Project P3",
                description: "python project using a raspberry pi with sense hat, to encode and decode secret messages - made with other students",
                details: "2019",
                maintained: false,
                codeLink: "https://gitlab.com/GuillaumeVDN/projectp3"
            }
        ]
    },
    // -------------------------------------------------- commissions --------------------------------------------------
    commissions: {
        // -------------------------------------------------- big --------------------------------------------------
        big: [
            {
                name: "Main developer",
                description: "lots of plugins (player/database management, lots of mechanics, ...) for a RPG network",
                details: "2019-2020, for Oppidan's Space",
            },
            {
                name: "Main developer",
                description: "lots of plugins (player/database management, lots of mechanics, ...) for a Factions network",
                details: "2019-2020, for Hypnos",
            },
            {
                name: "Main developer",
                description: "lots of plugins (player/database management, games, lots of mechanics, ...) for a Factions network",
                details: "2017-2018, for Legacia",
            },
            {
                name: "Plugin pack",
                description: "lots of plugins (miscallenous game mechanics, some games, ...)",
                details: "2015-2017, for Helenos",
            },
            {
                name: "Plugin pack",
                description: "lots of plugins (miscallenous game mechanics)",
                details: "2015-2017, for McFreestlyes",
            },
            {
                name: "Plugin pack",
                description: "lots of plugins (dungeons, ranking, and more game mechanics)",
                details: "2017, for Razornauth",
            }
        ],
        // -------------------------------------------------- medium --------------------------------------------------
        medium: [
            {
                name: "CustomJobs",
                description: "jobs plugin",
                details: "2019, for Josaipa",
            },
            {
                name: "Road To The City",
                description: "adventure game",
                details: "2017, for Flav",
            },
            {
                name: "MostWanted",
                description: "adventure game",
                details: "2016, for Percy",
            },
            {
                name: "GoldenUhcHost",
                description: "complete UHC plugin",
                details: "2016, for Kyrutoo",
            },
            {
                name: "StackUpgrade",
                description: "including spawners stacking/upgrade/custom drops, mob/items stacking",
                details: "2018, for !雙手大師",
            },
            {
                name: "TreeFeller",
                description: "a custom trees detection and chopping plugin",
                details: "2018, for OwnedGG",
            },
            {
                name: "LydariaFactions",
                description: "factions plugin",
                details: "2018",
            },
            {
                name: "LydariaKOTH",
                description: "faction minigame",
                details: "2018",
            },
            {
                name: "LydariaTotem",
                description: "faction minigame",
                details: "2018",
            },
            {
                name: "LydariaMisc",
                description: "miscallenous features",
                details: "2018",
            },
            {
                name: "KeraziaCore",
                description: "miscallenous mechanics",
                details: "2018, for antho_57",
            },
            {
                name: "Plugin pack",
                description: "lots of modifications/updates for existing plugins.",
                details: "2014-2017",
            },
            {
                name: "Plugin pack",
                description: "lots of plugins (backpack, ban, NPC, map management, and more mechanics) for a network",
                details: "2017, for NationsGlory",
            },
            {
                name: "NoctaliaRanking",
                description: "faction ranking plugin with database points",
                details: "2017, for Factions network Noctalia",
            },
            {
                name: "OriginalCharacters",
                description: "player character management",
                details: "2017, for Malcolm",
            },
            {
                name: "Villages",
                description: "parcel management",
                details: "2017, for baptiste0928",
            },
            {
                name: "YlfAchievement",
                description: "custom achievements",
                details: "2017, for Chocolatix",
            },
            {
                name: "YlfJob",
                description: "jobs management",
                details: "2017, for Chocolatix",
            },
            {
                name: "YlfZoneCmd",
                description: "commands with zone management",
                details: "2017, for Chocolatix",
            },
            {
                name: "HotelVente",
                description: "shop plugin",
                details: "2017, for iBalix",
            },
            {
                name: "PlotSave",
                description: "plot plugin",
                details: "2017, for iBalix",
            },
            {
                name: "PvpArena",
                description: "player PVP arena",
                details: "2017, for JayGame",
            },
            {
                name: "Upgrader",
                description: "abilities/unlocking shop, item selling and misc",
                details: "2016, for LD",
            },
            {
                name: "Pacman",
                description: "minigame from the famous Pacman game",
                details: "2016, for Idp21",
            },
            {
                name: "CustomEnchants",
                description: "custom enchantments",
                details: "2016, for Jordan",
            },
            {
                name: "IlluminaCoin",
                description: "economy plugin",
                details: "2016",
            },
            {
                name: "IlluminaShop",
                description: "shop plugin",
                details: "2016",
            },
            {
                name: "ChestRegen",
                description: "chest regeneration with region management",
                details: "2016, for Chocolatix",
            },
            {
                name: "HeroRPCore",
                description: "door/chest protection and lockpicking",
                details: "2016, for Amky",
            },
            {
                name: "KeepYourSpawner",
                description: "spawners management",
                details: "2016, for antho_57",
            },
            {
                name: "ElfiaWar",
                description: "faction war management",
                details: "2016",
            },
            {
                name: "Practice",
                description: "PVP practice plugin",
                details: "2016, for Faygwenn",
            },
            {
                name: "SigmaMontures",
                description: "mob mount plugin",
                details: "2016",
            },
            {
                name: "KingShop",
                description: "shop management",
                details: "2014",
            }
        ],
        // -------------------------------------------------- small --------------------------------------------------
        small: [
            {
                name: "HoloXP",
                description: "displaying holograms when killing mobs/mythic mobs. (Underune)",
                details: "2018, for published on Spigot",
            },
            {
                name: "SupplyCrates",
                description: "chest envoys management with item/timers, random loot, etc",
                details: "2018, for FreshPepperMint",
            },
            {
                name: "MoreHearts",
                description: "health plugin",
                details: "2018",
            },
            {
                name: "Plugin pack",
                description: "lots of little plugins I don't remember about / don't have the source archive anymore",
                details: "2014-2019",
            },
            {
                name: "FollowingSpell",
                description: "spell following the cursor",
                details: "2017, for Malcolm",
            },
            {
                name: "YlfSlotRpg",
                description: "item slot management",
                details: "2017, for Chocolatix",
            },
            {
                name: "ShopPointsConcertor",
                description: "convert IG money to shop points",
                details: "2017, for Alieta",
            },
            {
                name: "EasyKits",
                description: "simple kits plugin",
                details: "2017, for Dartasen",
            },
            {
                name: "Vote4Ban",
                description: "banishment voting system",
                details: "2017, for Happy_Killing",
            },
            {
                name: "FactionProtection",
                description: "protection for newly created factions",
                details: "2017, for iBalix",
            },
            {
                name: "SigmaFW",
                description: "egg mobs management",
                details: "2016",
            },
            {
                name: "TimePerm",
                description: "permissions with time limitations",
                details: "2016",
            },
            {
                name: "ItemRarity",
                description: "item management plugin",
                details: "2016, for NeoXioen",
            },
            {
                name: "SOItemRestricted",
                description: "item restriction plugin",
                details: "2016, for Mr_Tissandre",
            },
            {
                name: "SORank",
                description: "rank plugin",
                details: "2016, for Mr_Tissandre",
            },
            {
                name: "MobSpawn",
                description: "spawning regulation",
                details: "2016",
            },
            {
                name: "MobStack",
                description: "mob stacking plugin",
                details: "2016",
            },
            {
                name: "AntiRegenWalls",
                description: "... it definitely does something",
                details: "2016, for Jordan",
            },
            {
                name: "Fly",
                description: "fly management",
                details: "2016, for Jordan",
            },
            {
                name: "Spawners",
                description: "spawner give/management plugin",
                details: "2016, for Jordan",
            },
            {
                name: "Sponges",
                description: "modifications to sponges behavior",
                details: "2016, for Jordan",
            },
            {
                name: "InvasionZSelector",
                description: "bungee server selector",
                details: "2016",
            },
            {
                name: "FactionsRanking",
                description: "faction ranking plugin",
                details: "2016, for Froyz",
            },
            {
                name: "IrixiaRank",
                description: "rank plugin",
                details: "2016, for Faygwenn",
            },
            {
                name: "AnnonceChat",
                description: "chat announcements",
                details: "2016, for antho_57",
            },
            {
                name: "ArrowEffectSC",
                description: "levitation effect management",
                details: "2016, for Amky",
            },
            {
                name: "SCPatcher",
                description: "chest modification plugin",
                details: "2016",
            },
            {
                name: "Autoshop",
                description: "authkey management",
                details: "2015",
            }
        ]
    }
}
