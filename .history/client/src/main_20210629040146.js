import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import "./assets/tailwind.css";


const instance = axios.create({
    baseURL: "http://localhost:5000";
});

axios.defaults.baseURL =
    axios.defaults.headers.

const app = createApp(App);

app.use(store);
app.use(router).mount("#app");