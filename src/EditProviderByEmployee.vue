<template>
  <div id="app">
    <MenuForEmployee/>

    <form v-if="provider.id_provider > 0" class="container">
      <fieldset>
        <legend>Edytowanie dostawców</legend>
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

        <input type="button" @click="edit" value="Edytuj">
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
  mounted() {
    DataAccess.getProviderById(this.$route.params.id).then(data => {
      this.provider = data;
    });
  },
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
    edit() {
      DataAccess.updateProvider(this.provider)
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
