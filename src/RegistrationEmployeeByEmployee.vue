<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
    <form class="container">
        <label for="login">Login:</label>
        <input id="login" type="text" v-model="employee.user.username">
        <label for="password">Hasło:</label>
        <input type="password" v-model="employee.user.password">
        <label for="name">Imie:</label>
        <input id="name" type="text" v-model="employee.name">
        <label for="surname">Nazwisko:</label>
        <input id="surname" type="text" v-model="employee.surname">
        <input type="button" value="Rejestruj" @click="register"/>
      </form>
    </div>
    <div v-if="comunicats.length > 0" class="container">
      <p v-for="(Comunicat,index) in comunicats" v-bind:key="'RegistrationByEmployee'+ index + Comunicat">
        {{Comunicat}}
      </p>
      </div>
    </div>
 
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "RegistrationByemployee",
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      employee: {
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
      DataAccess.addEmployee(this.employee)
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
      this.employee = {
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

