import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./assets/tailwind.css";
import axios from "axios"


const app = createApp(App);

app.use(store);
app.use(router).mount("#app");