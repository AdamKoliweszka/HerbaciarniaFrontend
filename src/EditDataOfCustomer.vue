<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
      <p>Edytuj dane personalne</p>
      <div>
        Imie:
        <input type:text v-model="customer.name">
      </div>

      <div>
        Nazwisko:
        <input type:text v-model="customer.surname">
      </div>
      <div>
        Miasto:
        <input type:text v-model="customer.city">
      </div>
      <div>
        Ulica:
        <input type:text v-model="customer.street">
      </div>
      <div>
        <input type="button" value="Edytuj dane" @click="changeData">
      </div>
    </div>
    <div class="Content">
      <p>Zmiana hasła</p>
      <div>
        Stare hasło:
        <input type="password" v-model="oldPassword">
      </div>
      <div>
        Nowe hasło:
        <input type="password" v-model="newPassword">
      </div>
      <div>
        <input type="button" value="Edytuj hasło" @click="changePassword">
      </div>
      
    </div>
    <p
        v-for="(Comunicat,index) in comunicats"
        v-bind:key="'EditDataByEmployee'+ index + Comunicat"
      >{{Comunicat}}</p>
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
          this.$store.dispatch('changePassword',this.newPassword);
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
.Content {
  padding: 5px;
}
.Content p {
  display: block;
  border-style: none none solid none;
  border-bottom-color: darkgreen;
  color: darkgreen;
}
</style>

