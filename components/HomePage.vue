<template>
    <div class="grid">
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col">
                        <img src="~/assets/images/Launching.gif" alt="" style="width:800px;">
                    </div>
                    <div class="col">
                        Bem-vindo à nossa página sobre aprendizagem gratuita de física! Aqui, você encontrará uma variedade de recursos e ferramentas úteis para ajudá-lo a aprender física de forma divertida e gratuita.
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