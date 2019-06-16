<template>
  <div>
  <div id="KolekcjaHerbat">
      <div v-for="Tea in tea" v-bind:key="'Tea' + Tea.name" class="mainContainer">
          <div class="flexContainer">
          <div class="leftFlex">
          <img :src="'data:image/jpg;base64,' + Tea.image" class="imgClass"/>
          </div>

          <div class="rightFlex">
          <h1>{{Tea.name}}</h1>
          Opis: {{Tea.description}}
          <br>
          Kraj pochodzenia: {{Tea.country_of_origin.name}}
          Gatunek: {{Tea.tea_species.name}}
          <br>
          Cena sprzedaży: {{Tea.price_of_selling}}
          Cena dostawy: {{Tea.price_of_delivery}}<br>
          Ilosc: {{Tea.available_quantity}}
          </div>
          </div>

          <router-link class="itemMenu" :to="{ path:'/herbaty/'+Tea.id_tea }">Edytuj</router-link>
        
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
.imgClass{
  width: 100%;
}
.rightFlex{
  width: 70%;
  text-align: center;
}
.leftFlex{
  width: 30%;
}
.flexContainer{
  display: flex;
  flex-direction: row;
}
.mainContainer{
  background-color: rgba(119, 204, 109, 0.7);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid green;
  box-shadow: 0px 0px 10px green;
  margin: 10px;
  padding: 10px;
}
.itemMenu {
  background-color: green;
  text-align: center;
  color: white;
  display: block;
  text-decoration: none;
}
.itemMenu:hover{
  color:black;
}
.container {
  display: flex;
}
.containerElement {
  width: 50%;
}
h1{
  text-align: center;
}
</style>
