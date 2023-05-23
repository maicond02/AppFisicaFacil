import {defineStore} from "pinia"
import {useAPIStore} from './api'

const API = useAPIStore()

export const useUserStore = defineStore('USER', {
    state: () => ({
        baseUrl: 'http://localhost:3001/',
        userData:null,
        getUserData:null,
        data:{
            user:'Maicon Alves',
            password:'123',
            avatar:'M',
            desempenho:{
                fisicaOne:100,
                fisicaTwo:84,
                fisicaThree:0
            }
        },
    }),

    getters: {

    },
  
    actions: {
        async loadUsers(){            
            //let response = await fetch('http://localhost:3001/user', {    
                //headers: {
                //'Content-Type': 'application/json'
               // }, 
               // method: "GET", 
            //}).then(res => res.json())
            //this.getUserData = response
            //console.log(this.getUserData)
        },
        async registerNewUser(data){            
            this.userData = data
            API.requestPost('user', data)
        },
    },
})