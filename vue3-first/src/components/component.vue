<template>
    <div>
        <div>价格：{{ price }}</div>
        <div>数量：{{ count }}</div>
        <div>单价：{{ price*count }}</div>
        
    </div>
</template>
<script setup lang="ts">
    defineEmits<{change:[],update:[value:number]}>();
    defineProps<{price:number,count:number}>()
</script>
<style>
</style>