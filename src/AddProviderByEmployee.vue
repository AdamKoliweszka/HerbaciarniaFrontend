<template>
  <div id="app">
    <MenuForEmployee/>
    <form>
      <fieldset>
        <legend>Dodawanie dostawcy</legend>
        <label for="name">Imie:</label>
        <input id="name" type="text" v-model="provider.name">

        <label for="surname">Nazwisko:</label>
        <input id="surname" type="text" v-model="provider.surname">

        <label for="street">Ulica:</label>
        <input id="street" type="text" v-model="provider.street">

        <label for="city">Miasto:</label>
        <input id="city" type="text" v-model="provider.city">

        <label for="accountNumber">Numer konta:</label>
        <input id="accountNumber" type="number" v-model="provider.account_number">

        <div>
          <input type="button" @click="add" value="Dodaj">
        </div>
      </fieldset>
    </form>
    <p
      v-for="(Comunicat,index) in comunicats"
      v-bind:key="'EditProviderByEmployee'+ index + Comunicat"
    >{{Comunicat}}</p>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EditTeaByEmployee",
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      provider: {
        id_provider: 0,
        name: "",
        surname: "",
        street: "",
        city: "",
        account_number: 0
      },
      comunicats: []
    };
  },
  methods: {
    add() {
      DataAccess.addProvider(this.provider)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push(response.data);
        })
        .catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
    }
  }
};
</script>


<style scoped>
input {
  width: 100%;
}
</style>
