<template>
  <div id="KolekcjaHerbat">
      <div v-for="Herbata in tea" v-bind:key="'herbata' + Herbata.name">
        <div></div>
        <div>
          <h1>{{Herbata.name}}</h1>
          Opis: {{Herbata.opis}}
          <br>
          Kraj pochodzenia: {{Herbata.krajPochodzenia.name}}
          Gatunek: {{Herbata.gatunektea.name}}
          <br>
          Cena: {{Herbata.cenaSprzedazy}}
          Ilosc: {{Herbata.iloscDostepna}}
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
