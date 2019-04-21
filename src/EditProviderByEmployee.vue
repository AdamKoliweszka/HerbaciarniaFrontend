<template>
  <div id="app" >
    <MenuForEmployee/>
    <div v-if="provider.id_provider > 0">
      <div>
        Imie:
        <input type="text" v-model="provider.name">
      </div>
      <div>
        Nazwisko:
        <input type="text" v-model="provider.surname">
      </div>
      <div>
        Ulica:
        <input type="text" v-model="provider.street">
      </div>
      <div>
        Miasto:
        <input type="text" v-model="provider.city">
      </div>
      <div>
        Numer konta:
        <input type="number" v-model="provider.account_number">
      </div>
      <div>
        <input type="button" @click="edit" value="Edytuj">
      </div>
    </div>

    <div v-if="isEdited">
      <p>Dostawca został poprawnie edytowana!</p>
    </div>

    <div v-if="isError">
      <p>Operacja się nie powiodła!</p>
    </div>

  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EditTeaByEmployee",
  mounted() {
    DataAccess.getProviderById(this.$route.params.id).then(data => {
      this.provider = data;
    });
  },
  components: {
    MenuForEmployee
  },
  data: function() {
    return {
      provider: {
        id_provider: 0,
        name: "",
        surname: "",
        street: "",
        city: "",
        account_number: 0
      },
      isEdited: false,
      isError: false
    };
  },
  methods: {
    edit() {
      if (!this.isEdited) {
        DataAccess.updateProvider(this.provider).then(() => {
          this.isEdited = true;
          this.isError = false;
          this.clear();
        }).catch(() => {
            this.isError = true;
        });
      }
    },
    clear() {
      this.provider.id_provider = 0;
    }
  }
};
</script>


<style>
</style>
