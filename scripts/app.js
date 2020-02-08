// views
listViews = {
    home: {
        id: 'home',
        name: 'Who ?'
    },
    personalProjects: {
        id: 'personal-projects',
        name: 'Personal projects'
    },
    commissions: {
        id: 'commissions',
        name: 'Plugin commissions'
    }
}

// init app
const vue = new Vue({
    el: "#app",
    components: {
        'project': vueComponentProject,
        'project-list': vueComponentProjectList,
        'project-lists': vueComponentProjectLists,
        'nav-bar': vueComponentNavBar
    },
    data: {
        currentView: "home",
        projects: listProjects,
        views: listViews,
        toggledLists: {}
    },
    computed: {
        age() {
            return getTimeFromDate(birthdayDate, false);
        },
        experienceTime() {
            return getTimeFromDate(javaStartDate, true);
        }
    }
});
