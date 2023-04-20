<template>
    <div>
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col">
                        <div class="flex-auto">
                            <img src="~/assets/images/Launching.gif" alt="">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <Card style="min-height: 200px;">
                                <template #content>
                                    <div class="flex-column">
                                        <div>
                                            Seja bem-vindo ao nosso aplicativo de aprendizagem gratuita de física! Aqui, você terá acesso a diversos recursos e ferramentas para aprimorar seus conhecimentos em física de maneira interativa e sem nenhum custo. Aproveite para explorar e se divertir enquanto aprende!
                                        </div> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="mt-2">
                            <Card style="min-height: 200px;">
                                <template #content>
                                    <div class="flex-column">
                                        <div>
                                            Com o nosso aplicativo, você terá acesso a aulas em vídeo ministradas por professores especialistas em física, exercícios interativos, jogos educativos e muito mais. Tudo isso é disponibilizado de forma intuitiva e fácil de usar, permitindo que você aprenda no seu próprio ritmo e no horário que melhor se adequar à sua rotina.
                                        </div> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="mt-2">
                            <Card style="min-height: 200px;">
                                <template #title>
                                    <div class="flex align-items-center justify-content-center">
                                        Acesse sua conta ou registre-se abaixo:
                                    </div>
                                </template>
                                <template #content>
                                    <div class="flex-column">
                                        <div class="flex align-items-center justify-content-center">
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
    
    img{
        max-width: 80vw;
        max-height: 80vh;
    }
</style>