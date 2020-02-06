// project component
const vueComponentProject = Vue.component('project', {
    name: 'project',
    props: {
        'project-index': { default: 0 },
        'project': {}
    },
    template: `
        <div class="project">

            <!-- Separator if not first element -->

            <div v-if="projectIndex != 0">
                <hr class="break15" />
                <hr class="line" />
                <hr class="break15" />
            </div>

            <!-- Project name and link -->

            <div v-if="project.link != null">
                <a :href="project.link">{{ project.name }}</a>
                <label> :</label>
            </div>
            <div v-else>
                <a>{{ project.name }}</a><label> :</label>
            </div>

            <!-- Project description -->

            <div v-if="project.description != null">
                <hr class="break10" />
                <label>{{ project.description }}</label>
            </div>

            <!-- Project date -->
            
            <div v-if="project.description.length != 0">
                <label class="detail">published in {{ project.date }}</label><br>
            </div>
        
        </div>
    `
})

// project list component
const vueComponentProjectList = Vue.component('project-list', {
    name: 'project-list',
    props: {
        'list-index': { default: 0 },
        'list-name': {},
        'projects': {}
    },
    template: `
        <div class="project-list">
            <h3>{{ listName }}</h3>
            <project v-for="(proj, index) in projects" v-bind:key="proj.name"
                :project="proj"
                :project-index="index"
            ></project>
        </div>
    `
})
