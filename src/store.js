import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import DataAccess from "@/components/DataAccess.js"

Vue.use(Vuex);


export const store = new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    state: {
        count: 10,
        user: {
            username: "Mateusz",
            password: "Krol"
        },
        roleOfUser: "PRACOWNIK"
    },
    getters: {
        username(state) {
            return state.user.username;
        },
        password(state) {
            return state.user.password;
        },
        user(state) {
            return state.user;
        },
        roleOfUser(state) {
            return state.roleOfUser;
        }
    },
    mutations: {
        setRoleOfUser(state,roleOfUser)
        {
            state.roleOfUser = roleOfUser;
        },
        login(state, user) {
            state.user.username = user.username;
            state.user.password = user.password;
        },
        logout(state) {
            state.user.username = " ";
            state.user.password = " ";
            state.roleOfUser = "NIEZALOGOWANY";
        },
        changePassword(state,password) {
            state.user.password = password;
        }
    },
    actions: {
        login(context, user) {
            return DataAccess.login(user).then(data => {
                if (data != null) {
                    context.commit("login", user);
                    context.commit("setRoleOfUser", data);
                    return data;
                }
            });
        },
        changePassword(context, newPassword) {
            context.commit("changePassword", newPassword);
              
        }
    }
})