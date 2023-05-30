<template>
    <div class="input-container flex items-center gap-x-2 px-4 py-2.5  bg-[#ECF0F1] rounded-lg">
        <input class="grow focus:outline-none bg-[#ECF0F1]" :type="type" :placeholder="placeholder">
        <!-- this slot is for icons or any buttons -->
        <svg @click="toggleVisibility" class="w-8 cursor-pointer" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M23.5897 12.007C20.7318 16.0958 16.7233 18.6287 12.3066 18.6287C7.88982 18.6287 3.88133 16.0958 1.02344 12.007C3.86278 7.91818 7.87126 5.36719 12.288 5.36719C16.7047 5.36719 20.7132 7.91818 23.5711 12.007H23.5897Z" stroke="#1A2933" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3071 14.701C13.8444 14.701 15.0908 13.486 15.0908 11.9872C15.0908 10.4884 13.8444 9.27344 12.3071 9.27344C10.7697 9.27344 9.52344 10.4884 9.52344 11.9872C9.52344 13.486 10.7697 14.701 12.3071 14.701Z" stroke="#1A2933" stroke-linecap="round" stroke-linejoin="round"/>
                <line v-if="type === 'text'" x1="0.646447" y1="21.6464" x2="25" y2="0.646447" stroke="black"/>
            </g>
        </svg>

    </div>
</template>

<script setup>
    const props = defineProps({
        placeholder:String
    })
    const type = ref('password')
    function toggleVisibility() {
        if(type.value === 'text'){
            type.value = 'password'
        }else{
            type.value = 'text'
        }
    }
</script>
