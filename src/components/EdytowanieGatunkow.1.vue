<template>
  <div class="EdycjaContainer">
    <div class="EdycjaContainerItem">
      <p>Edytowanie gatunku:</p>
      <select v-model="selectedGatunek" @change="aktualizacjaNazwyGatunku()" class="combo_EdytowanieGatunkow">
        <option
          v-for="Gatunek in gatunki"
          :value="Gatunek"
          v-bind:key="'gatunek' + Gatunek.nazwa_gatunku"
        >{{Gatunek.nazwa_gatunku}}</option>
      </select>
      <input type="button" class="button_EdytowanieGatunkow" value="Usuń" @click="usunGatunek">
      <br>
      Nazwa gatunku:
      <input type="text" v-model="nowaNazwaGatunku">
      <input type="button" class="button_EdytowanieGatunkow" value="Zmień nazwe" @click="aktualizacjaGatunku">
    </div>
    <div class="EdycjaContainerItem">
      <p>Dodawanie gatunku:</p>
      Nazwa gatunku:
      <input type="text" v-model="nazwaNowegoGatunku">
      <input type="button" class="button_EdytowanieGatunkow" value="Dodaj" @click="dodawanieGatunku">
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
</template>

<script>
import axios from "axios";
export default {
  name: "MenuPracownik",
  mounted() {
    axios
      .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
      .then(response => {
        this.gatunki = response.data;
      });
  },
  data: function() {
    return {
      gatunki: [],
      selectedGatunek: null,
      nowaNazwaGatunku: "",
      nazwaNowegoGatunku: "",
      komunikatEdycjaGatunku: "",
      nowyGatunek: {
        id_gatunku: 0,
        nazwa_gatunku: ""
      },
      adresIPPort: "10.211.55.5:8086"
    };
  },
  methods: {
    aktualizacjaNazwyGatunku() {
      this.nowaNazwaGatunku = this.selectedGatunek.nazwa_gatunku;
      this.komunikatEdycjaGatunku = "komunikatBleduNiewidoczny";
    },
    async usunGatunek() {
      if (this.selectedGatunek == null) {
        this.komunikatEdycjaGatunku = "komunikatGatunekPusty";
      } else if (this.selectedGatunek.id_gatunku > 1) {
        var link = "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty/";
        link += this.selectedGatunek.id_gatunku;

        await axios.delete(link);
        await axios
          .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
          .then(response => {
            this.gatunki = response.data;
          });
        this.nowaNazwaGatunku = "";
        this.komunikatEdycjaGatunku = "komunikatGatunekUsuniety";
      } else {
        this.komunikatEdycjaGatunku = "komunikatGatunekNiezdefiniowany";
      }
    },
    async aktualizacjaGatunku() {
      if (this.selectedGatunek == null) {
        this.komunikatEdycjaGatunku = "komunikatGatunekPusty";
      } else if (this.selectedGatunek.id_gatunku > 1) {
        this.selectedGatunek.nazwa_gatunku = this.nowaNazwaGatunku;
        await axios.put(
          "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty",
          this.selectedGatunek
        );
        await axios
          .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
          .then(response => {
            this.gatunki = response.data;
          });
        this.nowaNazwaGatunku = "";
        this.komunikatEdycjaGatunku = "komunikatGatunekZmieniony";
      } else {
        this.komunikatEdycjaGatunku = "komunikatGatunekNiezdefiniowany";
      }
    },
    async dodawanieGatunku() {
      this.nowyGatunek.nazwa_gatunku = this.nazwaNowegoGatunku;
      await axios.post(
        "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty",
        this.nowyGatunek
      );
      await axios
        .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
        .then(response => {
          this.gatunki = response.data;
        });
      this.nazwaNowegoGatunku = "";
      this.komunikatEdycjaGatunku = "komunikatGatunekDodany";
    }
  }
};
</script>


<style style scoped src="@/assets/styles/style.css">

</style>
