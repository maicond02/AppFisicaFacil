import {defineStore} from "pinia"

export const useUserStore = defineStore('toast', {
    state: () => ({
        userData:null,
        teste:{
            user:'maicon'
        }
    }),

    getters: {

    },
  
    actions: {
        registerNewUser(data){
            this.userData = data
            console.log(this.userData)
        }
    },
})