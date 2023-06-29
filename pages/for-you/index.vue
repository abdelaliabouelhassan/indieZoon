<template>
    <div  >
        <PartialsSectionsForYouFirstSection />
        <PartialsSectionsForYouSecondSection />
        <PartialsSectionsForYouThirdSection />
        <FourthSection v-if="show"/>
        <PartialsSectionsForYouFifthSection />
        <PartialsSectionsForYouSixthSection />
        <PartialsSectionsForYouSeventhSection />
        <PartialsSectionsForYouEightSection />
    </div>
</template>
<script setup>
 import FourthSection from "@/components/partials/sections/for_you/FourthSection.vue"
 const show = ref(false)
 onMounted(()=>{
    show.value = true;
 })

 onUnmounted(()=>{
    show.value = false
 })
</script>