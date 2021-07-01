import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index";

import "./assets/tailwind.css";

const app = createApp(App);
app.use(vuetify);

app.mount("#app");