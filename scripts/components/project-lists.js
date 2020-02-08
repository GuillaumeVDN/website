const vueComponentProjectLists = Vue.component('project-lists', {
    props: {
        'lists': {},
        'id': {}
    },
    template: `
        <div class="project-lists" :key="id">
            <project-list
                v-for="(list, fieldId, index) in lists"
				:list-first="index == 0"
				:list-last="index == Object.keys(lists).length - 1"
                :list-name="list.name"
                :list-description="list.description"
                :list="list.projects"
                :key="fieldId"
			></project-list>
        </div>
    `
})
