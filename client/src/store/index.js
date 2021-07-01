import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],

    state() {
        return {
            user: null,
            token: null,
            dashboard: 0,
            openModal: false,
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setDashboard(state, dashboard) {
            state.dashboard = dashboard;
        },
        setOpenModal(state, openModal) {
            state.openModal = openModal;
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