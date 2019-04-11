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
      <select v-model="tea.country_of_origin" class="combo_EdytowanieKrajow">
        <option
          v-for="country in countries"
          :value="country"
          v-bind:key="'country' + country.name"
        >{{country.name}}</option>
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
      tea: {
        id_tea: 0,
        name: "",
        description: "",
        price_of_selling: 1,
        price_of_delivery: 0,
        available_quantity: 0,
        tea_species: null,
        country_of_origin: null
      },
      species: null,
      countries: null
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
