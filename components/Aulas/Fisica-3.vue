<template>
    <div>
        <Card>
            <template #content>
                <div>
                    <div class="grid">
                        <div class="col-8">
                            <Card>
                                <template #content>
                                    <div>
                                        
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-4">
                            <Card>
                                <template #content>
                                    <div>
                                        <PanelMenu :model="items" class="w-full" />
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
    export default {
        data() {
            return {
                items: [
                    {
                        label: 'Eletrostática',
                    },
                    {
                        label: 'Magnetostática',
                    },
                    {
                        label: 'Eletrodinâmica',
                    },
                    {
                        label: 'Ondas Eletromagnéticas',
                    },
                    {
                        label: 'Óptica Geométrica',
                    },
                    {
                        label: 'Óptica Ondulatória',
                    },
                    {
                        label: 'Física Quântica',
                    },
                    {
                        label: 'Física Nuclear e de Partículas',
                    },
                    {
                        label: 'Termodinâmica',
                    },
                ]
            };
        }
    };
</script>

<style scoped>
    :deep(.p-card){
        border: solid 1px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
        
    }
   :deep(.p-panelmenu-panel){
        background-color: rgba(255, 255, 255, 0) !important;
   }
   :deep(.p-panelmenu-header-content){
        border: solid 1px rgba(255, 255, 255, 0.119) !important;
        background-color: rgba(255, 255, 255, 0) !important;
   }
   :deep(.p-panelmenu-content){
        background-color: rgba(255, 255, 255, 0) !important;
        border: solid 1px rgba(255, 255, 255, 0.119) !important;
   }
</style>