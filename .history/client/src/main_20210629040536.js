import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import "./assets/tailwind.css";

axios.defaults.baseURL = "http://localhost:5000";

instance.defaults.headers.common["Authorization"] = store.state.token;

const app = createApp(App);

app.use(store);
app.use(router).mount("#app");