<template>
    <div>{{ a }}</div>
    <button @click="countP">加1</button>
</template>
<script setup lang="ts">
import { watch, watchEffect, watchPostEffect, watchSyncEffect,ref, } from 'vue';
    let a = ref(0);
    let countP=()=>{
        console.log("------------")
        a.value+=1;
        return a.value;
        };
    watch([a],(newA)=>console.log('watch',a,newA));
    watchEffect(()=>console.log('watchEffect',a.value));
    watchPostEffect(()=>console.log('watchPostEffect',a.value));
    watchSyncEffect(()=>console.log('watchSyncEffect',a.value));
</script>
<style>
</style>