<template>
  <div id="app">
    <MenuPracownik/>
    <div v-if="tea != null && species != null && countries != null">
      <div>
        Nazwa:
        <input type="text" v-model="tea.name">
      </div>
      <div>
        Opis:
        <textarea v-model="tea.description"/>
      </div>
      <div>
        Cena sprzedaży:
        <input type="number" v-model="tea.price_of_selling">
      </div>
      <div>
        Cena dostawy:
        <input type="number" v-model="tea.price_of_delivery">
      </div>
      <div>
        Gatunek:
        <select v-model="tea.tea_species" class="combo_EdytowanieGatunkow">
          <option
            v-for="TeaSpecies in species"
            :value="TeaSpecies"
            v-bind:key="'species' + TeaSpecies.name"
          >{{TeaSpecies.name}}</option>
        </select>
      </div>
      <div>
        Kraj pochodzenia:
        <select v-model="herbata.krajPochodzenia" class="combo_EdytowanieKrajow">
          <option
            v-for="Kraj in kraje"
            :value="Kraj"
            v-bind:key="'kraj' + Kraj.nazwa_kraju"
          >{{Kraj.nazwa_kraju}}</option>
        </select>
      </div>
      <div>
        <input type="button" @click="edit" value="Edytuj">
      </div>
    </div>

    <div v-if="gatunki == null || kraje == null">
      <p>Brak połączenia z serwerem!</p>
    </div>

    <div v-if="isEdited">
      <p>Herbata została poprawnie edytowana!</p>
    </div>

    <div v-if="isError">
      <p>Operacja się nie powiodła!</p>
    </div>

  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EdytowanieHerbatyPracownik",
  mounted() {
    DataAccess.getWszystkieHerbatyById(this.$route.params.id).then(data => {
      this.herbata = data;
    });
    DataAccess.getGatunki().then(data => {
      this.gatunki = data;
    });
    DataAccess.getKraje().then(data => {
      this.kraje = data;
    });
  },
  components: {
    MenuPracownik
  },
  data: function() {
    return {
      herbata: {
        id_herbaty: 0,
        nazwa_herbaty: "",
        opis: "",
        cenaSprzedazy: "",
        cenaDostawy: "",
        iloscDostepna: 0,
        gatunekHerbaty: null,
        krajPochodzenia: null
      },
      gatunki: null,
      kraje: null,
      isEdited: false,
      isError: false
    };
  },
  methods: {
    edit() {
      if (!this.isEdited) {
        DataAccess.aktualizacjaHerbaty(this.herbata).then(() => {
          this.isEdited = true;
          this.isError = false;
          this.clear();
        }).catch(() => {
            this.isError = true;
        });
      }
    },
    clear() {
      this.herbata = null;
    }
  }
};
</script>


<style>
</style>
