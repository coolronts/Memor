import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router/index";

import "./assets/tailwind.css";

const store = createStore({
    state() {
        return {
            user: null,
            token: null,
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    getters: {
        isLoggedIn(state) {
            if (state.token) {
                return true;
            } else {
                return false;
            }
        },
    },
    actions: {},
    modules: {},
});

const app = createApp(App);
app.use(store);
app.use(router).mount("#app");