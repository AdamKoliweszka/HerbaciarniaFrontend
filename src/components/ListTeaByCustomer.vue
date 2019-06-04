<template>
  <div>
  <div id="KolekcjaHerbat">
      <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.tea.name" class="mainContainer">
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
.mainContainer{
  background-color: rgba(119, 204, 109, 0.7);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid green;
  box-shadow: 0px 0px 10px green;
  margin: 10px;
}
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
}
.itemMenu:hover{
  color:black;
}
.container {
  display: flex;
  color: white;
}
.containerElement {
  width: 50%;
}
h1{
  text-align: center;
}
input[type="button"]
{
  color: white;
  width: 100%;
  background-color: green;
}
</style>
