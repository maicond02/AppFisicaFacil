<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
            </template>
            <template #end>
                <div class="flex flex-wrap">
                    <nuxt-link to="/user/login">
                        <Button label="Entrar" text raised severity="secondary"/>
                    </nuxt-link>  
                    <nuxt-link to="/user/register">
                        <Button label="Registrar" class="ml-2"   text raised severity="secondary"/>
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
                     label:'Aulas',
                  },
                  {
                     label:'Métodos',
                  },
                  {
                     label:'Sobre',
                  },
                  {
                     label:'Suporte',
                  },
                ]
            }
        }
    }
</script>

<style scoped>
    :deep(.p-button-label){
        color: rgba(255, 255, 255, 0.6);
    }
    :deep(.p-menubar){
        background-color: rgba(255, 255, 255, 0);
        border-bottom: solid 1px rgba(255, 255, 255, 0.034);
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
</style>