<template>
    <div>
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col-8">
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div class="profile-banner">
                                        <div class="profile-pic">
                                            <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                                        </div>
                                    </div>
                                </template>
                                <template #content>
                                    <div>
                                        Sou o Admin
                                    </div>
                                </template>
                                <template #footer>
                                    <div>
                                       <p>Sou um estudante de Engenharia de Computação</p> 
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12">
                            <Card>
                                <template #header>
                                    <div>
                                        <h3>About</h3>
                                    </div>
                                    <div>
                                    </div>
                                </template>
                                <template #content>
                                    <div>
                                        <h3>About</h3>
                                    </div>
                                    <div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12">
                            <Card>
                                <template #content>
                                    <div>
                                        
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="col-12">
                            <Card>
                                <template #content>
                                    <div>
                                        
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12">
                            <Card>
                                <template #content>
                                    <div>
                                        
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
        background-color: white;
        height: 5rem;
    }
    .profile-pic{
        display: flex;
        position: absolute;
        margin-top: 3rem;
        margin-left: 2rem;
    }
</style>