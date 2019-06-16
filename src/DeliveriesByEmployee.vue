<template>
  <div id="app">
    <MenuForEmployee/>
    <div
      v-for="Delivery in deliveries"
      v-bind:key="'Delivery' + Delivery.id_delivery"
      class="container"
    >
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
          <option
            v-for="Status in statuses"
            v-bind:key="'Status' + Status.id_status"
            :value="Status"
          >{{Status.name}}</option>
        </select>
        <input type="button" value="Zaaktualizuj status" @click="updateStatus(Delivery)">
      </div>
    </div>
    <div v-if="comunicats.length > 0" class="container">
      <p
        v-for="(Comunicat,index) in comunicats"
        v-bind:key="'EditDataByEmployee'+ index + Comunicat"
      >{{Comunicat}}</p>
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
    updateStatus(Delivery) {
      DataAccess.updateDelivery(Delivery)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push(response.data);
        })
        .catch(error => {
          this.comunicats = [];
          this.comunicats.push(error.response.data);
        });
    }
  },
  data: function() {
    return {
      deliveries: [],
      statuses: [],
      comunicats: []
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
select{
  background: transparent;
  border: solid 2px green;
}
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