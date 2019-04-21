<template>
  <div id="app">
    <MenuForEmployee/>
    <div v-for="Purchase in purchases" v-bind:key="'Purchase' + Purchase.id_purchase">
      <div>Numer zamówienia: {{Purchase.id_purchase}}</div>
      <div>
        Kupujący:
        {{Purchase.customer.user.username}}
        <br>
        Dane Osobowe:
        {{Purchase.customer.name}} {{Purchase.customer.surname}}
        <br>
        Adres: {{Purchase.customer.street}} {{Purchase.customer.city}}
      </div>
      <div>
        <select v-model="Purchase.status">
          <option v-for="Status in statuses" v-bind:key="'Status' + Status.id_status" :value="Status">{{Status.name}}</option>
        </select>
        <input type="button" value="Zaaktualizuj status" @click="updateStatus(Purchase)"/>
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
      console.log(Purchase.status);
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
      
    });
    DataAccess.getStatuses().then(data => {
      this.statuses = data;
    });
  }
};
</script>

<style scoped>
</style>