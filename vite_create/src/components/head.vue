<script setup>
    
    const obj=defineProps({
        name:String,
        age:Number
    })
    console.log(obj)
</script>

<template>
    <h1>header</h1>{{ obj.age }}
    
</template>

<style scoped></style>