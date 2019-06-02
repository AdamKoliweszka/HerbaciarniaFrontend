<template>
  <div id="app">
    <MenuForEmployee/>

    <form class="container">
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
  <div v-if="comunicats.length > 0" class="container">
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'CountriesByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
    </div>
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
input {
  width: 100%;
}
select {
  width: 100%;
}
textarea {
  width: 100%;
}
input[type="button"] {
  color: white;
  background-color: green;
  font-size: 16px;
}
.container {
  margin-top: 50px;
  background-color: rgba(119, 204, 109, 0.7);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid green;
  box-shadow: 0px 0px 10px green;
}
fieldset {
  border: none;
}
legend {
  text-align: center;
}
input[type="text"],
input[type="number"],
textarea {
  border: none;
  border-bottom: solid 2px green;
  background-color: transparent;
}
*:focus {
  outline: none;
}
input[type="text"]:focus + label {
  transform: translate3d(0, -100%, 0);
}
label {
  position: relative;
}
</style>