<template>
  <div id="app">
    <MenuForEmployee />
    <div v-for="Provider in providers" v-bind:key="'Provider' + Provider.id_provider" class="container">
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
input {
  width: 100%;
}
select {
  width: 100%;
}
textarea {
  width: 100%;
}
input[type="button"] {
  color: white;
  background-color: green;
  font-size: 16px;
}
.container {
  margin-top: 50px;
  background-color: rgba(119, 204, 109, 0.7);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid green;
  box-shadow: 0px 0px 10px green;
  padding: 10px;
}
fieldset {
  border: none;
}
legend {
  text-align: center;
}
input[type="text"],
input[type="number"],
textarea {
  border: none;
  border-bottom: solid 2px green;
  background-color: transparent;
}
*:focus {
  outline: none;
}
input[type="text"]:focus + label {
  transform: translate3d(0, -100%, 0);
}
label {
  position: relative;
}
</style>