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
                     label:'Dashboard',
                     to:'/dashboard'
                  },
                  {
                     label:'Materiais',
                     to:'/materiais'
                  },
                  {
                     label:'Comunidade',
                     to:'/comunidade/'
                  },
                  {
                     label:'Aulas',
                     items:[
                        {
                           label:'Fisica 1',
                           to:'/aulas/fisica-1'
  
                        },
                        {
                           label:'Física 2',
                           to:'/aulas/fisica-2'
                        },
                        {
                           label:'Física 3',
                           to:'/aulas/fisica-3'
                        },
                     ]
                  },
                  {
                     label:'Usuário',
                     icon:'pi pi-fw pi-user',
                     items:[
                        {
                           label:'Perfil',
                           icon:'pi pi-fw pi-user-plus',
                           to:'/user/profile'
  
                        },
                        {
                           label:'Sair',
                           icon:'pi pi-fw pi-user-minus',
                           to:'/'
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
        background-color: transparent;
    }
    :deep(.p-inputtext){
        background-color: rgba(255, 255, 255, 0.034);
        border: solid 1px rgba(255, 255, 255, 0.034);
    }
    :deep(.p-menuitem-text):active{
        color: rgb(255, 255, 255) !important;
    }
    :deep(.p-menuitem-link){
        background-color: rgb(18, 18, 18) !important;
    }

    :deep(.p-menubar-root-list){
        border: none !important;
    } 
</style>