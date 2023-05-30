<template>
    <div class="input-container flex items-center gap-x-2 px-4 py-2.5  bg-[#ECF0F1] rounded-lg">
        <textarea v-model="value" class="base-text-area grow focus:outline-none bg-[#ECF0F1]" rows="12" :placeholder="placeholder"></textarea>
        <!-- this slot is for icons or any buttons -->
        <slot />
    </div>
</template>

<script setup>
    const props = defineProps({
        placeholder:String
    })
    const emit = defineEmits(['update:modelValue'])
    const value = ref('')
    watch(value,(val)=>{
        emit('update:modelValue',val)
    })
</script>
<style scoped>
.base-text-area{
    resize: none;
}
</style>