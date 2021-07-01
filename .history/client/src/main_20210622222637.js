import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuelidate from "vuelidate";
import "./assets/tailwind.css";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: (appState) => {
        router.push(
            appState && appState.targetUrl ?
            appState.targetUrl :
            window.location.pathname
        );
    },
});

Vue.config.productionTip = false;

const app = createApp(App);

app.use(router).mount("#app");