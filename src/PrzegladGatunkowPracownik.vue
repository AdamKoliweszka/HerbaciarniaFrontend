<template>
  <div id="app">
    <MenuPracownik />
    <EdytowanieGatunkow />
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import EdytowanieGatunkow from "@/components/EdytowanieGatunkow.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik,
    EdytowanieGatunkow
  },
  data: function() {
    return {
      
    };
  }
};
</script>

<style>
</style>