<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
            </template>
            <template #end>
                <div class="flex flex-wrap">
                    <nuxt-link to="/user/login">
                        <Button label="Entrar" severity="success" text raised />
                    </nuxt-link>  
                    <nuxt-link to="/user/register">
                        <Button label="Registrar" class="ml-2" severity="success" outlined/>
                    </nuxt-link>             
                    <InputText class="ml-2" placeholder="Search" type="text" />
                </div>
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
                     label:'Sobre',
                     to:'/about'
                  },
                  {
                     label:'Suporte',
                     to:'support'
                  },
                ]
            }
        }
    }
</script>

<style scoped>
    :deep(.p-menubar){
        background-color: rgba(23, 23, 23, 0);
        border-bottom: solid 2px rgba(255, 255, 255, 0.119);
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
    a{
        text-decoration: none;
    }

    @media (max-width: 600px) {
        input {
            display: none;
        }
    }

    :deep(.p-menuitem-link){
        background-color: rgb(18, 18, 18) !important;
    }

   :deep(.p-menubar-root-list){
    border: none !important;
   } 
</style>