<template>
  <div id="app">
    <MenuForEmployee/>
    <div>
      <FilteringByUnregister
        :countries="countries"
        :species="species"
        @click="search"
        class="LeftBar"
      />
      <ListTeaByUnregister :tea="tea" class="RightBar"/>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
import FilteringByUnregister from "@/components/FilteringByUnregister.vue";
import ListTeaByUnregister from "@/components/ListTeaByUnregister.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuForEmployee,
    FilteringByUnregister,
    ListTeaByUnregister
  },
  methods: {
    search(argument) {
      DataAccess.getTeaFiltred(argument).then(data => {
        this.tea = data;
      });
    }
  },
  data: function() {
    return {
      tea: [],
      species: [],
      countries: []
    };
  },
  mounted() {
    
      DataAccess.getSpecies().then(data => {
        this.species = data;
      });
      
      DataAccess.getTea().then(data => {
        this.tea = data;
      });
      
      DataAccess.getCountries().then(data => {
        this.countries = data;
      });
    
  }
}
</script>

<style scoped>
.LeftBar {
  height: 100%;
  width: 25%;
  padding: 5px;
  float: left;
}
.RightBar {
  height: 100%;
  width: 70%;
  float: left;
  padding: 5px;
}
</style>