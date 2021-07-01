import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuelidate from "vuelidate";
import "./assets/tailwind.css";

const app = createApp(App);
Vue.use(Vuelidate);

app.use(router).mount("#app");