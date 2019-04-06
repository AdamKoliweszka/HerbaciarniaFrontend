<template>
  <div class="EdycjaContainer">
    <div class="EdycjaContainerItem">
      <p>Edytowanie Kraju:</p>
      <select
        v-model="selectedKraj"
        @change="aktualizacjaNazwyKraju()"
        class="combo_EdytowanieKrajow"
      >
        <option
          v-for="Kraj in Kraje"
          :value="Kraj"
          v-bind:key="'Kraj' + Kraj.nazwa_kraju"
        >{{Kraj.nazwa_kraju}}</option>
      </select>
      <input type="button" class="button_EdytowanieKrajow" value="Usuń" @click="usunKraj">
      <br>Nazwa Kraju:
      <input type="text" v-model="nowaNazwaKraju">
      <input
        type="button"
        class="button_EdytowanieKrajow"
        value="Zmień nazwe"
        @click="aktualizacjaKraju"
      >
    </div>
    <div class="EdycjaContainerItem">
      <p>Dodawanie Kraju:</p>Nazwa Kraju:
      <input type="text" v-model="nazwaNowegoKraju">
      <input type="button" class="button_EdytowanieKrajow" value="Dodaj" @click="dodawanieKraju">
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
</template>

<script>
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "MenuPracownik",
  mounted() {
    DataAccess.getKraje().then(data => {
      this.Kraje = data;
    });
  },
  data: function() {
    return {
      Kraje: [],
      selectedKraj: null,
      nowaNazwaKraju: "",
      nazwaNowegoKraju: "",
      komunikatEdycjaKraju: "",
      nowyKraj: {
        id_kraju: 0,
        nazwa_kraju: ""
      },
      adresIPPort: "10.211.55.5:8086"
    };
  },
  methods: {
    aktualizacjaNazwyKraju() {
      this.nowaNazwaKraju = this.selectedKraj.nazwa_kraju;
      this.komunikatEdycjaKraju = "komunikatBleduNiewidoczny";
    },
    usunKraj() {
      if (this.selectedKraj == null) {
        this.komunikatEdycjaKraju = "komunikatKrajPusty";
      } else if (this.selectedKraj.id_kraju > 1) {
        DataAccess.usuwanieKraju(this.selectedKraj.id_kraju).then(() => {
          DataAccess.getKraje().then(data => {
            this.Kraje = data;
          });
        });

        this.nowaNazwaKraju = "";
        this.komunikatEdycjaKraju = "komunikatKrajUsuniety";
      } else {
        this.komunikatEdycjaKraju = "komunikatKrajNiezdefiniowany";
      }
    },
    aktualizacjaKraju() {
      if (this.selectedKraj == null) {
        this.komunikatEdycjaKraju = "komunikatKrajPusty";
      } else if (this.selectedKraj.id_kraju > 1) {
        this.selectedKraj.nazwa_kraju = this.nowaNazwaKraju;
        DataAccess.aktualizacjaKraju(this.selectedKraj).then(() => {
          DataAccess.getKraje().then(data => {
            this.Kraje = data;
          });
        });

        this.nowaNazwaKraju = "";
        this.komunikatEdycjaKraju = "komunikatKrajZmieniony";
      } else {
        this.komunikatEdycjaKraju = "komunikatKrajNiezdefiniowany";
      }
    },
    dodawanieKraju() {
      this.nowyKraj.nazwa_kraju = this.nazwaNowegoKraju;
      DataAccess.dodawanieKraju(this.nowyKraj).then(() => {
        DataAccess.getKraje().then(data => {
          this.Kraje = data;
        });
      });

      this.nazwaNowegoKraju = "";
      this.komunikatEdycjaKraju = "komunikatKrajDodany";
    }
  }
};
</script>


<style scoped>
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

