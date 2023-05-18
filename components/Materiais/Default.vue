<template>
    <div>
        <Card class="container-card">
            <template #content>
                <div class="grid">
                    <div class="col-2">
                        <UserLateralMenu />
                    </div>
                    <div class="col-10">
                        <Card>
                            <template #content>
                                <div>
                                    <div class="flex justify-content-center">
                                        
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
        </Card>
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
</style>