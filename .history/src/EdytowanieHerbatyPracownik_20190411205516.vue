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
        <select v-model="tea.country_of_origin" class="combo_EdytowanieKrajow">
          <option
            v-for="CountryOfOrigin in countries"
            :value="CountryOfOrigin"
            v-bind:key="'CountryOfOrigin' + CountryOfOrigin.name"
          >{{CountryOfOrigin.name}}</option>
        </select>
      </div>
      <div>
        <input type="button" @click="edit" value="Edytuj">
      </div>
    </div>

    <div v-if="species == null || countries == null">
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
    DataAccess.getAllTeeById(this.$route.params.id).then(data => {
      this.tea = data;
    });
    DataAccess.getSpecies().then(data => {
      this.species = data;
    });
    DataAccess.getCountries().then(data => {
      this.countries = data;
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
