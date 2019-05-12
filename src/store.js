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
            username: " ",
            password: " "
        },
        roleOfUser: "NIEZALOGOWANY",
        purchases: []
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
        },
        purchases(state)
        {
            return state.purchases;
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
        },
        addPurchase(state,purchase)
        {
            state.purchases.push(purchase);
        },
        deletePurchase(state,purchase)
        {
            state.purchases.pop(purchase);
        },
        clearPurchases(state)
        {
            state.purchases = [];
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
              
        },
        clearPurchases(context)
        {
            context.commit("clearPurchases");
        }
    }
})