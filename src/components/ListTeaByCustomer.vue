<template>
  <div>
  <div id="KolekcjaHerbat">
      <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.tea.name">
        <div></div>
        <div>
          <h1>{{Purchase.tea.name}}</h1>
          Opis: {{Purchase.tea.description}}
          <br>
          Kraj pochodzenia: {{Purchase.tea.country_of_origin.name}}
          Gatunek: {{Purchase.tea.tea_species.name}}
          <br>
          Cena: {{Purchase.tea.price_of_selling}}
          Ilosc: {{Purchase.tea.available_quantity}}
          <input type="number" min="1" :max="Purchase.tea.available_quantity" v-model="Purchase.amount" onkeydown="return false"/>
          <input type="button" value="Kup" @click="addTeaToBuy(Purchase)"/>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ListTeaByCustomer',
  props: {
    purchases: null
  },
  methods: {
    addTeaToBuy(purchase)
    {
        this.$store.commit('addPurchase',purchase);
    }
  }
}
</script>


<style scoped>
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
}
</style>
