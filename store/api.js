import {defineStore} from "pinia"

export const useAPIStore = defineStore('API', {
    state: () => ({
        baseUrl: 'http://localhost:3001/',
        getUserData:null
    }),

    getters: {

    },
  
    actions: {
        async requestPost(path, data){
            let response = await fetch(this.baseUrl + path, {    
                headers: {
                'Content-Type': 'application/json'
                }, 
                method: "POST", 
                body: JSON.stringify(data) 
            }).then(res => res.json())
        },
        async requestGet(path){
            let response = await fetch(this.baseUrl + path, {    
                headers: {
                'Content-Type': 'application/json'
                }, 
                method: "GET", 
            }).then(res => res.json())
            this.getUserData = response
            console.log(this.getUserData)
        },
    },
})



