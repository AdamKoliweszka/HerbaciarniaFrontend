<template>
  <div>
    <MenuForEmployee/>
    <div id="KolekcjaHerbat" v-if="purchases.length > 0">
      <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.tea.name" class="container">
        <h1>{{Purchase.tea.name}}</h1>
        Opis: {{Purchase.tea.description}}
        <br>
        Kraj pochodzenia: {{Purchase.tea.country_of_origin.name}}
        Gatunek: {{Purchase.tea.tea_species.name}}
        <br>
        Cena: {{Purchase.tea.price_of_selling}}
        Dostępna ilosc: {{Purchase.tea.available_quantity}}
        <br>
        <label for="amountOfPurchase">Zamawiana ilość:</label> 
        <input
          type="number"
          id="amountOfPurchase"
          min="1"
          :max="Purchase.tea.available_quantity"
          v-model="Purchase.amount"
          onkeydown="return false"
        >
        <input type="button" value="Kup" @click="buyOne(Purchase)">
        <input type="button" value="Usuń" @click="deleteOne(Purchase)">
      </div>
      <div class="marginBox">
      <input type="button" value="Kup wszystkie" @click="buyAll()">
      <input type="button" value="Usuń wszystkie" @click="clearAll()">
      </div>
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
input {
  width: 100%;
}
select {
  width: 100%;
}
textarea {
  width: 100%;
}
input[type="button"] {
  color: white;
  background-color: green;
  font-size: 16px;
}
.container {
  margin-top: 50px;
  background-color: rgba(119, 204, 109, 0.7);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid green;
  box-shadow: 0px 0px 10px green;
  padding: 10px;
}
fieldset {
  border: none;
}
legend {
  text-align: center;
}
input[type="text"],
input[type="number"],
input[type="password"],
textarea {
  border: none;
  border-bottom: solid 2px green;
  background-color: transparent;
}
*:focus {
  outline: none;
}
input[type="text"]:focus + label {
  transform: translate3d(0, -100%, 0);
}
label {
  position: relative;
}
.marginBox{
  margin-top: 10px;
}
</style>
