<template>
  <div id="app">
    <nav v-if="roleOfUser === 'PRACOWNIK'" class="Menu">
      <div class="complexSubMenu">
        Zarządzanie herbatami
        <div class="dropMenu">
          <router-link class="complexMenuItem" to="/herbaty">Edytowanie herbat</router-link>
          <router-link class="complexMenuItem" to="/dodawanieHerbaty">Dodawanie herbaty</router-link>
        </div>
      </div>
      <div class="complexSubMenu">
        Zarządzanie dostawami
        <div class="dropMenu">
          <router-link class="complexMenuItem" to="/dodawanieDostawcy">Dodawanie dostawcy</router-link>
          <router-link class="complexMenuItem" to="/dodawanieDostawy">Dodawanie dostawy</router-link>
          <router-link class="complexMenuItem" to="/dostawcy">Lista dostawców</router-link>
          <router-link class="complexMenuItem" to="/listaDostaw">Lista dostaw</router-link>
        </div>
      </div>
      <div class="complexSubMenu">
        Edycja danych
        <div class="dropMenu">
          <router-link class="complexMenuItem" to="/gatunki">Edytowanie gatunków</router-link>
          <router-link class="complexMenuItem" to="/kraje">Edytowanie krajów</router-link>
        </div>
      </div>
      <div class="complexSubMenu">
        Zarządzanie zakupami
        <div class="dropMenu">
          <router-link class="complexMenuItem" to="/listaZakupow">Lista zakupów</router-link>
        </div>
      </div>
      <div class="complexSubMenu">
        Zarządzanie kontem
        <div class="dropMenu">
          <router-link class="complexMenuItem" to="/edytujDane">Edytuj dane</router-link>
          <router-link class="complexMenuItem" to="/dodajPracownika">Dodaj pracownika</router-link>
          <router-link class="complexMenuItem" to="/usunKonto">Usuń konto</router-link>
          <router-link class="complexMenuItem" to="/wyloguj">Wyloguj</router-link>
        </div>
      </div>
      
    </nav>
    <nav v-if="roleOfUser === 'KLIENT'" id="menuForEmployee" class="Menu">
      <router-link class="itemMenu" to="/herbaty">Przeglądaj herbaty</router-link>
      <router-link class="itemMenu" to="/listaZakupow">Lista zakupów</router-link>
      <router-link class="itemMenu" to="/koszyk">Koszyk</router-link>
      <router-link class="itemMenu" to="/edytujDane">Edytuj dane</router-link>
      <router-link class="itemMenu" to="/usunKonto">Usuń konto</router-link>
      <router-link class="itemMenu" to="/wyloguj">Wyloguj</router-link>
    </nav>
    <nav v-if="roleOfUser === 'NIEZALOGOWANY'" id="menuForEmployee" class="Menu">
      <router-link class="itemMenu" to="/herbaty">Przeglądaj herbaty</router-link>
      <router-link class="itemMenu" to="/rejestracja">Rejestracja</router-link>
      <router-link class="itemMenu" to="/login">Zaloguj</router-link>
    </nav>
    <div class="GapBar"></div>
  </div>
</template>

<script>
export default {
  name: "MenuForEmployee",
  computed: {
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

.complexSubMenu:hover .dropMenu {
  display: block;
}
.complexSubMenu {
  position: relative;
  display: inline-block;
  width: 20%;
  color: white;
  text-align: center;
}
.dropMenu {
  width: 100%;
  display: none;
  position: absolute;
  background-color: green;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dropMenu a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.complexMenu {
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5vh;
}
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
  width: 15%;
}

.Menu {
  width: 100vw;
  height: 5vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vh;
  z-index: 1;
}
.GapBar {
  width: 100vw;
  height: 5vh;
}
</style>
