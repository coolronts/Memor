import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
const routes = [{
            path: "/",
            name: "Home",
            component: Home,
        },
        const routes = [{
            path: "/signin",
            name: "SignIn",
            component: SignIn,
        }, ];
        const router = createRouter({
            history: createWebHistory(),
            routes,
        });
        export default router;