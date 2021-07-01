import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import Vuex from "vuex";

Vue.use(Vuex);

const app = createApp(App);

app.use(router).mount("#app");