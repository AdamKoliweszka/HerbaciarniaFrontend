<template>
  <div id="app">
    <MenuPracownik/>
    <div class="EdycjaContainer">
      <div class="EdycjaContainerItem">
        <p>Edytowanie gatunku:</p>
        <select
          v-model="selectedSpecies"
          @change="aktualizacjaNazwyGatunku()"
          class="combo_EdytowanieGatunkow"
        >
          <option
            v-for="TeaSpecies in species"
            :value="TeaSpecies"
            v-bind:key="'TeaSpecies' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>
        <input type="button" class="button_EdytowanieGatunkow" value="Usuń" @click="usunGatunek">
        <br>Nazwa gatunku:
        <input type="text" v-model="newNameOfSpecies">
        <input
          type="button"
          class="button_EdytowanieGatunkow"
          value="Zmień nazwe"
          @click="aktualizacjaGatunku"
        >
      </div>
      <div class="EdycjaContainerItem">
        <p>Dodawanie gatunku:</p>Nazwa gatunku:
        <input type="text" v-model="nameOfNewSpecies">
        <input
          type="button"
          class="button_EdytowanieGatunkow"
          value="Dodaj"
          @click="dodawanieGatunku"
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
import MenuPracownik from "@/components/MenuPracownik.vue";
import EdytowanieGatunkow from "@/components/EdytowanieGatunkow.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik,
    EdytowanieGatunkow
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
    aktualizacjaNazwyGatunku() {
      this.newNameOfSpecies = this.selectedSpecies.name;
      this.komunikatEdycjaGatunku = "komunikatBleduNiewidoczny";
    },
    deleteSpecies() {
      if (this.selectedSpecies == null) {
        this.komunikatEdycjaGatunku = "komunikatGatunekPusty";
      } else if (this.selectedSpecies.id_species > 1) {
        DataAccess.deleteSpecies(this.selectedSpecies.id_species).then(() => {
          DataAccess.getGatunki().then(data => {
            this.gatunki = data;
          });
        });
        this.nowaNazwaGatunku = "";
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

<style>
.EdycjaContainer {
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.EdycjaContainerItem {
  flex: 1;
  width: 100%;
}
.EdycjaContainer p {
  display: block;
  border-style: none none solid none;
  border-bottom-color: darkgreen;
  color: darkgreen;
}
.EdycjaContainer input {
  padding-right: 20px;
}
.button_EdytowanieGatunkow {
  margin-left: 10px;
}
.combo_EdytowanieGatunkow {
  width: 100px;
}

.inputText {
  width: 100px;
}
</style>