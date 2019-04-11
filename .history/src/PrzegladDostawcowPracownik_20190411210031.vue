<template>
  <div id="app">
    <MenuPracownik />
    <div v-for="Provider in providers" v-bind:key="'Provider' + Provider.id_provider">
        <div>
        {{Provider.name}} {{Provider.surname}}
        </div>
        <div>
          Adres:<br>
          {{Provider.street}} {{Provider.city}}
        </div>
        <div>
          Konto bankowe: {{Dostawca.numerKonta}}
        </div>
      <div>
        <router-link :to="{ path:'pracownik/dostawcy/'+Dostawca.id_dostawcy }">Edytuj</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuPracownik from "@/components/MenuPracownik.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "PanelPracownika",
  components: {
    MenuPracownik
  },
  methods: {
    
  },
  data: function() {
    return {
      dostawcy: []
    };
  },
  mounted() {
    DataAccess.getDostawcy().then(data => {this.dostawcy = data});
  },
};
</script>

<style scoped>
.LewyPasekWyszukiwanieHerbat {
  height: 100%;
  width: 25%;
  padding: 5px;
  float: left;
}
.PrawyPasekWyszukiwanieHerbat{
  height: 100%;
  width: 70%;
  float: left;
  padding: 5px;
}
</style>