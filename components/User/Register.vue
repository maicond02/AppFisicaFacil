<template>
    <div>
        <Card>
            <template #content>
                <div class="flex align-items-center justify-content-center">
                    <Card class="card-1" style="width: 30%; height: 70vh;">
                        <template #content>     
                            <div>
                                <h2 class="flex flex-wrap align-items-center justify-content-center" style="color: black;">Registre-se</h2>
                            </div>
                            <div class="flex flex-column align-items-center justify-content-center">
                                <label class="mt-2" style="color:black;">Email</label>
                                <InputText v-model="userData.email" class="mt-2"/>
                                <label class="mt-4" style="color: black;">Senha</label>
                                <InputText v-model="userData.password" class="mt-2"/>
                                
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button @click="login" label="Login" class="mt-4" raised />
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button label="Esqueceu a senha?" class="mt-4" text   />
                            </div>
                        </template>
                    </Card>
                    <Card class="card-2" style="width: 40%; height: 70vh;">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
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
                    password:null
                }
            }
        },
        methods:{
            login(){
                if(this.userData.password == 'admin' || this.userData.password == '123'){
                    window.location.replace('/dashboard')
                }
            }
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