<template>
  <div>
    <MenuForEmployee/>
    <div id="KolekcjaHerbat" v-if="purchases.length > 0">
      <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.tea.name">
        <h1>{{Purchase.tea.name}}</h1>
        Opis: {{Purchase.tea.description}}
        <br>
        Kraj pochodzenia: {{Purchase.tea.country_of_origin.name}}
        Gatunek: {{Purchase.tea.tea_species.name}}
        <br>
        Cena: {{Purchase.tea.price_of_selling}}
        Ilosc: {{Purchase.tea.available_quantity}}
        <input
          type="number"
          min="1"
          :max="Purchase.tea.available_quantity"
          v-model="Purchase.amount"
          onkeydown="return false"
        >
        <input type="button" value="Kup" @click="buyOne(Purchase)">
        <input type="button" value="Usuń" @click="deleteOne(Purchase)">
      </div>
      <input type="button" value="Kup wszystkie" @click="buyAll()">
      <input type="button" value="Usuń wszystkie" @click="clearAll()">
    </div>
      <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'CountriesByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "ShoppingCartByCustomer",
  components: {
    MenuForEmployee
  },
  data(){
    return{
      comunicats: []
    }
  },
  computed: {
    purchases() {
      return this.$store.getters.purchases;
    }
  },
  methods: {
    buyOne(purchase) {
      DataAccess.addOnePurchase(purchase).then( () =>{
        this.$store.dispatch("deletePurchase",purchase);
        this.comunicats = [];
        this.comunicats.push("Zakup powiódł się");
      }).catch(error => {
        this.comunicats = [];
        this.comunicats.push("Zakup nie powiódł się");
      });
    },
    deleteOne(purchase) {
      this.$store.commit("deletePurchase", purchase);
    },
    clearAll() {
      this.$store.commit("clearPurchases");
    },
    buyAll() {
      DataAccess.addAllPurchases().then( () =>{
        this.$store.dispatch("clearPurchases");
        this.comunicats = [];
        this.comunicats.push("Zakup powiódł się");
      }).catch(error => {
        this.comunicats = [];
        this.comunicats.push("Zakup nie powiódł się");
      });
    }
  }
};
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
