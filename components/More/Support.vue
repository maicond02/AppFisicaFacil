<template>
    <div class="card">
        <div class="col">
            <Card class="container-card">
                <template #content>
                    <div class="grid">
                        <div class="col-12 lg:col-6">
                            <div class="flex flex-column">
                                <label>Email</label>
                                <InputText class="mt-2"/>
                                <label class="mt-2">Nome de usuário</label>
                                <InputText class="mt-2"/>
                                <Textarea class="mt-4" v-model="value" rows="5" cols="30" />
                                <div class="mt-4 flex align-items-center justify-content-end">
                                    <Button label="Cancelar" class="mr-2" severity="success" text raised />
                                    <Button label="Enviar" severity="success" outlined/>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 lg:col-6">
                            <div class="flex align-items-center justify-content-center">
                                <img src="@/assets/images/support.gif" alt="Support" style="height: 60vh;">
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    :deep(.container-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(0, 0, 0, 0);
        
    }
    a{
        text-decoration: none;
    }
</style>