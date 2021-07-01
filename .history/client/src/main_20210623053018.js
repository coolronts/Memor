import { createApp } from "vue";
import { createStore } from "vuex"
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router).mount("#app");