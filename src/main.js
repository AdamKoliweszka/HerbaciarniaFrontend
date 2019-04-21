import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import TeaByEmployee from "./TeaByEmployee.vue";
import CountriesByEmployee from "./CountriesByEmployee.vue";
import TeaSpeciesByEmployee from "./TeaSpeciesByEmployee.vue";
import EditTeaByEmployee from "./EditTeaByEmployee.vue";
import EditProviderByEmployee from "./EditProviderByEmployee.vue";
import AddTeaByEmployee from "./AddTeaByEmployee.vue";
import ProvidersByEmployee from "./ProvidersByEmployee.vue";
import Login from "./Login.vue";
import NotAccess from "./NotAccess.vue";
import Logout from "./Logout.vue";
import UserIsLogin from "./UserIsLogin.vue";
import UserIsLogout from "./UserIsLogout.vue";
import EditDataOfEmployee from "./EditDataOfEmployee.vue";
import PurchasesByEmployee from "./PurchasesByEmployee.vue";
import { store } from "./store.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login", get component() {
      if (store.getters.roleOfUser === "NIEZALOGOWANY") {
        return Login;
      } else {
        return UserIsLogin;
      }
    }
  },
  {
    path: "/wyloguj", get component() {
      if (store.getters.roleOfUser === "NIEZALOGOWANY") {
        return UserIsLogout;
      } else {
        return Logout;
      }
    }
  },
  {
    path: "/", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return TeaByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/herbaty", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return TeaByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/kraje", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return CountriesByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/gatunki", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return TeaSpeciesByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/dostawcy", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return ProvidersByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/dostawcy/:id", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return EditProviderByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/herbaty/:id", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return EditTeaByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/dodawanieHerbaty", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return AddTeaByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/edytujDane", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return EditDataOfEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/listaZakupow", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return PurchasesByEmployee;
      } else {
        return NotAccess;
      }
    }
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
