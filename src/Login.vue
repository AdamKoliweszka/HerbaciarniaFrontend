<template>
  <div>
    <div class="Content">
      <div>
        Login:
        <input type:text v-model="user.login">
      </div>

      <div>
        Hasło:
        <input type="password" v-model="user.password">
      </div>
      {{count}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Logowanie",

  data: function() {
    return {
      user: {
        id_user: 0,
        login: "",
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

  }
};
</script>


<style scoped>
.Content {
  padding: 5px;
}
</style>

