<script setup>
import {  reactive, ref, watch } from 'vue'
import Head from './components/head.vue';

const obj=reactive
({
  name:"lai",
  age:20
})
const add=()=>{
  obj.age++
}
</script>

<template>
   <Head :="obj"/>
   <button @click="add">+++</button>
   
</template>
  
<style scoped>

</style>
