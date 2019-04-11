<template>
  <div>
    <div class="GlownyKontentEdytowanieDanych">
      <p>Edytuj dane personalne</p>
      <div v-if="Klient != null">
        <div>
          Imie:
          <input type:text v-model="Klient.imie">
        </div>

        <div>
          Nazwisko:
          <input type:text v-model="Klient.nazwisko">
        </div>

        <div>
          Miejscowosc:
          <input type:text v-model="Klient.miejscowosc">
        </div>

        <div>
          Ulica:
          <input type:text v-model="Klient.ulica">
        </div>
      </div>

      <div v-if="Pracownik != null">
        <div>
          Imie:
          <input type:text v-model="Pracownik.imie">
        </div>

        <div>
          Nazwisko:
          <input type:text v-model="Pracownik.nazwisko">
        </div>
      </div>
      <p>Zmiana hasła</p>
      <div>
        Stare hasło:
        <input type="password" v-model="Klient.uzytkownik.haslo">
      </div>
      <div>
        Nowe hasło:
        <input type="password" v-model="Klient.uzytkownik.haslo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdytowanieDanych",
  props: {
    czyPracownik: Boolean,
    Klient: {
      id_klienta: Number,
      imie: String,
      nazwisko: String,
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

    Pracownik: {
      id_pracownika: Number,
      Imie: String,
      Nazwisko: String,
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

