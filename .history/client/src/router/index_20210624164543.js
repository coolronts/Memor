import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import SignIn from "/src/views/SignIn.vue";
import SignUp from "/src/views/SignUp.vue";
import Dashboard from "/src/views/Dashboard.vue";
import MyPost from "/src/views/MyPost.vue";
import NewPost from "/src/views/NewPost.vue";
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
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;