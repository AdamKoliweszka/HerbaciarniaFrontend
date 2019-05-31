<template>
  <div>
    <div id="KolekcjaHerbat">
      <div v-for="Tea in tea" v-bind:key="'Tea' + Tea.name">
        <div></div>
        <div>
          <h1>{{Tea.name}}</h1>
          Opis: {{Tea.description}}
          <div class="container">
            <div class="containerElement">Kraj pochodzenia: {{Tea.country_of_origin.name}}</div>
            <div class="containerElement">Gatunek: {{Tea.tea_species.name}}</div>
          </div>
          <div class="container">
            <div class="containerElement">Cena: {{Tea.price_of_selling}}</div>
            <div class="containerElement">Ilosc: {{Tea.available_quantity}}</div>
          </div>
          <router-link class="itemMenu" :to="{ path:'/herbaty/'+Tea.id_tea }">Edytuj</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaHerbatKlient",
  props: {
    tea: null
  },
  computed: {
    roleOfUser() {
      return this.$store.getters.roleOfUser;
    }
  }
};
</script>


<style scoped>
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
}
.container {
  display: flex;
}
.containerElement {
  width: 50%;
}
</style>
