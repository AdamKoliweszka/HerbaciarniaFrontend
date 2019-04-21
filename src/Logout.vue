<template>
  <div>
    <MenuForEmployee/>
    
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "Logout",
  components: {
    MenuForEmployee
  },
  mounted(){
      this.$store.commit('logout');
      this.$router.go()
  }
};
</script>


<style scoped>

</style>

