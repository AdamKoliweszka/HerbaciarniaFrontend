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
      <div
        v-if="komunikatEdycjaKraju == 'komunikatKrajNiezdefiniowany'"
        class="komunikatBledu"
      >Kraj "Niezdefiniowany" niemoże ulec zmianie!</div>
      <div
        v-if="komunikatEdycjaKraju == 'komunikatKrajPusty'"
        class="komunikatBledu"
      >Nie został wybrany Kraj!</div>
      <div
        v-if="komunikatEdycjaKraju == 'komunikatKrajDodany'"
        class="komunikatPowodzenia"
      >Kraj poprawnie dodany!</div>
      <div
        v-if="komunikatEdycjaKraju == 'komunikatKrajUsuniety'"
        class="komunikatPowodzenia"
      >Kraj poprawnie usunięty!</div>
      <div
        v-if="komunikatEdycjaKraju == 'komunikatKrajZmieniony'"
        class="komunikatPowodzenia"
      >Nazwa Kraju została zmieniona!</div>
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
      }
    };
  },
  methods: {
    updateNameOfCountry() {
      this.newNameOfCountry = this.selectedCountry.name;
      this.komunikatEdycjaKraju = "komunikatBleduNiewidoczny";
    },
    deleteCountry() {
      if (this.selectedCountry == null) {
        this.komunikatEdycjaKraju = "komunikatKrajPusty";
      } else if (this.selectedCountry.id_country > 1) {
        DataAccess.deleteCountry(this.selectedCountry.id_country).then(() => {
          DataAccess.getCountries().then(data => {
            this.countries = data;
          });
        });

        this.newNameOfCountry = "";
        this.komunikatEdycjaKraju = "komunikatKrajUsuniety";
      } else {
        this.komunikatEdycjaKraju = "komunikatKrajNiezdefiniowany";
      }
    },
    updateCountry() {
      if (this.selectedCountry == null) {
        this.komunikatEdycjaKraju = "komunikatKrajPusty";
      } else if (this.selectedCountry.id_country > 1) {
        this.selectedCountry.name = this.newNameOfCountry;
        DataAccess.updateCountry(this.selectedCountry).then(() => {
          DataAccess.getCountries().then(data => {
            this.countries = data;
          });
        });

        this.newNameOfCountry = "";
        this.komunikatEdycjaKraju = "komunikatKrajZmieniony";
      } else {
        this.komunikatEdycjaKraju = "komunikatKrajNiezdefiniowany";
      }
    },
    addCountry() {
      this.newCountry.name = this.nameOfNewCountry;
      DataAccess.addCountry(this.newCountry).then(() => {
        DataAccess.getCountries().then(data => {
          this.countries = data;
        });
      });

      this.nameOfNewCountry = "";
      this.komunikatEdycjaKraju = "komunikatKrajDodany";
    }
  }
};
</script>

<style>
</style>