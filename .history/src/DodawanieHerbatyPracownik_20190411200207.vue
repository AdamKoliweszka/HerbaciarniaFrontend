<template>
  <div id="app">
    <MenuPracownik/>
    <div>
      Nazwa:
      <input type="text" v-model="tea.name">
    </div>
    <div>
      Opis:
      <textarea v-model="tea.description" />
    </div>
    <div>
      Cena sprzedaży:
      <input type="number" v-model="tea.price_of_selling">
    </div>
    <div>
      Cena dostawy:
      <input type="number" v-model="tea.price_of_delivery">
    </div>
    <div>
      Gatunek:
      <select v-model="tea.tea_species" class="combo_EdytowanieGatunkow">
        <option
          v-for="TeaSpecies in species"
          :value="TeaSpecies"
          v-bind:key="'TeaSpecies' + TeaSpecies.name"
        >{{TeaSpecies.name}}</option>
      </select>
    </div>
    <div>
      Kraj pochodzenia:
      <select v-model="herbata.krajPochodzenia" class="combo_EdytowanieKrajow">
        <option
          v-for="Kraj in kraje"
          :value="Kraj"
          v-bind:key="'kraj' + Kraj.nazwa_kraju"
        >{{Kraj.nazwa_kraju}}</option>
      </select>
    </div>
  <div>
    <input type="button" @click="dodawanie" value="Dodawanie">
  </div>
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "DodawanieHerbatyPracownik",
  mounted() {
    DataAccess.getGatunki().then(data => {
      this.gatunki = data;
    });
    DataAccess.getKraje().then(data => {
      this.kraje = data;
    });
  },
  components: {
    MenuPracownik
  },
  data: function() {
    return {
      herbata: {
        id_herbaty: 0,
        nazwa_herbaty: "",
        opis: "",
        cenaSprzedazy: 1,
        cenaDostawy: 0,
        iloscDostepna: 0,
        gatunekHerbaty: null,
        krajPochodzenia: null
      },
      gatunki: null,
      kraje: null
    };
  },
  methods: {
    dodawanie(){
      DataAccess.dodawanieHerbaty(this.herbata).then(() => {
          
        });
    }
  }
};
</script>


<style>
</style>
