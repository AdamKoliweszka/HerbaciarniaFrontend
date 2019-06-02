<template>
  <div id="app">
    <MenuForEmployee/>
    <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.id_purchase" class="container">
      <div>Numer zamówienia: {{Purchase.id_purchase}}</div>
      <div>
        Herbata:
        {{Purchase.tea.name}}
        <br>
        Ilość:
        {{Purchase.amount}}
        <br>
        Adres zamówienia: {{Purchase.customer.street}} {{Purchase.customer.city}}
         <br>
        Opiekun zamówienia: {{Purchase.employee.name}} {{Purchase.employee.surname}}
        <br>
        Status: {{Purchase.status.name}}
        <br>
        Data zamówienia: {{Purchase.date_of_purchases}}
      </div>
      <div>
        
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "PurchasesByEmployee",
  components: {
    MenuForEmployee
  },
  methods: {
    updateStatus(Purchase)
    {
      DataAccess.updatePurchase(Purchase);
    }
  },
  data: function() {
    return {
      purchases: [],
      statuses: []
    };
  },
  mounted() {
    DataAccess.getPurchases().then(data => {
      this.purchases = data;
      console.log(this.purchases)
      
    });
    DataAccess.getStatuses().then(data => {
      this.statuses = data;
    });
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
</style>