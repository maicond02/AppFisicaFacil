<template>
    <div class="grid">
        <div class="col-2">
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
                            Maicon Alves
                        </div>
                    </div>
                </template>
            </Card>
        </div>
        <div class="col-10">
            <Card class="container-card">
                <template #content>
                    <div class="grid">
                        <div class="col-4">
                            <nuxt-link to="/aulas/fisica-1">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <P style="color:#3cba5c">Física 1 </P>
                                            <Knob valueColor="#3cba5c" v-model="value" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                        <div class="col-4">
                            <nuxt-link to="/aulas/fisica-2">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <p style="color:#3cba5c">Física 2</p>
                                            <Knob valueColor="#3cba5c" v-model="valuedois" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                        <div class="col-4">
                            <nuxt-link to="/aulas/fisica-3">
                                <Card class="card">
                                    <template #content>
                                        <div class="flex flex-column align-items-center justify-content-center">
                                            <p style="color:#3cba5c">Física 3</p>
                                            <Knob valueColor="#3cba5c" v-model="valuetres" valueTemplate="{value}%" />
                                        </div>
                                    </template>
                                </Card>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="col-6">
                            <Card class="card">
                                <template #content>
                                    <div class="flex align-items-center justify-content-center">
                                        <p style="color:#3cba5c">Conteúdo complementar</p>
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-6">
                            <Card class="card">
                                <template #content>
                                    <div class="flex align-items-center justify-content-center">
                                        <p style="color: #3cba5c;">Comunidade</p>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            value: 60,
            valuedois: 30,
            valuetres: 75,
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
</style>