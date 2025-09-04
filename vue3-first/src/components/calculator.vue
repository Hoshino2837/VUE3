<template>
    <input v-model.number="countmax" placeholder="请输入数量" type="number" min ="1"></input>
    <button @click="starTime">确定 </button>
    <div>商品价格{{ price }},您买了{{ count }}个,应付款{{ pay }}</div>
</template>
<script setup lang="ts">
import {ref,computed, onMounted, watch} from 'vue';
let price = ref(30);
let count = ref(0);
let countmax = ref(1); 
let timer :number|null = null;

const starTime =()=>{
    if(timer){clearInterval(timer)};
    count.value=0;
    timer =window.setInterval(()=>{
    if(count.value<countmax.value){
    count.value+=1
}
    else if(timer){clearInterval(timer);} },50)}
onMounted(()=>{
    starTime();
   })
 let pay = computed(()=>{return price.value*count.value;});
 watch([price,count,pay],([newPrice,newCount,newPay],[oldPrice,oldCount,oldPay])=>{
    console.log("单价","数量","总价");
    console.log(price,count,pay);
    console.log(newPrice,newCount,newPay);
    console.log(oldPrice,oldCount,oldPay);
})
</script>