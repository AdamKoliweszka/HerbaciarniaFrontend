<template>
  <div>
    <MenuForEmployee/>
    <div class="Content">
      <p>Edytuj dane personalne</p>
      <div>
        imie:
        <input type:text v-model="employee.name">
      </div>

      <div>
        nazwisko:
        <input type:text v-model="employee.surname">
      </div>
    </div>
    <p>Zmiana hasła</p>
    <div>
      Stare hasło:
      <input type="password" v-model="oldPassword">
    </div>
    <div>
      Nowe hasło:
      <input type="password" v-model="newPassword">
    </div>
  </div>
</template>

<script>
import MenuForEmployee from "@/components/MenuForEmployee.vue";
import DataAccess from "@/components/DataAccess.js";
export default {
  name: "EditDataOfEmployee",
  components:{
      MenuForEmployee
  },
  mounted()
  {
    DataAccess.getDataOfEmployee().then(data => {
      console.log(data);
      this.employee = data;
    });
  },
  data: function() {
    return {
      employee: {
        id_employee: 0,
        name: "",
        surname: "",
        date_of_employing: "",
        date_of_dismis: ""
      },
      oldPassword: "",
      newPassword: ""
    };
  },
  methods: {}
};
</script>


<style scoped>
.Content {
  padding: 5px;
}
.Content p {
  display: block;
  border-style: none none solid none;
  border-bottom-color: darkgreen;
  color: darkgreen;
}
</style>

