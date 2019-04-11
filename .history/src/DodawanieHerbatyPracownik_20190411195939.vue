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
      <input type="number" v-model="herbata.cenaSprzedazy">
    </div>
    <div>
      Cena dostawy:
      <input type="number" v-model="herbata.cenaDostawy">
    </div>
    <div>
      Gatunek:
      <select v-model="herbata.gatunekHerbaty" class="combo_EdytowanieGatunkow">
        <option
          v-for="Gatunek in gatunki"
          :value="Gatunek"
          v-bind:key="'gatunek' + Gatunek.nazwa_gatunku"
        >{{Gatunek.nazwa_gatunku}}</option>
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
