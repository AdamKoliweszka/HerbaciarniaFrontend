<template>
  <div id="app">
    <MenuPracownik />
    {{$route.params.id}}
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
export default {
  name: "EdytowanieHerbatyPracownik",
  components: {
    MenuPracownik
  },
};
</script>


<style>

</style>
