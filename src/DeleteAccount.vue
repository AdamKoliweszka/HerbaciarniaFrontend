<template>
  <div>
    <MenuForEmployee/>
    <div class="container">
      <input type="button" value="Usuń konto" @click="deleteAccount">
    </div>
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
    deleteAccount() {
      DataAccess.deleteAccount()
        .then(response => {
          console.log("Usunięto");
          this.$store.commit("logout");
          this.$router.go();
        })
        .catch(error => {});
    }
  }
};
</script>


<style scoped>
.container {
  width: 100%;
  margin-top: 10px;
}
input {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background-color: green;
  color: white;
  display: block;
}
</style>

