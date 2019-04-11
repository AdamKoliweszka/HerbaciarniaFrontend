<template>
  <div id="app">
    <div>
      <Filtracja
        :countries="countries"
        :species="species"
        :isEmployee="isEmployee"
        @click="szukaj"
        class="LewyPasekWyszukiwanieHerbat"
      />
      <ListaHerbatKlient :tea="tea" class="PrawyPasekWyszukiwanieHerbat"/>
    </div>
  </div>
</template>

<script>
import DataAccess from "@/components/DataAccess.js";
import Filtracja from "@/components/Filtracja.vue";
import ListaHerbatKlient from "@/components/ListaHerbatKlient.vue";
export default {
  name: "app",
  components: {
    Filtracja,
    ListaHerbatKlient
  },
  props:{
    isEmployee: Boolean
  },
  methods: {
    szukaj(argument) {
      DataAccess.getAvaibleTeaFiltred(argument).then(data => {this.tea = data});
    }
  },
  
  mounted() {
    DataAccess.getSpecies().then(data => {this.species = data});
    DataAccess.getAvaibleTea().then(data => {this.tea = data});
    DataAccess.getCountries().then(data => {this.countries = data});
    
  },
  data: function() {
    return {
      wiadomosc: "Hello",
      tea: [],
      species: [],
      countries: []
    };
  },
};
</script>

<style>
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
