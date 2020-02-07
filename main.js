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
    data() {
        return {
            shown: true
        }
    },
    methods: {
        toggle() {
            this.shown = !this.shown
        }
    },
    props: {
        'list-name': {},
        'list-description': {},
        'projects': {}
    },
    template: `
        <div class="project-list">
            <!--------------------------- Shown --------------------------->
            <div v-if="this.shown">
            <h2 @click="toggle">{{ listName }} <span class="toggle yes">[toggle]</span></h2>
                <h3 v-if="listDescription != null && listDescription.length != 0">{{ listDescription }}</h3>
                <project
                    v-for="(project, index) in projects"
                    :project="project"
                    :project-index="index"
                    :project-index-max="projects.length - 1"
                    style="margin-left: 10px;"
                ></project>
            </div>
            <!--------------------------- Hidden --------------------------->
            <div v-else>
                <h2 @click="toggle">{{ listName }} <span class="toggle no">[toggle]</span></h2>
            </div>
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
        currentView: "home",
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
