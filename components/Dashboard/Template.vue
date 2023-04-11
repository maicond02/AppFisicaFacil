<template>
    <div class="grid">
        <Card class="col-2" style="border: solid 1px rgba(255, 255, 255, 0.119); background-color: rgba(255, 255, 255, 0);">
            <template #content>
                <div>
                    
                </div>
            </template>
        </Card>
        <Card class="container-card col-10">
            <template #content>
                <div class="grid">
                    <Card class="col-3">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
                    <Card class="col-3">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
                    <Card class="col-3">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="grid">
                    <Card class="col-2">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
                    <Card class="col-2">
                        <template #content>
                            <div>
                                
                            </div>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

</script>

<style scoped>

    :deep(.container-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
        
    }
    :deep(.container-card .p-card){
        background-color: white;
        margin: 5px;
    }
</style>