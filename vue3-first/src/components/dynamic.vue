<template>
    <component :is="t"/>
    <component :is="h('div',null,'h函数')"/>
</template>
<script setup lang="ts">
    import {h} from 'vue';
    const t = h('div',null,'hhhhhh')
</script>
<style>
</style>