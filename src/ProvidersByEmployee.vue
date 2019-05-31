<template>
  <div id="app">
    <MenuForEmployee />
    <div v-for="Provider in providers" v-bind:key="'Provider' + Provider.id_provider">
        <div>
        {{Provider.name}} {{Provider.surname}}
        </div>
        <div>
          Adres: {{Provider.street}} {{Provider.city}}
        </div>
        <div>
          Konto bankowe: {{Provider.account_number}}
        </div>
      <div>
        <router-link class="button" :to="{ path:'dostawcy/'+Provider.id_provider }">Edytuj</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "ProvidersByEmployee",
  components: {
    MenuForEmployee
  },
  methods: {
  },
  data: function() {
    return {
      providers: []
    };
  },
  mounted() {
    DataAccess.getProviders().then(data => {this.providers = data; });
  },
};
</script>

<style scoped>

.button{
  display: block;
  text-decoration: none;
  color: white;
  background-color: green;
  text-align: center;
}
.button:hover{
  color: black;
}
</style>