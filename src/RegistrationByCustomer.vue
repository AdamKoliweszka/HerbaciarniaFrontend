<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
    <form class="container">
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
        <input type="button" value="Rejestruj" @click="register"/>
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
input[type="password"],
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

