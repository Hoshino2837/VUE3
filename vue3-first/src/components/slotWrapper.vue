<template>
    <slots>
        <template #head>
            hhhhhhhh
        </template>
        <template #body>
            bbbbbbbb
        </template>
        <template #foot="number">
            <div @click="console.log(this)">
            ffffffff{{ number.number }}</div>
        </template>
    </slots>
</template>
<script setup lang="ts">
import slots from './slot.vue';
</script>
<style>
#head{
    color:#ffc0cb
}
</style>