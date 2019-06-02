<template>
  <div id="app">
    <MenuForEmployee/>
    <div v-for="Delivery in deliveries" v-bind:key="'Delivery' + Delivery.id_delivery">
      <div>Numer dostawy: {{Delivery.id_delivery}}</div>
      <div>
        Dostawca:
        {{Delivery.provider.name}} {{Delivery.provider.surname}}
        <br>
        Numer konta: {{Delivery.provider.account_number}}
        <br>
        Herbata: {{Delivery.tea.name}}
        <br>
        Ilość zamówionej herbaty: {{Delivery.amount}}
        <br>
        Data zamówienia dostawy: {{Delivery.date_of_delivery}}
      </div>
      <div>
        <select v-model="Delivery.status">
          <option v-for="Status in statuses" v-bind:key="'Status' + Status.id_status" :value="Status">{{Status.name}}</option>
        </select>
        <input type="button" value="Zaaktualizuj status" @click="updateStatus(Delivery)"/>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "DeliveriesByEmployee",
  components: {
    MenuForEmployee
  },
  methods: {
    updateStatus(Delivery)
    {
      DataAccess.updateDelivery(Delivery);
    }
  },
  data: function() {
    return {
      deliveries: [],
      statuses: []
    };
  },
  mounted() {
    DataAccess.getDeliveries().then(data => {
      this.deliveries = data;
    });
    DataAccess.getStatuses().then(data => {
      this.statuses = data;
    });
  }
};
</script>

<style scoped>

</style>