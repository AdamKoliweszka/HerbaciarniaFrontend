<template>
  <div>
    <MenuForEmployee/>
    <div class="alert alert-success container" role="alert">Jesteś zalogowany!</div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "UserIsLogin",
  components: {
    MenuForEmployee
  }
};
</script>


<style scoped>
.container {
  width: 80%;
  margin-top: 20px;
  text-align: center;
}
</style>

