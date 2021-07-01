import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import SignIn from "/src/views/SignIn.vue";
import SignUp from "/src/views/SignUp.vue";
import Dashboard from "/src/views/Dashboard.vue";
import PostPage from "/src/components/PostPage.vue";
import store from "/src/store/index";

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

router.beforeEach((to, from, next) => {
    if (
        to.name !== ("SignIn" || "SignUp" || "Home" || "PostPage") &&
        !store.state.token
    ) {
        next({ name: "SignIn" });
    } else {
        next();
    }
});

export default router;