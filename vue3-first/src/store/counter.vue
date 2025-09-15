<template>

</template>
<script setup lang="ts">
    import {defineStore} from 'pinia';
    export const useCountStore = defineStore('count',{
        state:()=>({
            count:0,
        }),
        getters:{
            statePuls(state){
                return state.count+=1;
            },
        },
        actions:{}
    })
</script>