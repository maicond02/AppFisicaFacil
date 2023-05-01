<template>
    <div>
        <Card class="card-1">
            <template #content>
                <div>
                    <card class="flex justify-content-center flex-wrap card-container card-tp1">
                        <div>
                            <p>O que é Física e qual a sua importância?</p>
                        </div>
                    </card>
                </div>
                <br>
                <div>
                    <card class="card-tp2">
                        <div>
                            <p>O que é a Lei de Newton e como ela se aplica na vida cotidiana?</p>
                        </div>
                    </card>
                </div>
                <br>
                <div>
                    <card class="card-tp3">
                        <div>
                            <p>O que é energia e como ela é transferida entre objetos?</p>
                        </div>
                    </card>
                </div>
                <br>
                <div>
                    <Card class="card-tp4">
                        <div>
                            <p>O que é a Teoria da Relatividade de Einstein?</p>
                        </div>
                    </Card>
                </div>
                <br>
                <div>
                    <InputText class="p-inputtext-lg" type="text" v-model="value" placeholder="Digite aqui sua dúvida" />
                </div>
                
            </template>
        </Card>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                
            }
        },
        methods:{

        }
    }

    

</script>

<style scoped>
    .card-1{
        background-color: rgba(255, 255, 255, 0);
        width: 110rem;
    }

    .card-tp1{
        background-color:rgba(255, 255, 255, 0.119);
        width: 80rem;
    }
    .card-tp2{
        background-color:rgba(255, 255, 255, 0.119);
        width: 80rem;
    }
    .card-tp3{
        background-color:rgba(255, 255, 255, 0.119);
        width: 80rem;
    }
    .card-tp4{
        background-color:rgba(255, 255, 255, 0.119);
        width: 80rem;
    }
    .p-inputtext-lg{
        width: 80rem;
        
    }

</style>