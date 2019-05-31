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
            var index= -1;
            for(let i =0 ;i<state.purchases.length;i++)
            {
                if( state.purchases[i].tea.name === purchase.tea.name)
                {
                    index = i;
                }
            }
            if(index == -1)
            {
                state.purchases.push(purchase);
            }else{
                state.purchases[index].amount = parseInt(state.purchases[index].amount) + parseInt(purchase.amount); 
            }
            
        },
        deletePurchase(state,purchase)
        {
            let purchases = [];
            for(let i =0 ;i<state.purchases.length;i++)
            {
                if( state.purchases[i] !== purchase)
                {
                    purchases.push(state.purchases[i]);
                }
            }
            state.purchases = purchases;
        },
        clearPurchases(state)
        {
            state.purchases = [];
        }
    },
    actions: {
        setUser(context,user) {
            context.commit("login", user);
        },
        setRole(context,role) {
            context.commit("setRoleOfUser", role);
        },
        changePassword(context, newPassword) {
            context.commit("changePassword", newPassword);
              
        },
        clearPurchases(context)
        {
            context.commit("clearPurchases");
        },
        deletePurchase(context,purchase)
        {
            context.commit("deletePurchase",purchase);
        }
    }
})