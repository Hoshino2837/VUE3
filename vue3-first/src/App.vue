<script setup lang="ts">
// import {ref} from 'vue';
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
import { useRouter,useRoute } from 'vue-router';
const router = useRouter();
const route =useRoute();
</script>

<template>
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

  <div id="app">
    <!-- 导航栏 -->
    <div class="nav-container">
      <router-link to="/" class="nav-link">主页</router-link>|
      <router-link to="/about" class="nav-link">about</router-link>|
      <router-link to="/e" class="nav-link">e</router-link>
    </div>
    <!-- query 传入参数，这里是路径 -->
      <button @click="router.push({path:'/flower',query:{name:'不败世界与终焉之花'}})" id="button">进入flower</button>
    <!-- 路由页面内容 -->
    <router-view class="router-view" />
    <!-- 路由信息会被 JS 动态插入到 #app 末尾 -->
  </div>
</template>

<style>
#button{
  background-color: #86d4ef;
  color: #f099a8;
  border : solid 2px #bbb;
  border-radius:18px;
}
body{
   background-image: url('https://s1.aigei.com/prevfiles/4c67c043056d45f7b295b596515c4a3f.jpg?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:wDQRxyQSkbBgEoKZK430FQND2uA=');
}
</style>