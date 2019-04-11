<template>
  <div id="KolekcjaHerbat">
      <div v-for="Tea in tea" v-bind:key="'Tea' + Tea.name">
        <div></div>
        <div>
          <h1>{{Tea.name}}</h1>
          Opis: {{Tea.opis}}
          <br>
          Kraj pochodzenia: {{Tea.krajPochodzenia.name}}
          Gatunek: {{Tea.teaSpecies.name}}
          <br>
          Cena: {{Tea.priceOfSelling}}
          Ilosc: {{Tea.avaibleQuantity}}
          <input
            type="button"
            value="Kup"
          >
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ListaHerbatKlient',
  props: {
    tea: null
  }
}
</script>


<style scoped>

</style>
