<template>
  <div>
    <MenuForEmployee/>
    <div class="container">
    Nie jesteś zalogowany!
    </div>
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
</style>

