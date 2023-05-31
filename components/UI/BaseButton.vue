<template>
    <button class="flex items-center justify-center px-8 py-3 transition-all duration-300 ease-out text-white rounded-md  bg-primary
        font-semibold overflow-hidden base-button">
        <slot/>
    </button>
</template>


<style scoped>
    .base-button{
        box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.25);
    }
   
</style>

