const vueComponentProjectList = Vue.component('project-list', {
    props: {
        'list-name': {},
        'list-description': {},
        'list-first': { default: false },
        'list-last': { default: false },
        'list': {}
    },
    computed: {
        isToggled() {
            return !(this.$root.$data.toggledLists[this.listName] === false)
        }
    },
    methods: {
        toggle() {
            toggles = this.$root.$data.toggledLists
            Vue.set(toggles, this.listName, toggles[this.listName] === false)
        }
    },
    template: `
        <div class="project-list" :key="listName">
            <!--------------------------- Shown --------------------------->
            <div v-if="isToggled">
                <h2 @click="toggle"><span class="toggle yes">[-]</span> {{ listName }}</h2>
                <h3 v-if="listDescription != null && listDescription.length != 0">{{ listDescription }}</h3>
                <project
                    v-for="(project, index) in list"
                    :project="project"
                    :project-first="index == 0"
                    :project-last="index == list.length - 1"
                    style="margin-left: 10px;"
                ></project>
                <hr class="break10" v-if="!listLast" />
                <hr class="line" v-if="!listLast" />
            </div>
            <!--------------------------- Hidden --------------------------->
            <div v-else>
                <h2 @click="toggle"><span class="toggle no">[+]</span> {{ listName }}</h2>
            </div>
        </div>
    `
})
