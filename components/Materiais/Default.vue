<template>
    <div class="grid">
        <div class="col-12">
            <Card class="container-card">
                <template #content>
                    <div>
                        <div class="grid">
                            <div class="col-12 lg:col-4">
                                <nuxt-link to="/aulas/fisica-1">
                                    <Card class="card">
                                        <template #content>
                                            <div class="flex flex-column align-items-center justify-content-center">
                                                <P style="color:#3cba5c">Física 1 </P>
                                            </div>
                                        </template>
                                    </Card>
                                </nuxt-link>
                            </div>
                            <div class="col-12 lg:col-4">
                                <nuxt-link to="/aulas/fisica-1">
                                    <Card class="card">
                                        <template #content>
                                            <div class="flex flex-column align-items-center justify-content-center">
                                                <P style="color:#3cba5c">Física 2 </P>
                                            </div>
                                        </template>
                                    </Card>
                                </nuxt-link>
                            </div>
                            <div class="col-12 lg:col-4">
                                <nuxt-link to="/aulas/fisica-1">
                                    <Card class="card">
                                        <template #content>
                                            <div class="flex flex-column align-items-center justify-content-center">
                                                <P style="color:#3cba5c">Física 3 </P>
                                            </div>
                                        </template>
                                    </Card>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>

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

    :deep(.container-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
        
    }
    :deep(.container-card .p-card){
        background-color: rgb(24, 24, 24);
    }
    .user-menu :deep(.p-card-body){
        padding: 0;
    }
    .card:hover{
        background: rgb(62, 62, 62);
    }
    a{
        text-decoration: none;
    }
</style>