<template>
    <section ref="challenge_2" id="challenge_2_section" class="w-full pt-28 pb-16 space-y-20 lg:pb-28 xl:pb-36  ">
        <!-- section head title -->
        <div class="flex flex-col gap-y-8 lg:h-[calc(100vh-7rem)]">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">Challenge 2: Wo geht was?</h3>
            <div class="w-full max-w-[75rem] mx-auto">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full object-contain" 
                    src="/images/for_you/challenge_comming_soon.svg">
            </div>
        </div>
    </section>
</template>

<script setup>
const challenge_2 = ref(null)
const previousScrollPosition = ref(null)
const currentScrollPosition = ref(null)
let observer = null
let intersecting = false
function scrollToNext(e){
    // let challenge_2_rect = challenge_2.value.getBoundingClientRect()
    // currentScrollPosition.value = window.pageYOffset
    // console.log(challenge_2_rect.top , window.innerHeight)
    // console.log(currentScrollPosition.value , previousScrollPosition.value)

    if(currentScrollPosition.value > previousScrollPosition.value) {
        if(intersecting){
            let section = document.getElementById('challenge_1_section');
            section.scrollIntoView();
        }
    }else {
        if(intersecting){
            let section = document.getElementById('challenge_3_section');
            section.scrollIntoView();
        }
    }
    previousScrollPosition.value = currentScrollPosition.value

}




onMounted(()=>{
    window.addEventListener('scroll', scrollToNext)
    observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.75) {
            console.log('intersectiong')
            intersecting = true
        } else {
            intersecting = false
        }
    });
    observer.observe(challenge_2.value);
});

    previousScrollPosition.value = window.pageYOffset
})
onUnmounted(()=>{
    window.removeEventListener('scroll', scrollToNext)
})
</script>