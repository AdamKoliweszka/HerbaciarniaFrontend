<template>
  <div id="app">
    <MenuPracownik />
    <EdytowanieKrajow />
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import EdytowanieKrajow from "@/components/EdytowanieKrajow.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik,
    EdytowanieKrajow
  },
  data: function() {
    return {
    };
  }
};
</script>

<style>
</style>