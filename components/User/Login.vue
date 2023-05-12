<template>
    <div>
        <Toast />
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col">
                        <Card class="shadow-6 sm:w-15rem md:w-30rem" >
                            <template #title>
                                <div class="flex align-items-center justify-content-center">
                                    Login
                                </div>
                            </template>
                            <template #content>
                                <div class="flex flex-column align-items-center justify-content-center">
                                    <div class="flex flex-column">
                                        <label class="mt-2">Usuário ou Email</label>
                                        <InputText v-model="userData.user" class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column">
                                        <label class="mt-2">Senha</label>
                                        <InputText v-model="userData.password" class="mt-2" type="password"/>
                                    </div>
                                    <div class="flex flex-column"> 
                                        <Button label="Entrar" @click="login()" class="mt-8" severity="success" text raised />
                                        <Button label="ou, crie uma conta" class="mt-2" severity="success" text />
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col">
                        <img src="~/assets/images/space.gif" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import {useUserStore} from '~/store/user'

     export default {
        data() {
            return {
                userStore: useUserStore(),
                userData:{
                    user:null,
                    email:null,
                    password:null,
                },
                gifUrl:'@/assets/images/space.gif'
            }
        },
        methods:{
            login(){
                /*
                let dados = this.userStore.getUserData
                console.log('...', dados)
                const usuario = dados.find(item => {
                    if(item.user == this.userData.user && item.password == this.userData.password){
                        this.userStore.userData = {user: item.user}
                        this.$toast.add({ severity: 'success', summary: `Bem vindo - ${item.user}`, detail: 'Estamos redirecionando você', life: 3000 });
                        setTimeout(() => {
                            this.$router.push('/dashboard');
                        }, 2000);
                    }else{
                        console.log('nao foi')
                    }
                })
                */
                this.$router.push('/dashboard');
            },
        },
        mounted(){
            this.userStore.loadUsers()
        }
    }

</script>

<style scoped>
    :deep(.p-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
        
    }
    .card-1{
        background: #ffffff;
    }
    .card-2{
        background-color: rgb(24, 24, 24);
    }
    :deep(.p-inputtext){
        background-color: rgb(24, 24, 24);
        border: solid 1px black;
    }

    img{
        max-width: 80vw;
        max-height: 80vh;
    }
</style>