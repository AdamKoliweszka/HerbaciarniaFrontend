<template>
  <div id="app">
    <div class="KontenerMenu">
      <input v-for="item in listaItemow" :key="item.nazwa" type="button" @click="$emit('click',item)" :value="item.nazwa" class="itemMenu">
      
    </div>
    <div class="PasekOdstepuMenu"></div>
  </div>
</template>

<script>
export default {
  name: "MenuPracownik",
  props: {
    listaItemow: Array
  },
  data: function() {
    return {
      wybor: 1
    };
  },
  methods: {
    click(wybor) {
      this.wybor = wybor;
    }
  }
};
</script>


<style>
.itemMenu {
  background-color: green;
  text-align: center;
  border-style: none solid none solid;
  border-color: darkgreen;
  color: white;
  display: block;
}
.itemMenu:hover {
  padding-top: 40px;
}

.KontenerMenu {
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.PasekOdstepuMenu {
  width: 100%;
  height: 40px;
}
</style>
