<template>
  <div>
    <MenuForEmployee/>
    <div class="card content">
      <div class="card-header bg-primary">Logowanie</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="login">Login:</label>
            <input id="login" type="text" v-model="user.username" class="form-control">
          </div>
          <div class="form-group">
            <label for="login">Hasło:</label>
            <input id="password" type="password" v-model="user.password" class="form-control">
          </div>
          <button class="btn btn-primary" @click="login">Zaloguj</button>
        </form>
      </div>
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
import { error } from "util";
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
    login() {
      DataAccess.login(this.user)
        .then(data => {
          if (data != null) {
            this.$store.dispatch("setUser", this.user);
            this.$store.dispatch("setRole", data);
            this.$router.go();
          }
        })
        .catch(error => {
          this.comunicats = [];
          this.comunicats.push("Niepoprawne dane logowania!");
        });
    }
  }
};
</script>


<style scoped>
.content{
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>

