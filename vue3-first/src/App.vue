<script setup lang="ts">
import {ref} from 'vue';
import router from './router';
// import HelloWorld from './components/HelloWorld.vue';
// import basic from './components/basic.vue';
// import calculator from './components/calculator.vue';
// const isOpen=ref(true);
// import watch from './components/watch.vue';
// import lifeCycle from './components/lifeCycle.vue';
// import component from './components/component.vue';
// let isonMounted=ref(true);
// let price =ref(4);
// let count =ref(5);
// let change = ()=>{count.value+=1}
// import slots from './components/slotWrapper.vue';
// import dynamic from './components/dynamic.vue';
</script>

<template>
  <div>
    <!-- <basic/>
  <button @click="isOpen=!isOpen">点击</button>
  <HelloWorld :msg="isOpen?'Vite + Vue':'hhhhh'" :age=1 />
  <calculator/>
   <watch/>
   <lifeCycle v-if="isonMounted"/>
   <button @click="isonMounted=!isonMounted">{{ isonMounted? "onUnMount":"onMount" }}</button>
    <component :price='price' :count='count' v-on:update="(v)=>(count+=v)"/>
    <div>
      <button @click="change">点击</button>
    </div> -->
    <!-- <slots/> -->
     <!-- <dynamic/> -->
    <router-link to="/">主页</router-link>|
    <router-link to="/about">about</router-link>|
    <router-link to="/e">e</router-link>
    <router-view/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
