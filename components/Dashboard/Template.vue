<template>
    <div class="grid">
        <div class="menu-lateral col lg:col-2">
            <UserLateralMenu />
        </div>
        <div class="col lg:col-10 sm:col-12">
            <Card class="container-card">
                <template #content>
                    <div class="grid">
                        <div class="col lg:col-4 sm:col-12">
                            <nuxt-link to="/aulas/fisica-1">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <P style="color:#3cba5c">Física 1 </P>
                                            <Knob valueColor="#3cba5c" v-model="userStore.data.desempenho.fisicaOne" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                        <div class="col lg:col-4 sm:col-12">
                            <nuxt-link to="/aulas/fisica-2">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <p style="color:#3cba5c">Física 2</p>
                                            <Knob valueColor="#3cba5c" v-model="userStore.data.desempenho.fisicaTwo" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                        <div class="col lg:col-4 sm:col-12">
                            <nuxt-link to="/aulas/fisica-3">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <p style="color:#3cba5c">Física 3</p>
                                            <Knob valueColor="#3cba5c" v-model="userStore.data.desempenho.fisicaThree" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="col lg:col-6 md:col-12 sm:col-12">
                            <nuxt-link to="/materiais/">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex align-items-center justify-content-center">
                                            <p style="color:#3cba5c">Materiais</p>
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                        <div class="col lg:col-6 md:col-12 sm:col-12">
                            <nuxt-link to="/comunidade">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex align-items-center justify-content-center">
                                            <p style="color: #3cba5c;">Comunidade</p>
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
    import {useUserStore} from '~/store/user'
    export default {
    data() {
        return {
            userStore: useUserStore(),
            value: 100,
            valuedois: 58,
            valuetres: 0,
        }
    }
};
</script>

<style scoped>

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
    @media (max-width: 600px) {
        .menu-lateral {
            display: none;
        }
    }
</style>