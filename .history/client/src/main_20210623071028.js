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
        doneTodos(state) {
            return state.todos.filter((todo) => todo.done);
        },
    },

    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    actions: {},
    modules: {},
});

const app = createApp(App);
app.use(store);
app.use(router).mount("#app");