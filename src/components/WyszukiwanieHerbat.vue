<template>
  <div id="app">
    <div>
      <Filtracja
        :kraje="kraje"
        :gatunki="gatunki"
        :czyPracownik="czyPracownik"
        @click="szukaj"
        class="LewyPasekWyszukiwanieHerbat"
      />
      <ListaHerbatKlient :herbaty="herbaty" class="PrawyPasekWyszukiwanieHerbat"/>
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
    czyPracownik: Boolean
  },
  methods: {
    szukaj(argument) {
      DataAccess.getDostepneHerbatyFiltred(argument).then(data => {this.herbaty = data});
    }
  },
  
  mounted() {
    DataAccess.getGatunki().then(data => {this.gatunki = data});
    DataAccess.getDostepneHerbaty().then(data => {this.herbaty = data});
    DataAccess.getKraje().then(data => {this.kraje = data});
    
  },
  data: function() {
    return {
      wiadomosc: "Hello",
      herbaty: [],
      gatunki: [],
      kraje: []
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
