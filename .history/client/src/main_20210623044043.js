import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import Vuex from "vuex";

const app = createApp(App);
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
});

app.use(Vuex);
app.use(router).mount("#app");