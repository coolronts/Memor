import { createApp } from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";

app.use(Vuesax);
createApp(App).mount("#app");