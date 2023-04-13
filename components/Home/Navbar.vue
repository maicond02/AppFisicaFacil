<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
            </template>
            <template #end>
            </template>
        </Menubar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                  {
                     label:'Home',
                     to:'/'
                  },
                  {
                     label:'Aulas',
                  },
                  {
                     label:'Materiais',
                  },
                  {
                     label:'Fórum',
                  },
                  {
                     label:'Aulas ao vivo',
                  },
                  {
                     label:'Usuário',
                     icon:'pi pi-fw pi-user',
                     items:[
                        {
                           label:'Perfil',
                           icon:'pi pi-fw pi-user-plus',
  
                        },
                        {
                           label:'Sair',
                           icon:'pi pi-fw pi-user-minus',
  
                        },
                     ]
                  },
                ]
            }
        }
    }
</script>

<style scoped>
    :deep(.p-menubar){
        border-bottom: solid 2px rgba(255, 255, 255, 0.119);
        background-color: rgba(255, 255, 255, 0);
    }
    :deep(.p-inputtext){
        background-color: rgba(255, 255, 255, 0.034);
        border: solid 1px rgba(255, 255, 255, 0.034);
    }
    :deep(.p-menuitem-text):active{
        color: rgb(255, 255, 255) !important;
    }
    :deep(p-menuitem-link):active{
        color: rgb(255, 255, 255) !important;
    }
</style>