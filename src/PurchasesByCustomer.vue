<template>
  <div id="app">
    <MenuForEmployee/>
    <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.id_purchase">
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
</style>