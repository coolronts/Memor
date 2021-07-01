import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: null,
            token: null,
        }
    },
    mutations: {
        setUser(state) {
            state.user = user,
                state.token = token,
        }
    },
});