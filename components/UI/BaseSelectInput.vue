<template>
<div class="relative flex">

    <div @click="toggleList" class="base-select-input w-full flex items-center justify-between gap-x-2 px-4  py-1 h-12 bg-[#ECF0F1] rounded-lg z-20">
        <!-- <input class="grow focus:outline-none bg-[#ECF0F1]" :type="type" :placeholder="placeholder"> -->
        <div class="text-black/30 font-medium truncate" v-if="value == ''">{{placeholder}}</div>
          <div class="text-black font-medium truncate" v-else>{{value}}</div>
        <!-- this slot is for icons or any buttons -->
        <svg :class="{'rotate-0':showList}" class="w-4 h-4 -rotate-90 transition-all duration-150 ease-in-out" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
            </g>
        </svg>
    </div>
    <ul :class="{'hidden':!showList}" class="w-full left-0 absolute top-10 pt-2 flex flex-col rounded-b-lg bg-[#e6e6e6] opacity-100 overflow-hidden z-10 ">
        <li @click="selectOption(option)" v-for="(option,index) in options" :key="index" class="px-4 py-2 cursor-pointer hover:bg-primary/20">{{option.text}}</li>
        
    </ul>
</div>
</template>
<style scoped>
    .base-select-input{
        box-shadow: inset 2px -4px 5px rgba(0, 0, 0, 0.078);
        background: linear-gradient(to top,#ECF0F1 80% , #faffff);
    }
</style>
<script setup>
    const props = defineProps({
        placeholder:String,
        // [{text , value}, {},.......]
        options:{
            type:Array,
            // required:true
        } 
    })
    const emit = defineEmits(['update:modelValue'])
    const type = ref('password')
    const showList = ref(false)
    const value = ref('')
    function toggleList() {
        showList.value = !showList.value
    }
    function selectOption(option) {
        value.value = option.value
        showList.value = false
        emit('update:modelValue',option.value)
    }
   


</script>
