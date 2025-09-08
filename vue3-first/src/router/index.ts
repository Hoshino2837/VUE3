import { createRouter,createWebHistory } from "vue-router";
import About from '../pages/about.vue';
import Home from "../pages/home.vue";
import e from "../pages/e.vue";
// import {h} from 'vue';
// import Component from "../components/component.vue";
const routes =[
    {path:'/',
     name:"home",
     component:Home
    },
    {path:'/about',
     name:'about',
     component:About
    },
    {path:'/e',
     name:'e',
     component:e
    }];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;