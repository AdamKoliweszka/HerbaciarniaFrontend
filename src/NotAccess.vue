<template>
  <div>
    <MenuForEmployee/>
    <div class="alert alert-danger container" role="alert">Nie masz dostępu!</div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
export default {
  name: "Logowanie",
  components: {
    MenuForEmployee
  }
};
</script>


<style scoped>
.container{
  width: 80%;
  margin-top: 20px;
  text-align: center;
}
</style>

