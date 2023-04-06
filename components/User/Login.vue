<template>
    <div>
        <Card>
            <template #content>
                <div class="flex align-items-center justify-content-center">
                    <Card class="card-1" style="width: 20%; min-height: 50vh;">
                        <template #content>     
                            <div>
                                <h2 class="flex flex-wrap align-items-center justify-content-center" style="color: white;">Login</h2>
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <InputText class="mt-2"/>
                                <InputText class="mt-4"/>
                                
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button label="Login" class="mt-4" severity="secondary" text raised/>
                            </div>
                            <div class="flex flex-wrap align-items-center justify-content-center">
                                <Button label="Esqueceu a senha?" class="mt-4" severity="secondary" text raised />
                            </div>
                        </template>
                    </Card>
                    <Card class="card-2" style="width: 20%; min-height: 50vh;">
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
        background: linear-gradient(-45deg, #000000, #00111a, #0085a7, #000000);
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .card-2{
        background-color: rgb(24, 24, 24);
    }
    :deep(.p-inputtext){
        background-color: rgb(24, 24, 24);
        border: solid 1px black;
    }
    :deep(.p-button-label){
        color: white;
    }
</style>