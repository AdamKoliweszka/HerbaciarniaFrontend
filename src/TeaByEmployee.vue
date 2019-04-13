<template>
  <div id="app">
    <MenuForEmployee />
    <div>
      <FilteringByEmployee
        :countries="countries"
        :species="species"
        @click="search"
        class="LeftBar"
      />
      <ListTeaByEmployee :tea="tea" class="RightBar"/>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
import FilteringByEmployee from "@/components/FilteringByEmployee.vue";
import ListTeaByEmployee from "@/components/ListTeaByEmployee.vue";
export default {
  name: "PanelPracownika",
  components: {
    MenuForEmployee,
    FilteringByEmployee,
    ListTeaByEmployee
  },
  methods: {
    search(argument) {
      DataAccess.getAllTeaFiltred(argument).then(data => {this.tea = data});
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
    DataAccess.getSpecies().then(data => {this.species = data;});
    DataAccess.getAllTea().then(data => {this.tea = data;});
    DataAccess.getCountries().then(data => {this.countries = data;});
  },
};
</script>

<style scoped>
.LeftBar {
  height: 100%;
  width: 25%;
  padding: 5px;
  float: left;
}
.RightBar{
  height: 100%;
  width: 70%;
  float: left;
  padding: 5px;
}
</style>