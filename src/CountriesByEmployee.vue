<template>
  <div id="app">
    <MenuForEmployee/>

    <form>
      <fieldset>
        <legend>Edytowanie kraju</legend>
        <label for="countries">Kraj:</label>
        <select
          id="country"
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
        <input type="button" value="Usuń" @click="deleteCountry">
        <label for="nameOfCountry">Nazwa kraju:</label>
        <input id="nameOfCountry" type="text" v-model="newNameOfCountry">
        <input type="button" value="Zmień nazwe" @click="updateCountry">
      </fieldset>
      <fieldset>
        <legend>Dodawanie kraju</legend>
        <label for="nameOfNewCountry">Nazwa kraju:</label>
        <input id="nameOfNewCountry" type="text" v-model="nameOfNewCountry">
        <input type="button" value="Dodaj" @click="addCountry">
      </fieldset>
    </form>

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
        DataAccess.deleteCountry(this.selectedCountry.id_country)
          .then(response => {
            DataAccess.getCountries().then(data => {
              this.countries = data;
            });
            this.comunicats = [];
            this.comunicats.push(response.data);
            this.newNameOfCountry = "";
          })
          .catch(error => {
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
        DataAccess.updateCountry(this.selectedCountry)
          .then(response => {
            DataAccess.getCountries().then(data => {
              this.countries = data;
            });
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
    },
    addCountry() {
      this.newCountry.name = this.nameOfNewCountry;
      DataAccess.addCountry(this.newCountry)
        .then(response => {
          DataAccess.getCountries().then(data => {
            this.countries = data;
          });
          this.nameOfNewCountry = "";
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
};
</script>

<style scoped>
input{
  width: 100%;
}
select{
  width: 100%;
}
textarea{
  width: 100%;
}
</style>