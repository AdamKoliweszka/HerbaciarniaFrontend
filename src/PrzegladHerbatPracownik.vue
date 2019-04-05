<template>
  <div id="app">
    <MenuPracownik />
    <WyszukiwanieHerbatPracownik />
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import WyszukiwanieHerbatPracownik from "@/components/WyszukiwanieHerbatPracownik.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik,
    WyszukiwanieHerbatPracownik
  },
  methods: {
    
  },
  data: function() {
    return {
      
    };
  }
};
</script>

<style>
</style>