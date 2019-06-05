<template>
  <div>
    <MenuForEmployee/>
    <input type="button" value="Usuń konto" @click="deleteAccount"/>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "Logout",
  components: {
    MenuForEmployee
  },
  methods: {
    deleteAccount(){
      DataAccess.deleteAccount().then(response => {
        console.log("Usunięto");
        this.$store.commit('logout');
        this.$router.go();
      }).catch(error => {
        
      });
    }
  }
};
</script>


<style scoped>

</style>

