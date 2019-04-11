<template>
  <div id="app">
    <MenuPracownik />
    <div>
      <FiltracjaPracownik
        :kraje="kraje"
        :gatunki="gatunki"
        @click="szukaj"
        class="LewyPasekWyszukiwanieHerbat"
      />
      <ListaHerbatPracownik :herbaty="herbaty" class="PrawyPasekWyszukiwanieHerbat"/>
    </div>
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import DataAccess from "@/components/DataAccess.js";
import FiltracjaPracownik from "@/components/FiltracjaPracownik.vue";
import ListaHerbatPracownik from "@/components/ListaHerbatPracownik.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik,
    FiltracjaPracownik,
    ListaHerbatPracownik
  },
  methods: {
    szukaj(argument) {
      DataAccess.getWszystkieHerbatyFiltred(argument).then(data => {this.herbaty = data});
    }
  },
  data: function() {
    return {
      herbaty: [],
      gatunki: [],
      kraje: []
    };
  },
  mounted() {
    DataAccess.getGatunki().then(data => {this.gatunki = data});
    DataAccess.getWszystkieHerbaty().then(data => {this.herbaty = data});
    DataAccess.getKraje().then(data => {this.kraje = data});
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