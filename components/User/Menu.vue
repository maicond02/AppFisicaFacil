<template>
    <div>
        <Avatar :label="userStore.data.avatar" size="large" style="background-color:#4caf4f; color: #ffffff"  />
    </div>
</template>

<script>

    import { useUserStore } from '~/store/user'

    export default{
        data(){
            return{
                userStore: useUserStore(),
            }
        }
    }
</script>