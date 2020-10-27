import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const app = createApp(App);
const store = createStore({
    state () {
        return {
            job_filter: {
                recruit_type: ["social", "campus", "intern"],
                keyword: ""
            }
        };
    },
    mutations: {
        change_filter(state, params) {
            state.job_filter[params.filter_type] = params.filter_value;
        }
    }
});
app.use(router).mount('#app');
app.use(store);
