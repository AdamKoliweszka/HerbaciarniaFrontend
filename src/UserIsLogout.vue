<template>
  <div>
    <MenuForEmployee/>
    Nie jesteś zalogowany!
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "UserIsLogin",
  components: {
    MenuForEmployee
  },
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
      let user =  this.$store.getters.user;
      if(user != null){
        return this.$store.state.user.username;
      }else{
        return "";
      }
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

