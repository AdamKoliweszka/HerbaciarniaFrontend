import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import AddDeliverByEmployee from './AddDeliverByEmployee.vue';
import TeaByEmployee from "./TeaByEmployee.vue";
import TeaByUnregister from "./TeaByUnregister.vue";
import TeaByCustomer from "./TeaByCustomer.vue";
import CountriesByEmployee from "./CountriesByEmployee.vue";
import TeaSpeciesByEmployee from "./TeaSpeciesByEmployee.vue";
import EditTeaByEmployee from "./EditTeaByEmployee.vue";
import EditProviderByEmployee from "./EditProviderByEmployee.vue";
import AddTeaByEmployee from "./AddTeaByEmployee.vue";
import AddProviderByEmployee from "./AddProviderByEmployee.vue";
import ProvidersByEmployee from "./ProvidersByEmployee.vue";
import Login from "./Login.vue";
import NotAccess from "./NotAccess.vue";
import Logout from "./Logout.vue";
import DeleteAccount from "./DeleteAccount.vue";
import UserIsLogin from "./UserIsLogin.vue";
import UserIsLogout from "./UserIsLogout.vue";
import EditDataOfEmployee from "./EditDataOfEmployee.vue";
import EditDataOfCustomer from "./EditDataOfCustomer.vue";
import PurchasesByEmployee from "./PurchasesByEmployee.vue";
import PurchasesByCustomer from "./PurchasesByCustomer.vue";
import DeliveriesByEmployee from "./DeliveriesByEmployee.vue";
import RegistrationByCustomer from "./RegistrationByCustomer.vue";
import RegistrationEmployeeByEmployee from "./RegistrationEmployeeByEmployee.vue";
import ShoppingCartByCustomer from "./ShoppingCartByCustomer.vue";
import { store } from "./store.js"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    path: "/koszyk", get component() {
      if (store.getters.roleOfUser === "KLIENT") {
        return ShoppingCartByCustomer;
      } else {
        return NotAccess;
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
    path: "/usunKonto", get component() {
      if (store.getters.roleOfUser === "NIEZALOGOWANY") {
        return NotAccess;
      } else {
        return DeleteAccount;
      }
    }
  },
  {
    path: "/", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return TeaByEmployee;
      } else if (store.getters.roleOfUser === "KLIENT") {
        return TeaByCustomer;
      } else {
        return TeaByUnregister;
      }
    }
  },
  {
    path: "/herbaty", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return TeaByEmployee;
      } else if (store.getters.roleOfUser === "NIEZALOGOWANY") {
        return TeaByUnregister;
      } else if (store.getters.roleOfUser === "KLIENT") {
        return TeaByCustomer;
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
    path: "/dodajPracownika", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return RegistrationEmployeeByEmployee;
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
    path: "/dodawanieDostawcy", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return AddProviderByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/dodawanieDostawy", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return AddDeliverByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/edytujDane", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return EditDataOfEmployee;
      } else if (store.getters.roleOfUser === "KLIENT") {
        return EditDataOfCustomer;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/listaZakupow", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return PurchasesByEmployee;
      }else if(store.getters.roleOfUser === "KLIENT")
      {
        return PurchasesByCustomer;
      }else {
        return NotAccess;
      }
    }
  },
  {
    path: "/listaDostaw", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return DeliveriesByEmployee;
      } else {
        return NotAccess;
      }
    }
  },
  {
    path: "/rejestracja", get component() {
      if (store.getters.roleOfUser === "PRACOWNIK") {
        return DeliveriesByEmployee;
      } else {
        return RegistrationByCustomer;
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
