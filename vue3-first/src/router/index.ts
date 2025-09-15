import { createRouter,createWebHistory } from "vue-router";
import About from '../pages/about.vue';
import Home from "../pages/home.vue";
import e from "../pages/e.vue";
import test from '../pages/test.vue'
import App from "../App.vue";
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
    },
  {
    path:'/test',
    name:'test',
    component:test
  }];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
router.beforeEach((to,from,next)=>{
    console.log(from,to);
    if(to.name==="home"||to.name==="about"){
    next();}
    else if(0.5>Math.random()){
        console.log()
        next();
    }
    else{
        next('/')
    }
});
router.beforeResolve((to,from,next)=>{
    // alert("加载即将完成！");
    next();
})
const htmlElement = document.createElement("div");
htmlElement.id = "routerInfo";
// 给路由信息容器加样式（方便识别）
htmlElement.style.marginTop = "10px";
htmlElement.style.paddingTop = "10px";
htmlElement.style.borderTop = "1px solid #eee";

const app = document.getElementById("app");
if (app) {
  app.appendChild(htmlElement); // 插入到 #app 内部的「最后位置」
} else {
  document.body.appendChild(htmlElement); // 备用：插入到 body
}

router.afterEach((to, from) => {
  const infoContainer = document.getElementById("routerInfo");
  if (infoContainer) {
    infoContainer.innerHTML = ""; // 每次跳转「清空旧内容」，避免堆积
    const hr = document.createElement("hr");
    const text = document.createTextNode(`从${from.path}到${to.path}`);
    infoContainer.appendChild(hr);
    infoContainer.appendChild(text);
    infoContainer.appendChild(hr.cloneNode());
  }
});
export default router;