<template>
    <div>
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col-12 md:col-8">
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div class="profile-banner">
                                        <div class="profile-pic">
                                            <UserMenu />
                                        </div>
                                    </div>
                                </template>
                                <template #content>
                                    <div class="ml-2">
                                        Maicon Alves
                                    </div>
                                </template>
                                <template #footer>
                                    <div class="ml-1">
                                       <p>Sou um estudante de Engenharia de Computação</p> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div class="ml-4">
                                        <h3>About</h3>
                                    </div>
                                    <div>
                                    </div>
                                </template>
                                <template #content>
                                    <div>
                                        <p>Sou um estudante de engenharia de computação buscando melhorar minhas competências de física !</p>
                                    </div>
                                    <div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="col-12 md:col-4">
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div class="m-4">
                                        <h3>Comunidade</h3>
                                    </div>
                                </template>
                                <template #content>
                                    <div class="flex flex-column">
                                        <nuxt-link to="/comunidade">
                                            <div class="flex">
                                                <Button icon="pi pi-thumbs-up" severity="success" outlined />
                                                <p class="m-2">Leonardo curtiu sua postagem</p>
                                            </div>
                                        </nuxt-link>
                                        <nuxt-link to="/comunidade">
                                            <div class="flex mt-2">
                                                <Button icon="pi pi-thumbs-up" severity="success" outlined />
                                                <p class="m-2">João Marcos curtiu sua postagem</p>
                                            </div>
                                        </nuxt-link>
                                        <nuxt-link to="/comunidade">
                                            <div class="flex mt-2">
                                                <Button icon="pi pi-comments" severity="success" outlined/>
                                                <p class="m-2">Vinícius comentou sua postagem</p>
                                            </div>
                                        </nuxt-link>
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div class="m-4">
                                        <h3>Aulas</h3>
                                    </div>
                                </template>
                                <template #content>
                                    <div class="flex flex-column">
                                        <nuxt-link to="/aulas/fisica-2">
                                            <div class="flex mt-2">
                                                <Button icon="pi pi-window-maximize" severity="success" outlined/>
                                                <p class="m-2">Continue Física 2</p>
                                            </div>
                                        </nuxt-link>
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

</script>

<style scoped>
    :deep(.p-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
    }
    .profile-banner{
        background-color: #236325;
        height: 5rem;
    }
    .profile-pic{
        display: flex;
        position: absolute;
        margin-top: 3rem;
        margin-left: 2rem;
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>