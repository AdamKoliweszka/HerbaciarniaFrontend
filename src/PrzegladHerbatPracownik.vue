<template>
  <div id="app">
    <MenuForEmployee />
    <div>
      <FiltracjaPracownik
        :countries="countries"
        :species="species"
        @click="search"
        class="LewyPasekWyszukiwanieHerbat"
      />
      <ListaHerbatPracownik :tea="tea" class="PrawyPasekWyszukiwanieHerbat"/>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
import FiltracjaPracownik from "@/components/FiltracjaPracownik.vue";
import ListaHerbatPracownik from "@/components/ListaHerbatPracownik.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuForEmployee,
    FiltracjaPracownik,
    ListaHerbatPracownik
  },
  methods: {
    search(argument) {
      DataAccess.getAllTeaFiltred(argument).then(data => {this.tea = data});
    }
  },
  data: function() {
    return {
      tea: [],
      species: [],
      countries: []
    };
  },
  mounted() {
    DataAccess.getSpecies().then(data => {this.species = data;});
    DataAccess.getAllTea().then(data => {this.tea = data;});
    DataAccess.getCountries().then(data => {this.countries = data;});
  },
};
</script>

<style scoped>
.LewyPasekWyszukiwanieHerbat {
  height: 100%;
  width: 25%;
  padding: 5px;
  float: left;
}
.PrawyPasekWyszukiwanieHerbat{
  height: 100%;
  width: 70%;
  float: left;
  padding: 5px;
}
</style>