import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const app = createApp(App);
const store = createStore({
    state () {
        return {
            job_filter: {
                recruit_type: ["social", "campus", "intern"]
            }
        };
    },
    mutations: {
        change_filter(state, recruit_type) {
            state.job_filter.recruit_type = recruit_type;
        }
    }
});
app.use(router).mount('#app');
app.use(store);
