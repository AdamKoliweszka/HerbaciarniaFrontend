import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        count: 10,
        user: {
            username: "Mateusz",
            password: "Krol"
        }
    },
    getters: {
        username(state){
            return state.user.username;
        },
        password(state){
            return state.user.password;
        }
    },
    mutations: {
        login(state,user)
        {
            state.user = user;
        },
        logout(state)
        {
            state.user = null;
        }
    }
})