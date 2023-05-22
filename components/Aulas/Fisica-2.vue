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
                        label: 'Eletrostática',
                        items: [
                            {
                                label: 'Vetores e suas propriedades',
                            },
                            {
                                label: 'Lei de Coulomb',
                            },
                            {
                                label: 'Campo elétrico',
                            },
                            {
                                label: 'Potencial elétrico',
                            },
                            {
                                label: 'Capacitores',
                            }
                        ]
                    },
                    {
                        label: 'Magnetismo',
                        items: [
                            {
                                label: 'Campo magnético',
                            },
                            {
                                label: 'Campo magnético'
                            },
                            {
                                label: 'Lei de Faraday',
                            },
                            {
                                label: 'Lei de Ampère',
                            },
                            {
                                label: 'Indutores',
                            }
                        ]
                    },
                    {
                        label: 'Circuitos elétricos',
                        items: [
                            {
                                label: 'Resistores, capacitores e indutores em circuitos',
                            },
                            {
                                label: 'Leis de Kirchhoff',
                            },
                            {
                                label: 'Circuitos RC, RL e RLC',
                            },
                            {
                                label: 'Oscilações em circuitos elétricos',
                            }
                        ]
                    },
                    {
                        label: 'Ondas Eletromagnéticas',
                        items: [
                            {
                                label: 'Equações de Maxwell',
                                items: [
                                    {
                                        label: 'Princípio de Arquimedes',
                                    },
                                    {
                                        label: 'Propriedades das ondas eletromagnéticas ',
                                    },
                                    {
                                        label: 'Espectro Eletromagnético',
                                    },
                                    {
                                        label: 'Óptica',
                                    }
                                ]
                            },
                            {
                                label: 'Física Moderna',
                                items: [
                                    {
                                        label: 'Teoria da Relatividade Especial',
                                    },
                                    {
                                        label: 'Mecânica Quântica',
                                    },
                                    {
                                        label: 'Física Nuclear e de Partículas',
                                    },
                                    {
                                        label: 'Aplicações da Física Moderna',
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