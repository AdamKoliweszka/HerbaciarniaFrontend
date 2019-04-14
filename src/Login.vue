<template>
  <div>
    <div class="Content">
      <div>
        Login:
        <input type:text v-model="user.username">
      </div>

      <div>
        Hasło:
        <input type="password" v-model="user.password">
      </div>
      {{count}}
      <div>
        <input type="button" @click="login" value="Zaloguj"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logowanie",

  data: function() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    count() {
      return this.$store.state.user.username;
    }
  },
  methods: {
      login(){
          this.$store.commit('login',this.user);
      }
  }
};
</script>


<style scoped>
.Content {
  padding: 5px;
}
</style>

