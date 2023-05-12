<template>
    <div class="mt-2">
        <Card>
            <template #title>
                <div class="flex">
                    <Avatar label="U" size="large" style="background-color:#4caf4f; color: #ffffff"  />
                    <div>
                        <p class="ml-2">Nome Autor</p>
                    </div>
                </div>
            </template>
            <template #content>
                <div>
                    {{ conteudo }}
                </div>
            </template>
            <template #footer>
                <div class="flex flex-column">
                      <div>
                        <Button label="curtir" icon="pi pi-thumbs-up" severity="success" outlined />
                        <Button label="comentar" class="ml-2" icon="pi pi-comments" severity="success" outlined/>
                      </div>
                      <div>

                      </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    export default{

        props:{
            conteudo:{
                type: String,
                required: false
            }
        },

        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    :deep(.p-card .p-card-title){
        font-size: 1rem;
    }
</style>