<template>
  <div id="app">
    <GorneMenu @click="wyborMenu" :listaItemow="menuItems"/>
    <WyszukiwanieHerbat v-if="wybor.nazwa=='Przeglad herbat'" :czyPracownik="false"/>
    <EdytowanieDanych
      v-if="wybor.nazwa=='Edytuj dane'"
      :Klient="AktualnyKlient"
      :Pracownik="AktualnyPracownik"
    />
    <Logowanie v-if="wybor.nazwa=='Logowanie'"/>
  </div>
</template>

<script>

import Logowanie from "@/components/Logowanie.vue";
import GorneMenu from "@/components/GorneMenu.vue";
import WyszukiwanieHerbat from "@/components/WyszukiwanieHerbat.vue";
import EdytowanieDanych from "@/components/EdytowanieDanych.vue";
export default {
  name: "app",
  components: {
    WyszukiwanieHerbat,
    GorneMenu,
    EdytowanieDanych,
    Logowanie
  },
  data: function() {
    return {
      wiadomosc: "Hello",
      herbaty: null,
      gatunki: null,
      kraje: null,
      adresIPPort: "10.211.55.5:8086",
      wybor: {
        nazwa: "Przeglad herbat"
      },
      menuItems: [
        { nazwa: "Przeglad herbat" },
        { nazwa: "Logowanie" },
        { nazwa: "Zawartosc koszyka" },
        { nazwa: "Edytuj dane" },
        { nazwa: "Rejestracja" },
        { nazwa: "Przegląd dokonanych zakupów" }
      ],
      AktualnyKlient: {
        id_klienta: 0,
        imie: "Adam",
        nazwisko: "Koliweszka",
        miejscowosc: "Wrocław",
        ulica: "Grunwaldzka 9/3",
        dataUsunieciaKonta: "null",
        uzytkownik: {
          id_uzytkownika: "6",
          login: "AdamK",
          haslo: "Adam",
          salt: "costamcostam"
        }
      },
      AktualnyPracownik: null
    };
  },
  methods: {
    wyborMenu(wybor) {
      this.wybor = wybor;
    }
  },
  mounted() {
    
    
  }
};
</script>

<style>
</style>

