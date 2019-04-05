<template>
  <div id="app">
    <router-view> </router-view>
    <router-link to="/pracownik">Go to pracownik</router-link>
  </div>
</template>

<script>

export default {
  name: "app",
  data: function() {
    return {
      
    };
  }
};
</script>

<style>
</style>
