<template>
<div>
  <nav v-if="roleOfUser === 'PRACOWNIK'" class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/listaZakupow">Lista zakupów</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Edycja danych</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/gatunki">Edytowanie gatunków</router-link>
            <router-link class="dropdown-item" to="/kraje">Edytowanie krajów</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Zarządzanie dostawami</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/dodawanieDostawcy">Dodawanie dostawcy</router-link>
            <router-link class="dropdown-item" to="/dodawanieDostawy">Dodawanie dostawy</router-link>
            <router-link class="dropdown-item" to="/dostawcy">Lista dostawców</router-link>
            <router-link class="dropdown-item" to="/listaDostaw">Lista dostaw</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Zarządzanie herbatami</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/herbaty">Edytowanie herbat</router-link>
            <router-link class="dropdown-item" to="/dodawanieHerbaty">Dodawanie herbaty</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Zarządzanie kontem</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/edytujDane">Edytuj dane</router-link>
            <router-link class="dropdown-item" to="/dodajPracownika">Dodaj pracownika</router-link>
            <router-link class="dropdown-item" to="/usunKonto">Usuń konto</router-link>
            <router-link class="dropdown-item" to="/wyloguj">Wyloguj</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <nav v-if="roleOfUser === 'KLIENT'" class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/herbaty">Przeglądaj herbaty</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/listaZakupow">Lista zakupów</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/koszyk">Koszyk</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/edytujDane">Edytuj dane</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/usunKonto">Usuń konto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/wyloguj">Wyloguj</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <nav v-if="roleOfUser === 'NIEZALOGOWANY'" class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/herbaty">Przeglądaj herbaty</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rejestracja">Rejestracja</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Zaloguj</router-link>
        </li>
      </ul>
    </div>
  </nav>
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

</style>
