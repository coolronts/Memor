import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router/index";
import createPersistedState from "vuex-persistedstate";
import "./assets/tailwind.css";

const store = createStore({
    plugins: [createPersistedState()],

    state() {
        return {
            user: null,
            token: null,
            dashboard: 0,
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setDashboard(state, dashboard) {
            state.dashboard = dashboard;
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

app.config.productionTip = false;
app.use(store, router).mount("#app");