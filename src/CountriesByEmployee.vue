<template>
  <div id="app">
    <MenuForEmployee/>
    <div class="Contents">
      <div class="ContentsItem">
        <p>Edytowanie Kraju:</p>
        <select
          v-model="selectedCountry"
          @change="updateNameOfCountry()"
          class="combo"
        >
          <option
            v-for="CountryOfOrigin in countries"
            :value="CountryOfOrigin"
            v-bind:key="'CountryOfOrigin' + CountryOfOrigin.name"
          >{{CountryOfOrigin.name}}</option>
        </select>
        <input type="button" class="button" value="Usuń" @click="deleteCountry">
        <br>Nazwa Kraju:
        <input type="text" v-model="newNameOfCountry">
        <input
          type="button"
          class="button"
          value="Zmień nazwe"
          @click="updateCountry"
        >
      </div>
      <div class="ContentsItem">
        <p>Dodawanie Kraju:</p>Nazwa Kraju:
        <input type="text" v-model="nameOfNewCountry">
        <input type="button" class="button" value="Dodaj" @click="addCountry">
      </div>
      
    </div>
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'CountriesByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
  </div>
</template>

<script>
import DataAccess from "@/components/DataAccess.js";
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "CountriesByEmployee",
  components: {
    MenuForEmployee
  },
  mounted() {
    DataAccess.getCountries().then(data => {
      this.countries = data;
    });
  },
  data: function() {
    return {
      countries: [],
      selectedCountry: null,
      newNameOfCountry: "",
      nameOfNewCountry: "",
      komunikatEdycjaKraju: "",
      newCountry: {
        id_country: 0,
        name: ""
      },
      comunicats: []
    };
  },
  methods: {
    updateNameOfCountry() {
      this.newNameOfCountry = this.selectedCountry.name;
    },
    deleteCountry() {
      if (this.selectedCountry != null) {
        DataAccess.deleteCountry(this.selectedCountry.id_country).then(response => {
          DataAccess.getCountries().then(data => {
            this.countries = data;
          });
          this.comunicats = [];
          this.comunicats.push(response.data);
          this.newNameOfCountry = "";
        }).catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
        
      } 
    },
    updateCountry() {
      if (this.selectedCountry != null) {
        this.selectedCountry.name = this.newNameOfCountry;
        DataAccess.updateCountry(this.selectedCountry).then(response => {
          DataAccess.getCountries().then(data => {
            this.countries = data;
          });
          this.comunicats = [];
          this.comunicats.push(response.data);
        }).catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
        
      } 
    },
    addCountry() {
      this.newCountry.name = this.nameOfNewCountry;
      DataAccess.addCountry(this.newCountry).then(response => {
        DataAccess.getCountries().then(data => {
          this.countries = data;
        });
        this.nameOfNewCountry = "";
        this.comunicats = [];
        this.comunicats.push(response.data);
      }).catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });

      
    }
  }
};
</script>

<style>
</style>