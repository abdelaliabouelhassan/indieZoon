<template>
    <div class="input-container flex items-center gap-x-2 px-4 py-2.5  bg-[#ECF0F1] rounded-lg">
        <input class="grow focus:outline-none bg-[#ECF0F1]" type="text" :placeholder="placeholder">
        <!-- this slot is for icons or any buttons -->
        <slot />
    </div>
</template>

<script setup>
    const props = defineProps({
        placeholder:String
    })
</script>
