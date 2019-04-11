import axios from "axios";
var DataAccess = {
    adresIPPort: "localhost:8086",
    user: {
        username: "bill",
        password: "abc123"
    },
    getAllTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie", {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            })
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getAllTeaById(id) {
        var link = "http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie/" + id;
        return axios
            .get(link, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            })
            .then(response => {
                return response.data;
            });
    },
    addTea(tea) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    updateTea(tea) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    getWszystkieHerbatyFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie",
                argument, {
                    params: null,
                    withCredentials: true,
                    auth: {
                        username: this.uzytkownik.username,
                        password: this.uzytkownik.password
                    }
                }
            )
            .then(response => {
                return response.data;
            });
    },
    getDostepneHerbaty() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne", {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.uzytkownik.username,
                    password: this.uzytkownik.password
                }
            })
            .then(response => {
                return response.data;
            });

    },
    getDostepneHerbatyFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne",
                argument
            )
            .then(response => {
                return response.data;
            });
    },
    getGatunki() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    dodawanieGatunku(nowyGatunek) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty", nowyGatunek,
            {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.uzytkownik.username,
                    password: this.uzytkownik.password
                }
            }
        );
    },
    aktualizacjaGatunku(gatunek) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty",
            gatunek, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.uzytkownik.username,
                    password: this.uzytkownik.password
                }
            }
        );
    },
    usuwanieGatunku: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty/";
        link += id;
        return axios.delete(link, {
            params: null,
            withCredentials: true,
            auth: {
                username: this.uzytkownik.username,
                password: this.uzytkownik.password
            }
        });
    },
    getKraje() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/KrajePochodzenia")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    dodawanieKraju(nowyKraj) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia", nowyKraj,
            {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.uzytkownik.username,
                    password: this.uzytkownik.password
                }
            }
        );
    },
    aktualizacjaKraju(kraj) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia",
            kraj, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.uzytkownik.username,
                    password: this.uzytkownik.password
                }
            }
        );
    },
    usuwanieKraju: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/KrajePochodzenia/";
        link += id;
        return axios.delete(link, {
            params: null,
            withCredentials: true,
            auth: {
                username: this.uzytkownik.username,
                password: this.uzytkownik.password
            }
        });
    },
    getDostawcy() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Dostawcy")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
}
export default DataAccess
//opisanie api serwera

//Herbaty
//Post - pracownik - dodanie herbaty
//Put - pracownik - aktualizacja

//Herbaty/Dostepne
//Get wszyscy
//Post wszyscy - wyszukiwanie z argumentem

//Herbaty/Wszystkie:
//Get pracownik
//Post pracownik - wyszukiwanie z argumentem

//Herbaty/Wszystkie/{id}:
//Get pracownik

//GatunkiHerbaty
//Get wszyscy
//Delete pracownik
//Put pracownik
//Post pracownik

//KrajePochodzenia
//Get wszyscy
//Delete pracownik
//Put pracownik
//Post pracownik

