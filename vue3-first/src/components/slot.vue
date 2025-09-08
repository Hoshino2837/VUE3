<template>
    <div>
        <p>slot test by hoshino</p>
        <slot></slot>
        <div id="head">
        <slot name="head"></slot>
        </div>
        <div id="body">
        <slot name="body"></slot>
        </div>
        <div id="foot">
        <slot name="foot" number="20150905"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style>
#head{
    color:black
}
#body{
    color:green
}
#foot{
    color:blue
}
</style>