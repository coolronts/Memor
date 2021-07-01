import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import SignIn from "/src/views/SignIn.vue";
import SignUp from "/src/views/SignUp.vue";
import Dashboard from "/src/views/Dashboard.vue";
const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/mypost",
        name: "Dashboard",
        component: Dashboard,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;