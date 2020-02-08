const vueComponentNavBar = Vue.component('nav-bar', {
    props: {
        'views': {}
    },
    methods: {
        isCurrent(id) {
            return this.$root.$data.currentView == id
        },
        setCurrent(id) {
            this.$root.$data.currentView = id
        }
    },
    template: `
        <div class="nav-bar">
            <div v-for="(view, fieldId, index) in views" style="display: inline;">
                <label @click="setCurrent(view.id)" :class="{selector: true, active: isCurrent(view.id)}">{{ view.name }}</label>
                <label v-if="index != Object.keys(views).length - 1">&nbsp; | &nbsp;</label>
            </div>
        </div>
    `
})
