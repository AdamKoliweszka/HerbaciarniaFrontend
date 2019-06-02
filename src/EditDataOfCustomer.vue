<template>
  <div>
    <MenuForEmployee/>
    <form class="container">
      <fieldset>
        <legend>Edytuj dane personalne</legend>
        <label for="name">Imie:</label>
        <input id="name" type="text" v-model="customer.name">
        <label for="surname">Nazwisko:</label>
        <input id="surname" type="text" v-model="customer.surname">

        <label for="city">Miasto:</label>
        <input id="city" type="text" v-model="customer.city">

        <label for="street">Ulica:</label>
        <input id="street" type="text" v-model="customer.street">
        
        <input type="button" value="Edytuj dane" @click="changeData">
      </fieldset>
      <fieldset>
        <legend>Zmiana hasła</legend>
        <label for="oldPassword">Stare hasło:</label>
        <input type="password" v-model="oldPassword">
        
        <label for="newPassword">Nowe hasło:</label>
        <input type="password" v-model="newPassword">
        
        <input type="button" value="Edytuj hasło" @click="changePassword">
        
      </fieldset>
    </form>
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
  name: "EditDataOfEmployee",
  components: {
    MenuForEmployee
  },
  mounted() {
    DataAccess.getDataOfCustomer().then(data => {
      this.customer = data;
    });
  },
  data: function() {
    return {
      customer: {
        id_customer: 0,
        name: "",
        surname: ""
      },
      oldPassword: "",
      newPassword: "",
      comunicats: []
    };
  },
  methods: {
    changeData() {
      DataAccess.updateCustomer(this.customer)
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
    },
    changePassword() {
      DataAccess.updatePassword(this.oldPassword, this.newPassword)
        .then(response => {
          this.comunicats = [];
          this.comunicats.push(response.data);
          this.$store.dispatch("changePassword", this.newPassword);
        })
        .catch(error => {
          this.comunicats = [];
          this.comunicats.push("Nie prawidłowe stare hasło!");
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

