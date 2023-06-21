<template>
    <section ref="challege_1_section" id="challenge_1_section" class="w-full pt-28 pb-16 space-y-20 lg:pb-28 xl:pb-36  ">
        <!-- section head title -->
        <h2 class="text-4xl font-bold sm:text-5xl text-center container mx-auto px-4">Die ganze Stadt in deiner Hand</h2>
        <div  class="flex flex-col gap-y-8 lg:h-[calc(100vh-7rem)]">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">Challenge 1: Richtig kaufen?</h3>
            <div class="w-full max-w-[75rem] mx-auto">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full object-contain" 
                    src="/images/for_you/challenge_1_gif_1.gif">
            </div>
        </div>
        <UIBaseModal :show="showChallenge1" @close="showChallenge1 = false">
            <div class="w-full px-4 max-w-[77rem] mx-auto ">
                <div v-show="currentChallenge1Media === 'gif1' && showChallenge1" class="w-full relative">
                    <img ref="challenge_2_gif" 
                            class="w-full object-contain" 
                            src="/images/for_you/challenge_1_gif_2.gif">
                    <div class="w-full h-full absolute top-0 left-0 flex">
                        <div @click="playVideo('/videos/challenge_1_buy_online.mp4')" 
                             class="w-full h-full"></div>
                        <div @click="playVideo('/videos/challenge_1_buy_locally.mp4')" 
                             class="w-full h-full"></div>
                    </div>
                </div>

                <video v-show="currentChallenge1Media === 'video'" ref="chellenge_1_video" class="w-full" autoplay>
                    <source :src="chellenge_1_video_src" type="video/mp4">
                    <source :src="chellenge_1_video_src" type="video/ogg">
                    Your browser does not support the video tag.
                </video>

                <div v-show="currentChallenge1Media === 'gif2' && showChallenge1" class="w-full relative">
                    <img  class="w-full object-contain" 
                            src="/images/for_you/challenge_1_gif_3.gif">
                    <div class="w-full h-full absolute top-0 left-0 ">
                        <div @click="playVideo('/videos/challenge_1_buy_online.mp4')" 
                             class="w-[65%] h-[25%]  absolute top-[18%] left-1/2 -translate-x-1/2"></div>
                        <div @click="navigateTo('for-traders')" 
                             class="w-[65%] h-[25%] absolute top-[50%] left-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </div>
        </UIBaseModal>
    </section>
</template>

<script setup>

const challege_1_section = ref(null)

const showChallenge1 = ref(false)
const currentChallenge1Media = ref('gif1')//video , gif3
const challenge_2_gif = ref(null)
const chellenge_1_video = ref(null)
const chellenge_1_video_src = ref('/videos/challenge_1_buy_online.mp4')
const allowGif1Click= ref(false)

const previousScrollPosition = ref(null)
const currentScrollPosition = ref(null)

function switchFromGif1() {
    showChallenge1.value = true
    setTimeout(() => {
        allowGif1Click.value = true
    }, 7500)
    
}
function playVideo(src) {

    if(allowGif1Click.value ){
        chellenge_1_video_src.value = src

        allowGif1Click.value = false
        currentChallenge1Media.value = 'video'
        chellenge_1_video.value.play()
        
    }
    chellenge_1_video.value.onended = function() {
        if(showChallenge1.value){
            currentChallenge1Media.value = 'gif2'
        }
    }
    
   
}




watch(showChallenge1, (val)=>{
    console.log('allowGif1Click before',allowGif1Click.value)
    allowGif1Click.value=false
    console.log('allowGif1Click after',allowGif1Click.value)
    if(!val){
        currentChallenge1Media.value = null
        chellenge_1_video.value.pause()
        chellenge_1_video.value.currentTime = 0;
    }else{
        currentChallenge1Media.value = 'gif1'
        challenge_2_gif.value.src = ''
        setTimeout(() => {
            challenge_2_gif.value.src = '/images/for_you/challenge_1_gif_2.gif'
        }, 50);
    }
})

function scrollToNext(e){
    let challege_1_rect = challege_1_section.value.getBoundingClientRect()
    currentScrollPosition.value = window.pageYOffset
    if((currentScrollPosition.value > previousScrollPosition.value) && (challege_1_rect.top  < window.innerHeight - challege_1_section.value.offsetHeight)){
        // const section = document.getElementById('challenge_2_section');
        // section.scrollIntoView();
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