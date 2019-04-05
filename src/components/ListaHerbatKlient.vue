<template>
  <div id="KolekcjaHerbat">
      <div v-for="Herbata in herbaty" v-bind:key="'herbata' + Herbata.nazwa_herbaty">
        <div></div>
        <div>
          <h1>{{Herbata.nazwa_herbaty}}</h1>
          Opis: {{Herbata.opis}}
          <br>
          Kraj pochodzenia: {{Herbata.krajPochodzenia.nazwa_kraju}}
          Gatunek: {{Herbata.gatunekHerbaty.nazwa_gatunku}}
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
    herbaty: null
  }
}
</script>


<style scoped>

</style>
