const vueComponentProject = Vue.component('project', {
    props: {
        'project-first': { default: false },
        'project-last': { default: true },
        'project': {}
    },
    template: `
        <div class="project" :key="project.id">
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
            <hr class="break10" v-if="!projectLast" />
        </div>
    `
})
