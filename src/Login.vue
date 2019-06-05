<template>
  <div>
    <MenuForEmployee/>
    <div class="container">
      <form>
        <label for="login">Login:</label>
        <input id="login" type="text" v-model="user.username">
        <br>
        <label for="login">Hasło:</label>
        <input id="password" type="password" v-model="user.password">
        <br>
        <input type="button" @click="login" value="Zaloguj"/>
      </form>
    </div>
    <div v-if="comunicats.length > 0" class="container">
      <p
        v-for="(Comunicat,index) in comunicats"
        v-bind:key="'EditTeaByEmployee'+ index + Comunicat"
      >{{Comunicat}}</p>
    </div>
  </div>
</template>

<script>
import DataAccess from "@/components/DataAccess.js";
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import { error } from 'util';
export default {
  name: "Logowanie",
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      user: {
        username: "",
        password: ""
      },
      comunicats: []
    };
  },
  methods: {
      login(){
        DataAccess.login(this.user).then(data => {
                if (data != null) {
                    this.$store.dispatch('setUser',this.user);
                    this.$store.dispatch('setRole',data);
                    this.$router.go();
                }
        }).catch(error => {
          this.comunicats = [];
            this.comunicats.push( "Niepoprawne dane logowania!" );
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

