import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuelidate from "vuelidate";
import "./assets/tailwind.css";
app.use(Vuelidate);

const app = createApp(App);

app.use(router).mount("#app");