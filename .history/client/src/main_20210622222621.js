import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuelidate from "vuelidate";
import "./assets/tailwind.css";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

const app = createApp(App);

app.use(router).mount("#app");