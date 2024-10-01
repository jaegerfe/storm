import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        loggedInUser: 'Adriana Arias'
    })
})