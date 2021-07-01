import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],

    state() {
        return {
            user: null,
            token: null,
            dashboard: 0,
            notifications: [],
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setNotifications(state, notifications) {
            state.notifications = notifications;
        },
        setDashboard(state, dashboard) {
            state.dashboard = dashboard;
        },
    },
    getters: {
        isLoggedIn(state) {
            if (state.token) {
                return true;
            } else {
                return false;
            }
        },
    },
    actions: {},
    modules: {},
});

export default store;