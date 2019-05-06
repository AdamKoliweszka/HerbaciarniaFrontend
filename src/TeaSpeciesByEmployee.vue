<template>
  <div id="app">
    <MenuForEmployee/>
    <div class="Container">
      <div class="ContainerItem">
        <p>Edytowanie gatunku:</p>
        <select v-model="selectedSpecies" @change="updateNameOfSpecies()" class="comboBox">
          <option
            v-for="TeaSpecies in species"
            :value="TeaSpecies"
            v-bind:key="'TeaSpecies' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>
        <input type="button" class="button_EdytowanieGatunkow" value="Usuń" @click="deleteSpecies">
        <br>Nazwa gatunku:
        <input type="text" v-model="newNameOfSpecies">
        <input type="button" class="button" value="Zmień nazwe" @click="updateSpecies">
      </div>
      <div class="ContainerItem">
        <p>Dodawanie gatunku:</p>Nazwa gatunku:
        <input type="text" v-model="nameOfNewSpecies">
        <input type="button" class="button" value="Dodaj" @click="addSpecies">
      </div>
    </div>
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'TeaSpeciesByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
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
        DataAccess.deleteSpecies(this.selectedSpecies.id_species).then(response => {
          DataAccess.getSpecies().then(data => {
            this.species = data;
          });
          this.newNameOfSpecies = "";
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
    updateSpecies() {
      if (this.selectedSpecies != null) {
        this.selectedSpecies.name = this.newNameOfSpecies;
        DataAccess.updateSpecies(this.selectedSpecies).then(response => {
          DataAccess.getSpecies().then(data => {
            this.species = data;
          });
          this.comunicats = [];
          this.comunicats.push(response.data);
        }).catch(error => {
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
.Container {
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.ContainerItem {
  flex: 1;
  width: 100%;
}
.Container p {
  display: block;
  border-style: none none solid none;
  border-bottom-color: darkgreen;
  color: darkgreen;
}
.Container input {
  padding-right: 20px;
}
.button {
  margin-left: 10px;
}
.comboBox {
  width: 100px;
}

.inputText {
  width: 100px;
}
</style>