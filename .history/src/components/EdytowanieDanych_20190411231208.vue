<template>
  <div>
    <div class="GlownyKontentEdytowanieDanych">
      <p>Edytuj dane personalne</p>
      <div v-if="Customer != null">
        <div>
          imie:
          <input type:text v-model="Customer.name">
        </div>

        <div>
          nazwisko:
          <input type:text v-model="Customer.surname">
        </div>

        <div>
          Miejscowosc:
          <input type:text v-model="Customer.miejscowosc">
        </div>

        <div>
          Ulica:
          <input type:text v-model="Customer.ulica">
        </div>
      </div>

      <div v-if="Employee != null">
        <div>
          imie:
          <input type:text v-model="Employee.name">
        </div>

        <div>
          nazwisko:
          <input type:text v-model="Employee.surname">
        </div>
      </div>
      <p>Zmiana hasła</p>
      <div>
        Stare hasło:
        <input type="password" v-model="Customer.uzytkownik.haslo">
      </div>
      <div>
        Nowe hasło:
        <input type="password" v-model="Customer.uzytkownik.haslo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdytowanieDanych",
  props: {
    czyEmployee: Boolean,
    Customer: {
      id_Customera: Number,
      name: String,
      surname: String,
      miejscowosc: String,
      ulica: String,
      dataUsunieciaKonta: String,
      uzytkownik: {
        id_uzytkownika: Number,
        login: String,
        haslo: String,
        salt: String
      }
    },

    Employee: {
      id_Employeea: Number,
      name: String,
      surname: String,
      DataZatrudnienia: Date,
      DataZwolnienia: Date,
      uzytkownik: {
        id_uzytkownika: Number,
        login: String,
        haslo: String,
        salt: String
      }
    }
  },
  data: function() {
    return {
      argument: {
        gatunki: [],
        kraje: [],
        cenaOd: 0,
        cenaDo: 10000
      }
    };
  },
  methods: {}
};
</script>


<style>
.GlownyKontentEdytowanieDanych {
  padding: 5px;
}
.GlownyKontentEdytowanieDanych p {
  display: block;
  border-style: none none solid none;
  border-bottom-color: darkgreen;
  color: darkgreen;
}
</style>

