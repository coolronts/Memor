import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import "./assets/tailwind.css";


const instance = axios.create({
    baseURL: "http://localhost:5000";
});

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const app = createApp(App);

app.use(store);
app.use(router).mount("#app");