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
        async registerNewUser(data){
            this.userData = data
            console.log(this.userData)
            let response = await fetch('http://localhost:3001/user', { method: "POST", body: JSON.stringify(data) }).then(res => res.json())
        },
    },
})