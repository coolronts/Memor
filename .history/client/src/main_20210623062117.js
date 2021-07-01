import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        user: null,
        token: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {},
    modules: {},
});

const app = createApp(App);

app.use(router, store).mount("#app");