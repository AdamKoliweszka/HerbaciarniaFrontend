<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
      <form @submit="login">
        <label for="login">Login:</label>
        <input id="login" type="text" v-model="user.username">
        <br>
        <label for="login">Hasło:</label>
        <input id="password" type="password" v-model="user.password">
        <br>
        <input type="submit" value="Zaloguj"/>
      </form>
    </div>
    {{comunicat}}
  </div>
</template>

<script>
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
        this.$store.dispatch('login',this.user).then( () => {
            this.$router.go();
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

