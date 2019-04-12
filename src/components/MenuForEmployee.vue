<template>
  <div id="app">
    <div class="Menu">
      <router-link class="itemMenu" to="/">Edytowanie herbat</router-link>
      <router-link class="itemMenu" to="/pracownik/dodawanieHerbaty">Dodawanie herbaty</router-link>
      <router-link class="itemMenu" to="/pracownik/gatunki">Edytowanie gatunków</router-link>
      <router-link class="itemMenu" to="/pracownik/kraje">Edytowanie krajów</router-link>
      <router-link class="itemMenu" to="/pracownik/dostawcy">Lista dostawców</router-link>
    </div>
    <div class="GapBar"></div>
  </div>
</template>

<script>
export default {
  name: "MenuForEmployee",
  
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
