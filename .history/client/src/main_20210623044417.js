import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
});

const app = createApp(App);
app.use(Vuex);
app.use(router).mount("#app");