<template>
  <div id="app">
    <MenuForEmployee/>
    <div v-if="tea.id_tea > 0">
      <div>
        Nazwa:
        <input type="text" v-model="tea.name">
      </div>
      <div>
        Opis:
        <textarea v-model="tea.description"/>
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
            v-bind:key="'species' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>
      </div>
      <div>
        Kraj pochodzenia:
        <select v-model="tea.country_of_origin" class="combo_EdytowanieKrajow">
          <option
            v-for="CountryOfOrigin in countries"
            :value="CountryOfOrigin"
            v-bind:key="'CountryOfOrigin' + CountryOfOrigin.name"
          >{{CountryOfOrigin.name}}</option>
        </select>
      </div>
      <div>
        <input type="button" @click="edit" value="Edytuj">
      </div>
    </div>
        <p v-for="(Comunicat,index) in comunicats" v-bind:key="'EditTeaByEmployee'+ index + Comunicat">
        {{Comunicat}}
      </p>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EditTeaByEmployee",
  mounted() {
    DataAccess.getAllTeaById(this.$route.params.id).then(data => {
      this.tea = data;
    });

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
      isEdited: false,
      isError: false,
      comunicats: []
    };
  },
  methods: {
    edit() {
      if (!this.isEdited) {
        DataAccess.updateTea(this.tea)
          .then(response => {
            this.comunicats = [];
            this.comunicats.push(response.data);
          })
          .catch(error => {
            this.comunicats = [];
            for (var propName in error.response.data) {
              this.comunicats.push(error.response.data[propName]);
            }
          });
      }
    }
  }
};
</script>


<style>
</style>
