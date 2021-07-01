import { createStore } from "vuex";

export default createStore({
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