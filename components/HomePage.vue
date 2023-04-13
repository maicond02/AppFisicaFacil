<template>
    <div class="grid">
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col">
                        <Card>
                            <template #content>
                                <div class="flex-column">
                                    <div>
                                        <img src="~/assets/images/Launching.gif" alt="" style="width:360px;">
                                    </div> 
                                </div>
                            </template>
                        </Card>  
                    </div>
                    <div class="col">
                        <div>
                            <Card>
                                <template #content>
                                    <div class="flex-column">
                                        <div>
                                            Bem-vindo à nossa página sobre aprendizagem gratuita de física! Aqui, você encontrará uma variedade de recursos e ferramentas úteis para ajudá-lo a aprender física de forma divertida e gratuita.
                                        </div> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="mt-2">
                            <Card>
                                <template #content>
                                    <div class="flex-column">
                                        <div>
                                            Aprenda física de maneira fácil e divertida - Nosso aplicativo gratuito está aqui para ajudar você a dominar o mundo da ciência!
                                        </div> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="mt-2">
                            <Card>
                                <template #content>
                                    <div class="flex-column">
                                        <div>
                                           Acesse sua conta ou registre-se abaixo:
                                        </div> 
                                        <div>
                                            <Button label="Acessar" class="m-2" severity="success" text raised />
                                            <Button label="Registrar-se" class="m-2"  severity="success" outlined />
                                        </div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                users:[],
                passowrds:null
            }
        },
        methods:{

        }
    }

    

</script>

<style scoped>
    :deep(.p-card){
        border: solid 1px rgba(255, 255, 255, 0.119) !important;
    }
</style>