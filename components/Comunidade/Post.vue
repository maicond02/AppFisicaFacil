<template>
    <div class="mt-2">
        <Card>
            <template #title>
                <div class="flex">
                    <Avatar label="M" size="large" style="background-color:#4caf4f; color: #ffffff"  />
                    <div>
                        <p class="ml-2">{{ autor }}</p>
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
                    <div class="grid">
                        <div class="col-6">
                            <label class="likes">24 curtidas</label>
                        </div>
                    <div class="col-6 flex justify-content-end">
                        <label class="comments ">3 comentários</label>
                    </div>
                    </div>
                    <Divider />
                    <div>
                        <Button label="curtir" icon="pi pi-thumbs-up" severity="success" outlined />
                        <Button @click="showComments()" label="comentar" class="ml-2" icon="pi pi-comments" severity="success" outlined/>
                    </div>
                    <div v-if="isShowComments" class="flex flex-column mt-4">
                        <div class="flex">
                            <Avatar label="M" size="large" style="background-color:#4caf4f; color: #ffffff"  />
                            <InputText class="ml-3"/>
                            <Button class="ml-3" label="Comentar" severity="success" outlined />
                        </div>
                        <Divider />
                        <div class="flex flex-column">
                            <div class="mb-3">
                                <label>Mais relevantes</label>
                            </div>
                            <div class="flex">
                                <Avatar label="L" size="large" style="background-color:#4caf4f; color: #ffffff"/>
                                <div class="ml-2">
                                    <Card style="background-color: rgb(32, 32, 32);">
                                        <template #title>
                                            <div>
                                                <label class="comments-user-name">Leonardo Marcondeli</label>
                                            </div>
                                        </template>
                                        <template #content>
                                            <div class="flex flex-column">
                                                <label class="">Posso te ajudar, o que precisa?</label>
                                            </div>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                            <div class="flex mt-2">
                                <Avatar label="J" size="large" style="background-color:#4caf4f; color: #ffffff"/>
                                <div class="ml-2">
                                    <Card style="background-color: rgb(32, 32, 32);">
                                        <template #title>
                                            <div>
                                                <label class="comments-user-name">João Marcos</label>
                                            </div>
                                        </template>
                                        <template #content>
                                            <div class="flex flex-column">
                                                <label class="">Me fale qual a dúvida, posso te ajudar também!</label>
                                            </div>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                            <div class="flex mt-2">
                                <Avatar label="V" size="large" style="background-color:#4caf4f; color: #ffffff"/>
                                <div class="ml-2">
                                    <Card style="background-color: rgb(32, 32, 32);">
                                        <template #title>
                                            <div>
                                                <label class="comments-user-name">Vinícius de Morais</label>
                                            </div>
                                        </template>
                                        <template #content>
                                            <div class="flex flex-column">
                                                <label class="">Estou com dúvidas também, alguém para ajudar?</label>
                                            </div>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    export default{

        props:{
            autor:{
                type: String,
                required: false
            },
            conteudo:{
                type: String,
                required: false
            }
        },

        data(){
            return{
                isShowComments: false
            }
        },
        methods:{
            showComments(){
                this.isShowComments = !this.isShowComments
            }
        }
    }
</script>

<style scoped>
    :deep(.p-card .p-card-title){
        font-size: 1rem;
    }
    .likes{
        color: rgb(156, 156, 156);
    }
    .comments{
        color: rgb(156, 156, 156);
    }
    .comments-user-name{
        font-weight: bold;
    }
</style>