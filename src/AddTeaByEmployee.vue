<template>
  <div id="app">
    <MenuForEmployee/>
    <form>
      <fieldset>
        <legend>Dodawanie herbaty</legend>
        <label for="name">Nazwa:</label>
        <input id="name" type="text" v-model="tea.name">

        <label for="description">Opis:</label>
        <textarea id="description" v-model="tea.description"/>

        <label for="sellingPrice">Cena sprzedaży:</label>
        <input id="sellingPrice" type="number" v-model="tea.price_of_selling">

        <label for="sellingProvide">Cena dostawy:</label>
        <input id="sellingProvide" type="number" v-model="tea.price_of_delivery">

        <label for="species">Gatunek:</label>
        <select id="species" v-model="tea.tea_species" class="combo_EdytowanieGatunkow">
          <option
            v-for="TeaSpecies in species"
            :value="TeaSpecies"
            v-bind:key="'TeaSpecies' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>

        <label for="country">Kraj pochodzenia:</label>
        <select id="country" v-model="tea.country_of_origin" class="combo_EdytowanieKrajow">
          <option
            v-for="country in countries"
            :value="country"
            v-bind:key="'country' + country.name"
          >{{country.name}}</option>
        </select>

        <input type="button" @click="addTea" value="Dodawanie">
      </fieldset>
    </form>
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'AddTeaByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "DodawanieHerbatyPracownik",
  mounted() {
    DataAccess.getSpecies().then(data => {
      this.species = data;
    });
    DataAccess.getCountries().then(data => {
      this.countries = data;
    });
  },
  components: {
    MenuForEmployee
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
      countries: null,
      comunicats: []
    };
  },
  methods: {
    addTea() {
      DataAccess.addTea(this.tea)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push(response.data);
          this.clear();
        })
        .catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
    },
    clear() {
      this.tea = {
        id_tea: 0,
        name: "",
        description: "",
        price_of_selling: 1,
        price_of_delivery: 0,
        available_quantity: 0,
        tea_species: null,
        country_of_origin: null
      };
    }
  }
};
</script>


<style scoped>
input {
  width: 100%;
}
select {
  width: 100%;
}
textarea {
  width: 100%;
}
</style>
