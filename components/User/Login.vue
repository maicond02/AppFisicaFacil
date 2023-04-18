<template>
    <div>
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col flex align-items-center justify-content-end mr-1">
                        <Card class="shadow-6 sm:w-15rem md:w-30rem" style="min-height: 80vh;" >
                            <template #title>
                                <div class="flex align-items-center justify-content-center">
                                    Login
                                </div>
                            </template>
                            <template #content>
                                <div class="flex flex-column align-items-center justify-content-center">
                                    <div class="flex flex-column">
                                        <label class="mt-2">Usuário ou Email</label>
                                        <InputText class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column">
                                        <label class="mt-2">Senha</label>
                                        <InputText class="mt-2"/>
                                    </div>
                                    <div class="flex flex-column"> 
                                        <Button label="Entrar" @click="login()" class="mt-8" severity="success" text raised />
                                        <Button label="ou, crie uma conta" class="mt-2" severity="success" text />
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col flex align-items-center justify-content-start">
                        <Card class="shadow-6 sm:w-15rem md:w-30rem" style="min-height: 80vh;">
                            <template #content>
                                <div class="flex align-items-center justify-content-center">
                                    <img src="~/assets/space.png" width="80%" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
     export default {
        data() {
            return {
                userData:{
                    email:null,
                    password:null,
                },
                gifUrl:'@/assets/images/space.gif'
            }
        },
        methods:{
            login(){
                //if(this.userData.password == 'admin' || this.userData.password == '123'){
                    window.location.replace('/dashboard')
                //}
            },
        },
        mounted(){

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
</style>