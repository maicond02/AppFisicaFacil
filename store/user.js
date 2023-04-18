import {defineStore} from "pinia"

export const useUserStore = defineStore('toast', {
    state: () => ({
        userData:{
            user:[],
            email:[],
            password:[],
        },
    }),

    getters: {

    },
  
    actions: {

    },
})