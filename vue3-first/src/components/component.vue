<template>
    <div>
        <div>价格：{{ price }}</div>
        <div>数量：{{ count }}</div>
        <div>单价：{{ price*count }}</div>
        <div @click="emit('update',20)">更新</div>
        
    </div>
</template>
<script setup lang="ts">
    const emit = defineEmits<{change:[],update:[value:number]}>();
    defineProps<{price:number,count:number}>()
</script>
<style>
</style>