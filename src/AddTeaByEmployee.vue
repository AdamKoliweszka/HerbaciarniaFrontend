<template>
  <div id="app">
    <MenuForEmployee/>
    <form class="container">
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
        <label for="file" class="fileSender">Wczytaj plik</label>
         <input accept=".jpg, .png" type="file" id="file" ref="file" @change="handleFileUpload()">
        <img ref="obrazPodglad" class="imgContainer"/>
        <input type="button" @click="addTea" value="Dodawanie">
      </fieldset>
    </form>
   
    <div v-if="comunicats.length > 0" class="container">
      <p
        v-for="(Comunicat,index) in comunicats"
        v-bind:key="'AddTeaByEmployee'+ index + Comunicat"
      >{{Comunicat}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      comunicats: [],
      file: ""
    };
  },
  methods: {
    addTea() {
      DataAccess.addTea(this.tea)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push("Udało się dodać herbate!");
          this.submitFile(response.data);
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
    },
    submitFile(idNumber) {
      let formData = new FormData();
      const url = `http://localhost:8086/myapp/Plik/` + idNumber;
      formData.append("file", this.file);
      let comunicats = this.comunicats;
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          params: null,
          auth: {
            username: this.$store.getters.username,
            password: this.$store.getters.password
          }
        })
        .then(function() {
          /*
          while (comunicats.length > 0) comunicats.pop();
          comunicats.push("Plik wysłany poprawnie!");
          */
        })
        .catch(function() {
          /*
          while (comunicats.length > 0) comunicats.pop();
          comunicats.push("Plik nie wysłany!");
          */
        });
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.$refs.obrazPodglad.setAttribute('src',e.target.result);
      };
      reader.readAsDataURL(this.$refs.file.files[0]);
    }
  }
};
</script>


<style scoped>
.fileSender{
  display: block;
  background-color:green;
  text-align: center;
  color: white;
  box-shadow: 0px 0px 10px white;
}
input[type="file"]
{
  display: none;
}
.imgContainer{
  width: 100%;
}
select {
  background: transparent;
  border: solid 2px green;
}
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
