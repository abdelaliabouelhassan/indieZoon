<template>
    <!-- default background is white -->
    <!-- default text color is primary -->
    <button class="flex items-center justify-center p-2 transition-all duration-300 ease-out text-white  rounded-md  bg-primary
           font-semibold overflow-hidden base-button"
        >
       
        <!--  the content determins the amount of padding or height -->
        <!--  the content determins the text color -->
        <slot/>

    </button>
</template>


<style scoped>
    .base-button{
        box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.25);
    }
   
</style>

