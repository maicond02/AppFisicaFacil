<template>
    <div>
        <Card>
            <template #content>
                <div>
                    <div class="grid">
                        <div class="col-12 md:col-12 lg:col-8">
                            <Card>
                                <template #content>
                                    <div class="flex align-items-center justify-content-center" style="height: 60vh; width: 100%;">
                                        <Button  severity="secondary" outlined icon="pi pi-play"/>
                                    </div>
                                </template>
                            </Card>
                        </div>
                        <div class="col-12 md:col-12 lg:col-4">
                            <Card>
                                <template #content>
                                    <div style="height: 60vh; width: 100%;">
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
                        label: 'Vetores e Cinemática',
                        items: [
                            {
                                label: ' Vetores e suas propriedades',
                            },
                            {
                                label: 'Delete',
                            },
                            {
                                label: 'MRU e MRUV',
                            }
                        ]
                    },
                    {
                        label: 'Dinâmica',
                        items: [
                            {
                                label: 'Leis de Newton',
                            },
                            {
                                label: 'Força e Movimento',
                            },
                            {
                                label: 'Trabalho e Energia Cinética',
                            },
                            {
                                label: 'Conservação de Energia',
                            }
                        ]
                    },
                    {
                        label: 'Gravitação',
                        items: [
                            {
                                label: 'Lei da Gravitação Universal',
                            },
                            {
                                label: 'Movimento de Satélites',
                            },
                            {
                                label: 'Queda Livre',
                            }
                        ]
                    },
                    {
                        label: 'Fluidos',
                        items: [
                            {
                                label: 'Pressão e densidade',
                                items: [
                                    {
                                        label: 'Princípio de Arquimedes',
                                    },
                                    {
                                        label: 'Equação da continuidade',
                                    },
                                    {
                                        label: 'Equação de Bernoulli',
                                    }
                                ]
                            },
                            {
                                label: 'Ondas',
                                items: [
                                    {
                                        label: 'Ondas Mecânicas',
                                    },
                                    {
                                        label: 'Propriedades das Ondas',
                                    },
                                    {
                                        label: 'Ondas Sonoras',
                                    },
                                    {
                                        label: 'Interferência e Difração',
                                    }
                                ]
                            },
                            {
                                label: 'Termodinâmica',
                                items: [
                                    {
                                        label: 'Temperatura e Calor',
                                    },
                                    {
                                        label: 'Primeira Lei da Termodinâmica',
                                    },
                                    {
                                        label: 'Máquinas Térmicas',
                                    },
                                    {
                                        label: 'Ciclos Termodinâmicos',
                                    }
                                ]
                            }
                        ]
                    }
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