<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
      <div>
        Login:
        <input type:text v-model="customer.user.username">
      </div>

      <div>
        Hasło:
        <input type="password" v-model="customer.user.password">
      </div>

      <div>
        Imie:
        <input type:text v-model="customer.name">
      </div>

      <div>
        Nazwisko:
        <input type:text v-model="customer.surname">
      </div>

      <div>
        Ulica:
        <input type:text v-model="customer.street">
      </div>

      <div>
        Miejscowość:
        <input type:text v-model="customer.city">
      </div>

      <div>
        <input type="button" @click="register" value="Rejestruj">
      </div>
      <p v-for="(Comunicat,index) in comunicats" v-bind:key="'RegistrationByCustomer'+ index + Comunicat">
        {{Comunicat}}
      </p>
    </div>
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
.Content {
  padding: 5px;
}
</style>

