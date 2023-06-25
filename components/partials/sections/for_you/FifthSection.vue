<template>
    <section ref="challenge_2" id="challenge_2_section" class="w-full pt-28 pb-16 space-y-20 lg:pb-28 xl:pb-36  ">
        <!-- section head title -->
        <div class="flex flex-col gap-y-10 sm:gap-y-16 lg:gap-y-20">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">{{ $t('Challenge_2_geht') }}</h3>
            <div class="w-full">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full  object-contain" 
                    src="/images/for_you/challenge_comming_soon.svg">
            </div>
        </div>
    </section>
</template>

<script setup>
const challenge_2 = ref(null)
const previousScrollPosition = ref(null)
const currentScrollPosition = ref(null)

function scrollToNext(e){
    let challenge_2_rect = challenge_2.value.getBoundingClientRect()
    currentScrollPosition.value = window.pageYOffset
    // console.log('challenge_2_rect.bottom',challenge_2_rect.bottom)
    // console.log('challenge_2_rect.top',challenge_2_rect.top)
    // console.log('window.innerHeight',window.innerHeight)
    // console.log('scrollY',window.pageYOffset)
    if((currentScrollPosition.value > previousScrollPosition.value) 
        && (challenge_2_rect.bottom > 100)
        && (challenge_2_rect.top < 0 )
        ){
        // const section = document.getElementById('challenge_3_section');
        // section.scrollIntoView({behavior:'smooth'});
    }else if((currentScrollPosition.value < previousScrollPosition.value) 
        && (challenge_2_rect.bottom > 100)
        && (challenge_2_rect.top > 100 )
        ){
        // const section = document.getElementById('challenge_1_section');
        // section.scrollIntoView({behavior:'smooth',});
    }
    previousScrollPosition.value = currentScrollPosition.value

}

onMounted(()=>{
    window.addEventListener('scroll', scrollToNext)
    previousScrollPosition.value = window.pageYOffset
})
onUnmounted(()=>{
    window.removeEventListener('scroll', scrollToNext)
})
</script>