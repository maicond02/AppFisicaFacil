<template>
    <div>
        <Card>
            <template #content>
                <div class="flex align-items-center justify-content-center">
                    <Card class="card-1" style="width: 30%; height: 70vh;">
                        <template #content>     
                            <div>
                                <h2 class="flex flex-wrap align-items-center justify-content-center" style="color: black;">Registrar-se</h2>
                            </div>
                            <div class="flex flex-column align-items-center justify-content-center">
                                <label class="mt-2" style="color:black;">Email</label>
                                <InputText class="mt-2"/>
                                <label class="mt-4" style="color: black;">Senha</label>
                                <InputText class="mt-2"/>
                                
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button label="Registrar" class="mt-4" raised />
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button label="Já tem cadastro? clique aqui..." class="mt-4" text   />
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

            }
        }
    }

</script>

<style scoped>
    :deep(.p-card){
        border: solid 1px rgba(255, 255, 255, 0.034);
        background-color: rgba(255, 255, 255, 0);
        
    }
    .card-1{
        background: #e5e5f7;
    }
    .card-2{
        background-color: rgb(24, 24, 24);
    }
    :deep(.p-inputtext){
        background-color: rgb(24, 24, 24);
        border: solid 1px black;
    }
</style>