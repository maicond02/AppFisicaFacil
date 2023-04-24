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
                                    Registrar-se
                                </div>
                            </template>
                            <template #content>
                                <div class="flex flex-column align-items-center justify-content-center">
                                    <div class="flex flex-column">
                                        <label class="mt-2">Nome de Usuário</label>
                                        <InputText v-model="userData.user" class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column">
                                        <label class="mt-2">Email</label>
                                        <InputText v-model="userData.email" class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column">
                                        <label class="mt-2">Senha</label>
                                        <InputText v-model="userData.password" type="password" class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column"> 
                                        <Button label="Registrar-se" @click="register()" class="mt-4" severity="success" text raised />
                                        <Button label="ou, entre em sua conta" class="mt-2" severity="success" text />
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col">
                        <img src="~/assets/images/alien.gif">
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
            }
        },
        methods:{
            register(){
                if(this.userData.user && this.userData.email && this.userData.password != null){
                    this.userStore.registerNewUser(this.userData)
                    this.$toast.add({ severity: 'success', summary: 'Successo', detail: 'Estamos redirecionando você', life: 3000 });
                    setTimeout(() => {
                        this.$router.push('/dashboard');
                    }, 2000);
                }if(this.userData.user == null){
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Defina seu nome de usuário', life: 3000 });
                }if(this.userData.email == null){
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Defina seu email', life: 3000 });
                }if(this.userData.password == null){
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Defina sua senha', life: 3000 });
                }
            },
        },
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
        max-width: 70vw;
        max-height: 70vh;
    }
    @media (max-width: 600px) {
        img {
            max-width: 80vw;
            max-height: 80vh;
        }
    }
</style>