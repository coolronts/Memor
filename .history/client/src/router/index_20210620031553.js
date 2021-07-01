import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;