<template>
    <div>
        <Card class="p-2 user-menu" style="border: solid 1px rgba(255, 255, 255, 0.119); background-color: rgba(255, 255, 255, 0);">
            <template #title>
                <div>
                    <Card style="background-color: rgb(24, 24, 24);">
                        <template #content>
                            <div class="flex align-items-center justify-content-center" style="height: 5vh;">
                                <UserMenu class="absolute mt-6"/>
                            </div>
                        </template>
                    </Card>
                </div>
            </template>
            <template #content>
                <div class="flex align-items-center justify-content-center">
                    <div>
                        {{ userStore.data.user }}
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
    import { useUserStore } from "~/store/user";

    export default{
        data(){
            return{
                userStore: useUserStore(),
            }
        }
    }

</script>

<style scoped>
    .user-menu :deep(.p-card-body){
        padding: 0;
    }
    .card:hover{
        background: rgb(62, 62, 62);
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 600px) {
        .menu-lateral {
            display: none;
        }
    }

</style>