import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import { createStore } from "vuex";

const store = createStore({
    state() {},
    mutations: {},
});

const app = createApp(App);

app.use(router).mount("#app");