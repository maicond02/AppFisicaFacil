<template>
    <div class="grid">
        <Card class="col-2" style="background-color: rgb(23, 23, 23); border: solid 1px rgba(255, 255, 255, 0.034);">
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
        border: solid 1px rgba(255, 255, 255, 0.034);
        background-color: rgb(23, 23, 23);
        
    }
    :deep(.container-card .p-card){
        background-color: white;
        margin: 5px;
    }
</style>