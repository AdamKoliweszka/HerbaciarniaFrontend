<template>
  <div id="app">
    <MenuForEmployee/>
    <div>
      <div>
        Imie:
        <input type="text" v-model="provider.name">
      </div>
      <div>
        Nazwisko:
        <input type="text" v-model="provider.surname">
      </div>
      <div>
        Ulica:
        <input type="text" v-model="provider.street">
      </div>
      <div>
        Miasto:
        <input type="text" v-model="provider.city">
      </div>
      <div>
        Numer konta:
        <input type="number" v-model="provider.account_number">
      </div>
      <div>
        <input type="button" @click="add" value="Dodaj">
      </div>
    </div>
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


<style>
</style>
