import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";

const app = createApp(App);
const store = createStore({
    state() {
        return {
            user: null,
            token: null,
        };
    },

    mutations: {},
    actions: {},
    modules: {},
});

app.use(router, store).mount("#app");