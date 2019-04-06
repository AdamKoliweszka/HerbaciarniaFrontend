<template>
  <div id="app">
    <MenuPracownik/>
    <div>
      Nazwa:
      <input type="text" v-model="herbata.nazwa_herbaty">
    </div>
    <div>
      Opis:
      <textarea v-model="herbata.opis" />
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
    <input type="button" @click="edytuj" value="Edytuj">
  </div>
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EdytowanieHerbatyPracownik",
  mounted() {
    DataAccess.getWszystkieHerbatyById(this.$route.params.id).then(data => {
      this.herbata = data;
    });
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
        cenaSprzedazy: "",
        cenaDostawy: "",
        iloscDostepna: 0,
        gatunekHerbaty: null,
        krajPochodzenia: null
      },
      gatunki: null,
      kraje: null
    };
  },
  methods: {
    edytuj(){
      DataAccess.aktualizacjaHerbaty(this.herbata).then(() => {
          DataAccess.getWszystkieHerbatyById(this.$route.params.id).then(data => {
            this.herbata = data;
          });
        });
    }
  }
};
</script>


<style>
</style>
