<template>
  <div id="app">
    <MenuForEmployee/>
    <div class="Container">
      <div class="ContainerItem">
        <p>Edytowanie gatunku:</p>
        <select
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
        <br>Nazwa gatunku:
        <input type="text" v-model="newNameOfSpecies">
        <input
          type="button"
          class="button"
          value="Zmień nazwe"
          @click="updateSpecies"
        >
      </div>
      <div class="ContainerItem">
        <p>Dodawanie gatunku:</p>Nazwa gatunku:
        <input type="text" v-model="nameOfNewSpecies">
        <input
          type="button"
          class="button"
          value="Dodaj"
          @click="addSpecies"
        >
      </div>
      <div
        v-if="komunikatEdycjaGatunku == 'komunikatGatunekNiezdefiniowany'"
        class="komunikatBledu"
      >Gatunek "Niezdefiniowany" niemoże ulec zmianie!</div>
      <div
        v-if="komunikatEdycjaGatunku == 'komunikatGatunekPusty'"
        class="komunikatBledu"
      >Nie został wybrany gatunek!</div>
      <div
        v-if="komunikatEdycjaGatunku == 'komunikatGatunekDodany'"
        class="komunikatPowodzenia"
      >Gatunek poprawnie dodany!</div>
      <div
        v-if="komunikatEdycjaGatunku == 'komunikatGatunekUsuniety'"
        class="komunikatPowodzenia"
      >Gatunek poprawnie usunięty!</div>
      <div
        v-if="komunikatEdycjaGatunku == 'komunikatGatunekZmieniony'"
        class="komunikatPowodzenia"
      >Nazwa gatunku została zmieniona!</div>
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
  mounted(){
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
      komunikatEdycjaGatunku: "",
      newSpecies: {
        id_species: 0,
        name: ""
      },
      adresIPPort: "10.211.55.5:8086"
    };
  },
  methods: {
    updateNameOfSpecies() {
      this.newNameOfSpecies = this.selectedSpecies.name;
      this.komunikatEdycjaGatunku = "komunikatBleduNiewidoczny";
    },
    deleteSpecies() {
      if (this.selectedSpecies == null) {
        this.komunikatEdycjaGatunku = "komunikatGatunekPusty";
      } else if (this.selectedSpecies.id_species > 1) {
        DataAccess.deleteSpecies(this.selectedSpecies.id_species).then(() => {
          DataAccess.getSpecies().then(data => {
            this.species = data;
          });
        });
        this.newNameOfSpecies = "";
        this.komunikatEdycjaGatunku = "komunikatGatunekUsuniety";
      } else {
        this.komunikatEdycjaGatunku = "komunikatGatunekNiezdefiniowany";
      }
    },
    updateSpecies() {
      if (this.selectedSpecies == null) {
        this.komunikatEdycjaGatunku = "komunikatGatunekPusty";
      } else if (this.selectedSpecies.id_species > 1) {
        this.selectedSpecies.name = this.newNameOfSpecies;
        DataAccess.updateSpecies(this.selectedSpecies).then(() => {
          DataAccess.getSpecies().then(data => {
            this.species = data;
          });
        });
        this.newNameOfSpecies = "";
        this.komunikatEdycjaGatunku = "komunikatGatunekZmieniony";
      } else {
        this.komunikatEdycjaGatunku = "komunikatGatunekNiezdefiniowany";
      }
    },
    addSpecies() {
      this.newSpecies.name = this.nameOfNewSpecies;
      DataAccess.addSpecies(this.newSpecies).then(() => {
        DataAccess.getSpecies().then(data => {
          this.species = data;
        });
      });
      this.nameOfNewSpecies = "";
      this.komunikatEdycjaGatunku = "komunikatGatunekDodany";
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