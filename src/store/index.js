import { createStore } from 'vuex'

export default createStore({
    state: {
        job_filter: {
            recruit_type: ["social", "campus", "intern"],
            keyword: ""
        },
        at: "haha"
    },
    mutations: {
        change_filter(state, params) {
            state.job_filter[params.filter_type] = params.filter_value;
        }
    },
    actions: {
    },
    modules: {
    }
})
