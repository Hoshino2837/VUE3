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
      <div class="select">
    <router-link to="/" class="nav-link">主页</router-link>|
    <router-link to="/about" class="nav-link">about</router-link>|
    <router-link to="/e" class="nav-link">e</router-link>
    <router-view/>
      </div>
  </div>
</template>

<style>
/* 容器样式（直观看到导航区域） */
.select {
  padding: 20px;
  background: #f9f9f9; /* 灰色背景 */
  border: 2px solid #44ffcc ;
  border-radius:20px; /* 红色边框，确认容器范围 */
  color: #ffc0ff;
}

/* 关键：用“父容器 + 标签 + 类名”的组合选择器，覆盖全局a样式 */
.select a.nav-link {
  color: aqua !important; /* 强制覆盖全局a的颜色 */
  text-decoration: none !important; /* 强制去掉下划线 */
  margin: 0 10px; /* 链接间距 */
  font-size: 18px; /* 加大字体，方便观察 */
}

/* 激活状态样式（当前路由匹配时） */
/* .select a.nav-link.router-link-exact-active {
  color: #ffc0cb !important; /* 激活时粉色 */
  /* font-weight: bold; /* 加粗突出 */

</style>
