<template>
  <div>
  <div id="KolekcjaHerbat" v-if="roleOfUser === 'PRACOWNIK'">
      <div v-for="Tea in tea" v-bind:key="'Tea' + Tea.name">
        <div></div>
        <div>
          <h1>{{Tea.name}}</h1>
          Opis: {{Tea.description}}
          <br>
          Kraj pochodzenia: {{Tea.country_of_origin.name}}
          Gatunek: {{Tea.tea_species.name}}
          <br>
          Cena: {{Tea.price_of_selling}}
          Ilosc: {{Tea.available_quantity}}
          <router-link class="itemMenu" :to="{ path:'/herbaty/'+Tea.id_tea }">Edytuj</router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ListaHerbatKlient',
  props: {
    tea: null
  },
  computed:{
  roleOfUser() {
      return this.$store.getters.roleOfUser;
    }
  }
}
</script>


<style scoped>
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
}
</style>
