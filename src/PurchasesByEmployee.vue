<template>
  <div id="app">
    <MenuForEmployee/>
    <div
      v-for="Purchase in purchases"
      v-bind:key="'Purchase' + Purchase.id_purchase"
      class="container"
    >
      <div>Numer zamówienia: {{Purchase.id_purchase}}</div>
      <div>
        Kupujący:
        {{Purchase.customer.user.username}}
        <br>
        Dane Osobowe:
        {{Purchase.customer.name}} {{Purchase.customer.surname}}
        <br>
        Adres: {{Purchase.customer.street}} {{Purchase.customer.city}}
        <br>
        Data zamówienia: {{Purchase.date_of_purchases}}
      </div>
      <div>
        <select v-model="Purchase.status">
          <option
            v-for="Status in statuses"
            v-bind:key="'Status' + Status.id_status"
            :value="Status"
          >{{Status.name}}</option>
        </select>
        <input type="button" value="Zaaktualizuj status" @click="updateStatus(Purchase)">
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
  name: "PurchasesByEmployee",
  components: {
    MenuForEmployee
  },
  methods: {
    updateStatus(Purchase) {
      DataAccess.updatePurchase(Purchase)
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
      purchases: [],
      statuses: [],
      comunicats: []
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