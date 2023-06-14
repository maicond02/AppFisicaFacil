<template>
    <div>
        <Card class="container-card">
            <template #content>
                <div class="grid">
                    <div class="hidden md:block col-2">
                        <UserLateralMenu />
                    </div>
                    <div class="col-12 md:col-10">
                        <Card>
                            <template #content>
                                <div>
                                    <div class="flex justify-content-center">
                                        <InputText class="w-8 md:w-10" type="text" v-model="post"/>
                                        <Button @click="addComponent()" label="Publicar" class="ml-2" severity="success" outlined/>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <div>
                            <ComunidadePost :conteudo="post" :autor="userStore.data.user"  v-for="(component, index) in components" :key="index" :is="component"/>
                            <ComunidadePost conteudo="Preciso de ajuda em Física 1" autor="Maicon Alves"/>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    import Post from '~/components/Comunidade/Post.vue'
    import { useUserStore } from '~/store/user';

    export default{
        data(){
            return{
                userStore: useUserStore(),
                components:[],
                post:[]
            }
        },
        methods:{
            addComponent() {
                this.components.push(Post);
            }
        }
    }
</script>

<style scoped>

    :deep(.container-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(0, 0, 0, 0);
        
    }
    :deep(.container-card .p-card){
        background-color: rgb(24, 24, 24);
    }
    :deep(.p-inputtext){
        width: 30rem;
        height: 3rem;
    }
</style>