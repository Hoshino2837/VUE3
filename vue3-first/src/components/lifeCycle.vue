<template>
    <div>
        <div>
        {{ a }}
        </div>
    <button @click="update">更新</button>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated,ref} from 'vue';
let a = ref(0);
let update = ()=>{a.value+=1;return a.value;}
//组件挂载
onMounted(()=>{console.log("组件挂载")});
//组件更新
onUpdated(()=>{console.log("组件更新")});
//组件卸载
onUnmounted(()=>{console.log("组件卸载")});
</script>
<style>
</style>