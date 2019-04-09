<template>
  <div id="app">
    <div class="KontenerMenu">
      <router-link class="itemMenu" to="/pracownik">Edytowanie herbat</router-link>
      <router-link class="itemMenu" to="/pracownik/dodawanieHerbaty">Dodawanie herbaty</router-link>
      <router-link class="itemMenu" to="/pracownik/gatunki">Edytowanie gatunków</router-link>
      <router-link class="itemMenu" to="/pracownik/kraje">Edytowanie krajów</router-link>
      <router-link class="itemMenu" to="/pracownik/dostawcy">Lista dostawców</router-link>
    </div>
    <div class="PasekOdstepuMenu"></div>
  </div>
</template>

<script>
export default {
  name: "MenuPracownik",
  
};
</script>


<style>
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

.KontenerMenu {
  width: 100%;
  height: 5vh;
  position: fixed;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.PasekOdstepuMenu {
  width: 100%;
  height: 5vh;
}
</style>
