import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import SignIn from "/src/views/SignIn.vue";
import SignUp from "/src/views/SignUp.vue";
import Dashboard from "/src/views/Dashboard.vue";
import PostPage from "/src/views/PostPage.vue";

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
    {
        path: "/post/:id",
        name: "PostPage",
        component: PostPage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;