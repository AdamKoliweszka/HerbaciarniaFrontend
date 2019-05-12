<template>
  <div id="app">
    <div v-if="roleOfUser === 'PRACOWNIK'" id="menuForEmployee" class="Menu">
      <router-link class="itemMenu" to="/herbaty">Edytowanie herbat</router-link>
      <router-link class="itemMenu" to="/dodawanieHerbaty">Dodawanie herbaty</router-link>
      <router-link class="itemMenu" to="/dodawanieDostawcy">Dodawanie dostawcy</router-link>
      <router-link class="itemMenu" to="/gatunki">Edytowanie gatunków</router-link>
      <router-link class="itemMenu" to="/kraje">Edytowanie krajów</router-link>
      <router-link class="itemMenu" to="/dostawcy">Lista dostawców</router-link>
      <router-link class="itemMenu" to="/listaDostaw">Lista dostaw</router-link>
      <router-link class="itemMenu" to="/listaZakupow">Lista zakupów</router-link>
      <router-link class="itemMenu" to="/edytujDane">Edytuj dane</router-link>
      <router-link class="itemMenu" to="/wyloguj">Wyloguj</router-link>
    </div>
    <div v-if="roleOfUser === 'KLIENT'" id="menuForEmployee" class="Menu">
      <router-link class="itemMenu" to="/herbaty">Przeglądaj herbaty</router-link>
      <router-link class="itemMenu" to="/koszyk">Koszyk</router-link>
      <router-link class="itemMenu" to="/wyloguj">Wyloguj</router-link>
    </div>
    <div v-if="roleOfUser === 'NIEZALOGOWANY'" id="menuForEmployee" class="Menu">
      <router-link class="itemMenu" to="/herbaty">Przeglądaj herbaty</router-link>
      <router-link class="itemMenu" to="/rejestracja">Rejestracja</router-link>
      <router-link class="itemMenu" to="/login">Zaloguj</router-link>
    </div>
    <div class="GapBar"></div>
  </div>
</template>

<script>
export default {
  name: "MenuForEmployee",
  computed:{
    username() {
      return this.$store.getters.username;
    },
    roleOfUser() {
      return this.$store.getters.roleOfUser;
    }
  }
};
</script>


<style scoped>
.itemMenu {
  background-color: green;
  text-align: center;
  border-style: none solid none solid;
  border-color: darkgreen;
  color: white;
  display: block;
  text-decoration: none;
}
.itemMenu:hover {
  padding-top: 5vh;
}

.Menu {
  width: 100vw;
  height: 5vh;
  position: fixed;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vh;
}
.GapBar {
  width: 100vw;
  height: 5vh;
}
</style>
