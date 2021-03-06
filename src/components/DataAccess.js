import axios from "axios";
import { store } from "@/store.js"

var DataAccess = {
    adresIPPort: "localhost:8086",
    login(user) {
        return axios.get(
            "http://" + this.adresIPPort + "/myapp/Login",
            {
                params: null,
                auth: {
                    username: user.username,
                    password: user.password
                }
            }
        ).then(response => {
            return response.data;
        });
    },
    deleteAccount() {
        return axios.get(
            "http://" + this.adresIPPort + "/myapp/deleteAccount",
            {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    getAllTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie", {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            })
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getAllTeaById(id) {
        var link = "http://" + this.adresIPPort + "/myapp/Herbaty/" + id;
        return axios
            .get(link, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            })
            .then(response => {
                return response.data;
            }).catch(() => {
                return null;
            });
    },
    addTea(tea) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updateTea(tea) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    getAllTeaFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie",
                argument, {
                    params: null,
                    
                    auth: {
                        username: store.getters.username,
                        password: store.getters.password
                    }
                }
            )
            .then(response => {
                return response.data;
            });
    },
    getTeaFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne",
                argument
            )
            .then(response => {
                return response.data;
            });
    },
    getAvaibleTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne", {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            })
            .then(response => {
                return response.data;
            });

    },
    getAvaibleTeaFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne",
                argument
            )
            .then(response => {
                return response.data;
            });
    },
    getSpecies() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    addSpecies(newSpecies) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty", newSpecies,
            {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updateSpecies(species) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty",
            species, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    deleteSpecies: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty/";
        link += id;
        return axios.delete(link, {
            params: null,
            
            auth: {
                username: store.getters.username,
                password: store.getters.password
            }
        });
    },
    getCountries() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/KrajePochodzenia")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    addCountry(newCountry) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia", newCountry,
            {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updateCountry(country) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia",
            country, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    deleteCountry: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/KrajePochodzenia/";
        link += id;
        return axios.delete(link, {
            params: null,
            
            auth: {
                username: store.getters.username,
                password: store.getters.password
            }
        });
    },
    getProviders() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Dostawcy")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getProviderById: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/Dostawcy/";
        link += id;
        return axios
            .get(link)
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    updateProvider(provider) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Dostawcy",
            provider, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    addProvider(provider) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Dostawcy",
            provider, {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    getDataOfEmployee() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/DanePracownika",
                {
                    params: null,
                    
                    auth: {
                        username: store.getters.username,
                        password: store.getters.password
                    }
                }
            ).then(response => {
                return response.data;
            });
    },
    getDataOfCustomer() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/DaneKlienta",
                {
                    params: null,
                    auth: {
                        username: store.getters.username,
                        password: store.getters.password
                    }
                }
            ).then(response => {
                return response.data;
            });
    },
    updateEmployee(customer) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Pracownicy",
            customer, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updateCustomer(customer) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Klienci",
            customer, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updatePassword(oldPassword, newPassword) {
        var user = {
            username: store.getters.username,
            password: newPassword
        };
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Uzytkownicy",
            user, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: oldPassword
                }
            }
        );
    },
    getPurchases() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Zakupy",
                {
                    params: null,
                    
                    auth: {
                        username: store.getters.username,
                        password: store.getters.password
                    }
                }
            ).then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getStatuses() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/StatusyTransakcji",
            ).then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    updatePurchase(purchase) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Zakupy",
            purchase, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    updateDelivery(delivery) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Dostawy",
            delivery, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    addDelivery(delivery) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Dostawy",
            delivery, {
                params: null,
                
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    getDeliveries() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Dostawy",
                {
                    params: null,
                    
                    auth: {
                        username: store.getters.username,
                        password: store.getters.password
                    }
                }
            ).then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    addCustomer(customer) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Klienci", customer
        ).then(response => {
            return response;
        });
    },
    addEmployee(employee) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Pracownicy", employee,
            {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        ).then(response => {
            return response;
        });
    },
    addAllPurchases() {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Zakupy",
            store.getters.purchases, {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    },
    addOnePurchase(purchase) {
        let purchases = [];
        purchases.push(purchase);
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Zakupy",
            purchases, {
                params: null,
                auth: {
                    username: store.getters.username,
                    password: store.getters.password
                }
            }
        );
    }
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

