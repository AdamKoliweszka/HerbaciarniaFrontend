<template>
  <div>
    <div>Cena:</div>

    <div class="CenaFiltracja">
      Od:
      <input type="text" size="5" v-model="argument.priceFor">
      Do:
      <input type="text" size="5" v-model="argument.priceTo">
    </div>

    <div class="ListaFiltracja">
      Gatunki herbaty:
      <div v-for="TeaSpecies in species" v-bind:key="'TeaSpecies' + TeaSpecies.name">
        <input type="checkbox" :value="TeaSpecies" v-model="argument.species">
        <label>{{TeaSpecies.name}}</label>
      </div>
    </div>

    <div class="ListaFiltracja">
      Kraje pochodzenia herbaty:
      <div v-for="CountryOfOrigin in countries" v-bind:key="'CountryOfOrigin' + CountryOfOrigin.name">
        <input type="checkbox" :value="CountryOfOrigin" v-model="argument.countries">
        <label>{{CountryOfOrigin.name}}</label>
      </div>
    </div>

    <div class="ItemFiltracja">
      <button @click="clickEvent" class="SzukajFiltracja">Szukaj</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "FiltracjaKlient",
  props: {
    countries: null,
    species: null
  },
  data: function() {
    return {
      argument: {
        species: [],
        countries: [],
        priceFor: 0,
        priceTo: 10000
      }
    };
  },
  methods: {
    clickEvent() {
      const undoStates = [];
      var argument;

      undoStates.push(JSON.stringify(this.argument));
      if (undoStates.length > 0) {
        argument = JSON.parse(undoStates.pop());
      }

      if (argument.countries.length == 0) {
        argument.countries = this.countries;
      }
      if (argument.species.length == 0) {
        argument.species = this.species;
      }
      this.$emit("click", argument);
    }
  }
};
</script>


<style>

.SzukajFiltracja{
  width:100%;
  background-color: green;
}
.ListaFiltracja{
  padding-top: 5px;
}
.CenaFiltracja{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.ItemFiltracja{
  padding-top: 5px;
}

</style>

