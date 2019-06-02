<template>
  <div>
    <MenuForEmployee/>
    <form class="container">
      <fieldset>
        <legend>Edytuj dane personalne</legend>
        <label for="name">Imie:</label>
        <input id="name" type:text v-model="employee.name">

        <label for="surname">Nazwisko:</label>
        <input id="surname" type:text v-model="employee.surname">

        <input type="button" value="Edytuj dane" @click="changeData">
      </fieldset>

      <fieldset>
        <legend>Zmiana hasła</legend>
        <label for="oldPassword">Stare hasło:</label>
        <input id="oldPassword" type="password" v-model="oldPassword">
        <label for="newPassword">Nowe hasło:</label>
        <input id="newPassword" type="password" v-model="newPassword">
        <input type="button" value="Edytuj hasło" @click="changePassword">
      </fieldset>
    </form>
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
    DataAccess.getDataOfEmployee().then(data => {
      this.employee = data;
    });
  },
  data: function() {
    return {
      employee: {
        id_employee: 0,
        name: "",
        surname: "",
        date_of_employing: "",
        date_of_dismis: ""
      },
      oldPassword: "",
      newPassword: "",
      comunicats: []
    };
  },
  methods: {
    changeData() {
      DataAccess.updateEmployee(this.employee)
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

