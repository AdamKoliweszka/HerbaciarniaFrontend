import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.Store({
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