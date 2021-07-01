import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import VueSax from "vuesax";

const app = createApp(App);
app.use(vuetify);
app.use(VueSax);

app.mount("#app");