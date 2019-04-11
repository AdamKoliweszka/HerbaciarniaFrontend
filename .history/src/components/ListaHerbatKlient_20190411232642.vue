<template>
  <div id="KolekcjaHerbat">
      <div v-for="Tea in tea" v-bind:key="'Tea' + Tea.name">
        <div></div>
        <div>
          <h1>{{Tea.name}}</h1>
          Opis: {{Tea.opis}}
          <br>
          Kraj pochodzenia: {{Tea.country_of_origin.name}}
          Gatunek: {{Tea.tea_species.name}}
          <br>
          Cena: {{Tea.price_of_selling}}
          Ilosc: {{Tea.avaible_quantity}}
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
