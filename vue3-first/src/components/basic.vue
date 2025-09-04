<template>
    <div>{{ msg }}{{ massage.value }}</div>
</template>
<script setup lang="ts">
    import {reactive, ref} from 'vue'
    let msg = ref("星野");
    let massage = reactive({value:"宸"});

    setTimeout(()=>{
        msg.value = "月野",
        massage.value="瑶"
    },2000)
</script>
<style>
</style>