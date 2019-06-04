<template>
  <div id="app">
    <MenuForEmployee/>
    <form class="container">
      <fieldset>
        <legend>Dodawanie dostawy</legend>
        
        <label for="tea">Herbata:</label>
        <select id="tea" v-model="deliver.tea" class="combo_EdytowanieGatunkow">
          <option
            v-for="Tea in tea"
            :value="Tea"
            v-bind:key="'Tea' + Tea.name"
          >{{Tea.name}}</option>
        </select>

        <label for="amount">Ilość:</label>
        <input id="amount" min="1" type="number" v-model="deliver.amount">

        <label for="providers">Dostwawca:</label>
        <select id="providers" v-model="deliver.provider" class="combo_EdytowanieGatunkow">
          <option
            v-for="Provider in providers"
            :value="Provider"
            v-bind:key="'Provider' + Provider.id_provider"
          >{{Provider.name}} {{Provider.surname}} </option>
        </select>

        
        <input type="button" @click="addDelivery" value="Dodawanie">
      </fieldset>
    </form>
    <div v-if="comunicats.length > 0" class="container">
      <p
        v-for="(Comunicat,index) in comunicats"
        v-bind:key="'AddDeliverByEmployee'+ index + Comunicat"
      >{{Comunicat}}</p>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "DodawanieHerbatyPracownik",
  mounted() {
    DataAccess.getAllTea().then(data => {
      this.tea = data;
    });
    DataAccess.getProviders().then(data => {
      this.providers = data;
    });
  },
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      deliver: {
        id_deliver: 0,
        tea: null,
        provider: null,
        employee: null,
        amount: 1,
        status: null,
        date_of_delivery: null
      },
      tea: null,
      providers: null,
      comunicats: []
    };
  },
  methods: {
    addDelivery() {
      
      DataAccess.addDelivery(this.deliver)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push(response.data);
          this.clear();
        })
        .catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
        
    },
    clear() {
      
      this.deliver = {
        id_deliver: 0,
        tea: null,
        provider: null,
        employee: null,
        amount: 1,
        status: null,
        date_of_delivery: null
      };
      
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
