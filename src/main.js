import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import PrzegladHerbatKlient from "./PrzegladHerbatKlient.vue";
import PrzegladHerbatPracownik from "./PrzegladHerbatPracownik.vue";
import PrzegladKrajowPracownik from "./PrzegladKrajowPracownik.vue";
import PrzegladGatunkowPracownik from "./PrzegladGatunkowPracownik.vue";
import EdytowanieHerbatyPracownik from "./EdytowanieHerbatyPracownik.vue";
import DodawanieHerbatyPracownik from "./DodawanieHerbatyPracownik.vue";
import PrzegladDostawcowPracownik from "./PrzegladDostawcowPracownik.vue";

Vue.use(VueRouter);

const routes = [
    {path: "/" ,component: PrzegladHerbatKlient},
    {path: "/pracownik", component: PrzegladHerbatPracownik},
    {path: "/pracownik/kraje", component: PrzegladKrajowPracownik},
    {path: "/pracownik/gatunki", component: PrzegladGatunkowPracownik},
    {path: "/pracownik/dostawcy", component: PrzegladDostawcowPracownik},
    {path: "/pracownik/herbaty/:id", component: EdytowanieHerbatyPracownik},
    {path: "/pracownik/dodawanieHerbaty/", component: DodawanieHerbatyPracownik}
];
const router = new VueRouter({
  routes,
  mode:"history"
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
