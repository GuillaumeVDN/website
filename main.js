// const dates
const birthdayDate = new Date(2001, 3, 2);
const javaStartDate = new Date(2015, 0, 1);// taking 1st january 2015 as a reference since I have no "official date"

// date utils
function getTimeFromDate(date, withMonths) {
		const daysDiff = Math.round(Math.abs((date.getTime() - Date.now()) / 86400000));
		const years = Math.floor(daysDiff / 365);
		var result = years + " year" + (years > 1 ? "s" : "");
		if (withMonths) {
				const months = Math.round((daysDiff - years * 365) / 30);
				if (months > 0) {
				    result += " and " + months + " month" + (months > 1 ? "s" : "");
				}
		}
		return result
}

// const projects
const listProjects = {
    // -------------------------------------------------- published projects --------------------------------------------------
    published: {
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
                name: "sinf-bot",
                description: "a bot for a student discord server - made it to familiarize myself with the basics of python",
                details: "2019",
                maintained: false,
                codeLink: "https://gitlab.com/GuillaumeVDN/sinf-bot"
            }
        ],
        // -------------------------------------------------- web --------------------------------------------------
        web: [
            {
                name: "This website",
                description: "still hand made and rustic-looking (on purpose !) - made it to familiarize myself with the basics of vue.js",
                details: "2020",
                maintained: true
            },
            {
                name: "Legacy website",
                description: "the previous version of my website, even more hand-made and with (more) common mistakes",
                details: "2017",
                maintained: false,
                link: "./legacy-website/"
            }
        ],
        // -------------------------------------------------- web --------------------------------------------------
        web: [
            {
                name: "This website",
                description: "still hand made and rustic-looking (on purpose !) - made it to familiarize myself with the basics of vue.js",
                details: "2020",
                maintained: true
            },
            {
                name: "Legacy website",
                description: "the previous version of my website, even more hand-made and with (more) common mistakes",
                details: "2017",
                maintained: false,
                link: "./legacy-website/"
            }
        ]
    }
}

// project component
const vueComponentProject = Vue.component('project', {
    name: 'project',
    props: {
        'project-index': { default: 0 },
        'project-index-max': { default: 0 },
        'project': {}
    },
    template: `
        <div class="project">
            <!--------------------------- Project name and link --------------------------->
            <a class="name" target="_blank" :href="project.link"  v-if="project.link != null">{{ project.name }}</a>
            <a class="name" v-else>{{ project.name }}</a>

            <label class="detail" v-if="project.details != null">({{ project.details }})</label>

            <a class="detail code-link" target="_blank" :href="project.codeLink" v-if="project.codeLink != null">[see code]</a>

            <label class="detail maintained" v-if="project.maintained != null && project.maintained">[still maintained]</label>
            <label class="detail not-maintained" v-else-if="project.maintained != null">[discontinued]</label>

            <br>
            <!--------------------------- Project description --------------------------->
            <div v-if="project.description != null">
                <label>{{ project.description }}</label>
            </div>
            <hr class="break10" v-if="projectIndex != projectIndexMax" />
            <hr class="break15" v-else />
        </div>
    `
})

// project list component
const vueComponentProjectList = Vue.component('project-list', {
    name: 'project-list',
    props: {
        'list-index': { default: -1 },
        'list-name': {},
        'list-name-big': { default: false },
        'projects': {}
    },
    template: `
        <div class="project-list">
            <h2 v-if="listNameBig">{{ listName }}</h2>
            <h3 v-else>{{ listName }}</h3>
            <project
                v-for="(project, index) in projects"
                v-bind:key="project.name"
                :project="project"
                :project-index="index"
                :project-index-max="projects.length - 1"
                style="margin-left: 10px;"
            ></project>
        </div>
    `
})

// init app
const vue = new Vue({
    el: "#app",
    components: {
        'project': vueComponentProject,
        'project-list': vueComponentProjectList
    },
    data: {
        currentView: "personal-projects",
        projects: listProjects
    },
    computed: {
        age() {
            return getTimeFromDate(birthdayDate, false);
        },
        experienceTime() {
            return getTimeFromDate(javaStartDate, true);
        }
    },
    methods: {
        setView(name) {
            this.currentView = name;
        }
    }
});
