<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
    <form @submit="register">
        <label for="login">Login:</label>
        <input id="login" type="text" v-model="customer.user.username">
        <label for="password">Hasło:</label>
        <input type="password" v-model="customer.user.password">
        <label for="name">Imie:</label>
        <input id="name" type="text" v-model="customer.name">
        <label for="surname">Nazwisko:</label>
        <input id="surname" type="text" v-model="customer.surname">
        <label for="street">Ulica:</label>
        <input id="street" type="text" v-model="customer.street">
        <label for="city">Miejscowość:</label>
        <input id="city" type="text" v-model="customer.city">
        <input type="submit" value="Rejestruj"/>
      </form>
    </div>
      <p v-for="(Comunicat,index) in comunicats" v-bind:key="'RegistrationByCustomer'+ index + Comunicat">
        {{Comunicat}}
      </p>
    </div>
 
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "RegistrationByCustomer",
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      customer: {
        name: "",
        surname: "",
        city: "",
        street: "",
        date_of_delete_accont: null,
        user: {
          username: "",
          password: "",
          enabled: true
        }
      },
      comunicats: []
    };
  },
  methods: {
    register() {
      DataAccess.addCustomer(this.customer)
        .then(response => {
          this.comunicats = [];
          this.registerComplete();
          this.comunicats.push(response.data);
        })
        .catch(error => {
          this.comunicats = [];
          for (var propName in error.response.data) {
            this.comunicats.push(error.response.data[propName]);
          }
        });
    },
    registerComplete() {
      this.customer = {
        name: "",
        surname: "",
        city: "",
        street: "",
        user: {
          username: "",
          password: "",
          enabled: true
        }
      };
    }
  }
};
</script>


<style scoped>
input{
  width: 100%;
}
.Content {
  width: 70%;
  padding: 5px;
}
</style>

