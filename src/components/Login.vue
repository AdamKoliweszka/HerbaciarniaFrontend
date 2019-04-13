<template>
  <div>
    <div class="GlownyKontentEdytowanieDanych">
      <div>
        Login:
        <input type:text v-model="user.login">
      </div>

      <div>
        Hasło:
        <input type="password" v-model="user.password">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logowanie",

  data: function() {
    return {
      uzytkownik: {
        id_user: 0,
        login: "",
        password: ""
      }
    };
  },
  methods: {}
};
</script>


<style>
.GlownyKontentLogowanie {
  padding: 5px;
}
</style>

