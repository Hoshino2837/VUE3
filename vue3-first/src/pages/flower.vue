<template>
  <div>{{ route.query.name }}</div>
  <!-- 用容器包裹所有内容，确保整体居中 -->
  <div class="content-container">
    <!-- 标题区域 -->
    <div style="margin: 50px 0;">
      <h1 style="color: #571602; 
              background-color: rgba(175, 175, 231, 0.5); 
              width: 300px; 
              margin: 0 auto; 
              text-align: center;
              font-family: 'FZKaTong-M19S',  serif;
              text-shadow:  -2px -2px 0 #ffffff,  
          2px -2px 0 #ffffff,
         -2px 2px 0 #ffffff,
         2px 2px 0 #ffffff;
              border:5px ridge lightblue;
              padding: 2px;">
        不败世界与终焉之<span style="color:#b40a51;font-size:30px;">花</span>
      </h1>
      <br />
      <hr />
    </div>

    <!-- 图片区域 -->
    <img
      src="https://p1.ssl.qhimg.com/t01828acd5574b3212d.jpg"
      alt="不败世界与终焉之花"
      style="width: 100%; 
                max-width: 800px; 
                display: block; 
                margin: 0 auto; 
                border: 5px solid #ffc0cb; 
                border-radius: 10px;"
    />

    <!-- 视频链接 -->
    <div style="text-align: center; margin: 20px 0;">
      <a
        href="https://www.bilibili.com/video/BV1Ep4y1k7H5/?spm_id_from=333.337.search-card.all.click"
        class="hoshino"
        style="border: 2px solid #976d74; 
                background-color: rgb(198, 241, 198);
                display: inline-block; 
                padding: 5px 15px; 
                border-radius: 5px;"
      >
        点击查看视频
      </a>
    </div>
    <hr />
    <br />

    <!-- 文本描述区域 -->
    <div
      style="margin: 20px auto;
                margin: 20px 0; 
                background-color: rgba(255, 255, 255, 0.5);
                box-shadow:5px 5px 5px 5px rgb(34, 2, 2,0.3);
                height: 500px;
                overflow: auto;"
    >
      <div
        style="font-size: 20px;
              font-family: '幼圆',serif; 
                color: rgb(233, 200, 140);
                padding: 15px; 
                border-radius: 8px;"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;《不败世界与终焉之花》（枯れない世界と終わる花）是新社SWEET&TEA开发并发行的一款ADV游戏，于7月25日官网上线，并于2016年11月25日正式发售，主要配音有沢泽砂羽（桐谷华）、夏峰いろは等。
        《不败世界与终焉之花》中玩家跟随主角肖和莲的视角，探索一个被花朵覆盖的美丽街区。
        <br /><br />
        &nbsp;&nbsp;&nbsp;&nbsp;游戏以咖啡馆为起点，玩家结识了春等角色，并在咖啡馆二楼住宿。随着故事的推进，玩家揭开了春与神秘小女孩的秘密，以及春如何在一个残酷的世界中生存。玩家的选择将影响故事走向，揭示春的过去和街区隐藏的秘密。<br />

        <br />
        <hr
          style="width: 90%; margin: 15px auto; border: none; height: 1px; background: #6bafe7;"
        />

        被万紫千红的花朵埋没了的美丽街区。<br /><br />
        肖与莲一起来到了这个街区，认识了在咖啡馆工作的春等几人。<br /><br />
        得到了住宿在咖啡馆的2楼的工作机会，某一天，<br /><br />
        圣追踪着在深夜里独自出外的春。<br /><br />
        在远离街区的、视野里尽是花朵的土丘的中央，<br /><br />
        圣在皎月淡淡地照耀着的大树之下，目睹了春所拥抱着的小女孩变成了花朵的瞬间。<br /><br />
        注意到肖的春，眯着眼注视着迷乱地盛放着的美丽的花丛，寂寞地微笑道：<br /><br />
        「在这样的世界上，我就是这样子一直活下来的。<br /><br />
        但是我仍然想要活下去。就算这要交换别人的性命」<br /><br />
        跟春一样仰视着飞散的花瓣，<br /><br />
        「就算这个世界有怎样强硬的要求。<br /><br />
        就算有多少人说不能饶恕春也好——」<br /><br />
        作为这句话的替代，肖说道：<br /><br />
        「——就算是这样，我仍旧祈求这样的世界的终结」<br /><br />
      </div>
      <hr />
    </div>
    <div class="gd">星野固定定位测试</div>
    <div class="jd">星野绝对定位测试</div>
    <div class="xd">星野相对定位测试</div>
  </div>
  <div class="gg">
    <img
      src="https://th.bing.com/th/id/R.cac5e863acd2944d00893c13ebdb0a33?rik=iFcepCtNXi6DJQ&pid=ImgRaw&r=0"
      alt="广告"
      style="width: 100%; 
            position:absolute;
            left:0px;
            top:40px"
    />
    <div
      style="
            width:100%;
            position:absolute;
            bottom:3px;
            left:10px;"
    >
      星野测试,这是个广告
    </div>
    <button
      @click="closeAd"
      style="position:absolute;
            right:0px;
            top:5px;"
    >
      x
    </button>
  </div>

  <!-- 页脚 -->
  <footer>
    <p style="font-size: 12px">© 2025 星野网页测试. 保留所有权利.</p>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
// 处理“关闭广告”的逻辑（替代原HTML的onclick）
const closeAd = () => {
  const adElement = document.querySelector('.gg') as HTMLElement;
  if (adElement) {
    adElement.style.display = 'none';
  }
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
 
}

.hoshino {
  color: rgb(80, 80, 225);
  font-size: 30px;
  text-align: center;
  font-family: '华文琥珀', serif;
}

.hoshino:hover {
  color: rgb(105, 40, 216);
}

.hoshino:active {
  color: rgb(40, 40, 180);
}

footer {
  margin-top: auto;
  text-align: center;
  color: #666;
  background-color: white;
  padding: 10px;
}

a {
  display: block;
  margin: 20px auto;
  width: fit-content;
}

p {
  font-size: 12px;
}

.content-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.gd {
  width: 15px;
  position: fixed;
  left: 12px;
  top: 200px;
  color: #7b7de9;
}

.jd {
  width: 200px;
  position: absolute;
  left: 40px;
  top: 200px;
  color: #e063a8;
}

.xd {
  width: 200px;
  position: relative;
  left: -15px;
  top: 20px;
  color: #0d0f7b;
}

.gg {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
  text-align: center;
  animation: anim 3s infinite ease-in-out alternate;
  position: fixed;
  left: 50px;
  top: 50%;
}

@keyframes anim {
  0% {
    color: lightpink;
    background-color: lightblue;
    font-size: 18px;
  }

  25% {
    color: lightblue;
    background-color: lightgreen;
  }

  50% {
    color: lightgreen;
    background-color: lightcoral;
  }

  75% {
    color: #7b7de9;
    background-color: lightpink;
  }

  100% {
    color: lightcoral;
    background-color: #7b7de9;
    color:#FFB7C5
  }
}
</style>