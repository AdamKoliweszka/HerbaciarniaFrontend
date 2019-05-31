<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
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
    {{comunicat}}
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
      comunicat: ""
    };
  },
  methods: {
      login(){
        DataAccess.login(this.user).then(data => {
                if (data != null) {
                    this.$store.dispatch('setUser',this.user);
                    this.$store.dispatch('setRole',data);
                    this.comunicat = "Poprawnie zalogowano!";
                    this.$router.go();
                }
        }).catch(error => {
            this.comunicat = "Niepoprawne dane logowania!";
        });
      }
  }
};
</script>


<style scoped>
.Content {
  padding: 5px;
}
</style>

