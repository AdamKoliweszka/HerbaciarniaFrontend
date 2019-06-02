<template>
  <div id="app">
    <MenuForEmployee/>

    <form class="container">
      <fieldset>
        <legend>Edytowanie gatunku</legend>
        <label for="species">Gatunek:</label>
        <select
          id="gatunek"
          v-model="selectedSpecies"
          @change="updateNameOfSpecies()"
          class="comboBox"
        >
          <option
            v-for="TeaSpecies in species"
            :value="TeaSpecies"
            v-bind:key="'TeaSpecies' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>
        <input type="button" class="button_EdytowanieGatunkow" value="Usuń" @click="deleteSpecies">
        <label for="nameOfSpecies">Nazwa gatunku:</label>
        <input id="nameOfSpecies" type="text" v-model="newNameOfSpecies">
        <input type="button" class="button" value="Zmień nazwe" @click="updateSpecies">
      </fieldset>
      <fieldset>
        <legend>Dodawanie gatunku:</legend>
        <label for="nameOfNewSpecies">Nazwa gatunku:</label>
        <input id="nameOfNewSpecies" type="text" v-model="nameOfNewSpecies">
        <input type="button" class="button" value="Dodaj" @click="addSpecies">
      </fieldset>
    </form>
    <div v-if="comunicats.length > 0" class="container">
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'TeaSpeciesByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
    </div>
  </div>
</template>

<script>
import DataAccess from "@/components/DataAccess.js";
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuForEmployee
  },
  mounted() {
    DataAccess.getSpecies().then(data => {
      this.species = data;
    });
  },
  data: function() {
    return {
      species: [],
      selectedSpecies: null,
      newNameOfSpecies: "",
      nameOfNewSpecies: "",
      newSpecies: {
        id_species: 0,
        name: ""
      },
      comunicats: []
    };
  },
  methods: {
    updateNameOfSpecies() {
      this.newNameOfSpecies = this.selectedSpecies.name;
    },
    deleteSpecies() {
      if (this.selectedSpecies != null) {
        DataAccess.deleteSpecies(this.selectedSpecies.id_species)
          .then(response => {
            DataAccess.getSpecies().then(data => {
              this.species = data;
            });
            this.newNameOfSpecies = "";
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
    updateSpecies() {
      if (this.selectedSpecies != null) {
        this.selectedSpecies.name = this.newNameOfSpecies;
        DataAccess.updateSpecies(this.selectedSpecies)
          .then(response => {
            DataAccess.getSpecies().then(data => {
              this.species = data;
            });
            this.comunicats = [];
            this.comunicats.push(response.data);
          })
          .catch(error => {
            this.comunicats = [];
            for (var propName in error.response.data) {
              this.comunicats.push(error.response.data[propName]);
            }
            DataAccess.getSpecies().then(data => {
              this.species = data;
            });
          });
      }
    },
    addSpecies() {
      this.newSpecies.name = this.nameOfNewSpecies;
      DataAccess.addSpecies(this.newSpecies)
        .then(response => {
          DataAccess.getSpecies().then(data => {
            this.species = data;
          });
          this.comunicats = [];
          this.comunicats.push(response.data);
          this.nameOfNewSpecies = "";
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