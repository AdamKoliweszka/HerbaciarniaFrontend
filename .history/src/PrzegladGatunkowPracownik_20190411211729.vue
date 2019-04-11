<template>
  <div id="app">
    <MenuPracownik/>
    <div class="EdycjaContainer">
      <div class="EdycjaContainerItem">
        <p>Edytowanie gatunku:</p>
        <select
          v-model="selectedGatunek"
          @change="aktualizacjaNazwyGatunku()"
          class="combo_EdytowanieGatunkow"
        >
          <option
            v-for="Gatunek in gatunki"
            :value="Gatunek"
            v-bind:key="'gatunek' + Gatunek.nazwa_gatunku"
          >{{Gatunek.nazwa_gatunku}}</option>
        </select>
        <input type="button" class="button_EdytowanieGatunkow" value="Usuń" @click="usunGatunek">
        <br>Nazwa gatunku:
        <input type="text" v-model="nowaNazwaGatunku">
        <input
          type="button"
          class="button_EdytowanieGatunkow"
          value="Zmień nazwe"
          @click="aktualizacjaGatunku"
        >
      </div>
      <div class="EdycjaContainerItem">
        <p>Dodawanie gatunku:</p>Nazwa gatunku:
        <input type="text" v-model="nazwaNowegoGatunku">
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
    DataAccess.getGatunki().then(data => {
      this.gatunki = data;
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
};
</script>

<style>
</style>