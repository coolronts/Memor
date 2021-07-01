import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";
const app = createApp(App);
app.use(vuetify);
app.use(Vuesax);

app.mount("#app");