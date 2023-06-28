<template>
    <section ref="challege_1_section" id="challenge_1_section" class="w-full flex flex-col pt-48 pb-16 gap-y-32
            sm:pt-56 sm:gap-y-24
            lg:gap-y-40 lg:pt-64 lg:pb-28 xl:pt-72 xl:pb-36  ">
        <!-- section head title -->
        <h2 class="text-4xl font-bold sm:text-5xl text-center container mx-auto px-4">{{ $t('Was_Du_bekommst') }}</h2>
        <div id="challenge_1" class="flex flex-col gap-y-10 sm:gap-y-16 lg:gap-y-20">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">{{ $t('Challenge_1_Richtig') }}</h3>
            <div class="w-full">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full h-full max-h-[100vh]  object-fill cursor-pointer " 
                    src="/images/for_you/challenge_1_gif_1.gif">
            </div>
        </div>

        <UIBaseModal :show="showChallenge1" @close="showChallenge1 = false">
            <div class="w-full px-4 max-w-[77rem] mx-auto ">
                <div v-show="currentChallenge1Media === 'gif1' && showChallenge1" class="w-full relative">
                    <img ref="challenge_1_gif" 
                            class="w-full object-contain" 
                            src="/images/for_you/challenge_1_gif_2.gif">
                    <div class="w-full h-full absolute top-0 left-0 flex">
                        <div @click="playVideo('/videos/challenge_1_buy_online.mp4')" 
                             class="w-full h-full" :class="{'cursor-pointer':allowGif1Click}"></div>
                        <div @click="playVideo('/videos/challenge_1_buy_locally.mp4')" 
                             class="w-full h-full" :class="{'cursor-pointer':allowGif1Click}"></div>
                    </div>
                </div>

                <video v-show="currentChallenge1Media === 'video'" id="gamevedio" ref="chellenge_1_video" class="w-full" autoplay>
                    <source :src="'/videos/challenge_1_buy_online.mp4'" type="video/mp4">
                    <source :src="'/videos/challenge_1_buy_online.mp4'" type="video/ogg">
                    Your browser does not support the video tag.
                </video>

                <div v-show="currentChallenge1Media === 'gif2' && showChallenge1" class="w-full relative">
                    <img  class="w-full object-contain" 
                            src="/images/for_you/challenge_1_gif_3.gif">
                    <div class="w-full h-full absolute top-0 left-0 ">
                        <div @click="switchFromGif1" 
                             class="w-[65%] h-[25%]  absolute top-[18%] left-1/2 -translate-x-1/2" :class="{'cursor-pointer':allowGif1Click}"></div>

                        <div @click="playVideo('/videos/challenge_1_get_help.mp4')" 
                             class="w-[65%] h-[25%] absolute top-[50%] left-1/2 -translate-x-1/2" :class="{'cursor-pointer':allowGif1Click}"></div>
                    </div>
                </div>
            </div>
        </UIBaseModal>
    </section>
</template>

<script setup>

const challege_1_section = ref(null)

const showChallenge1 = ref(false)
const currentChallenge1Media = ref('gif1')//video , gif2
const challenge_1_gif = ref(null)
const chellenge_1_video = ref(null)
const chellenge_1_video_src = ref('/videos/challenge_1_buy_online.mp4')
const allowGif1Click= ref(false)
const videoPlayer = ref(null)


function switchFromGif1() {
    currentChallenge1Media.value = 'gif1'
    challenge_1_gif.value.src = ''
    setTimeout(() => {
        challenge_1_gif.value.src = '/images/for_you/challenge_1_gif_2.gif'
    }, 50);
    allowGif1Click.value=false
    showChallenge1.value = true
    setTimeout(() => {
        allowGif1Click.value = true
    }, 7500)
    
}
function playVideo(src) {
     videoPlayer.value.controls = true;
    if((allowGif1Click.value && currentChallenge1Media.value === 'gif1') ||currentChallenge1Media.value === 'gif2' ){
        chellenge_1_video.value.src = src

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
    if(!val){
        videoPlayer.value.controls = true;
        currentChallenge1Media.value = null
        chellenge_1_video.value.pause()
        chellenge_1_video.value.currentTime = 0;
    }else{
        currentChallenge1Media.value = 'gif1'
        challenge_1_gif.value.src = ''
        allowGif1Click.value=false
        setTimeout(() => {
            challenge_1_gif.value.src = '/images/for_you/challenge_1_gif_2.gif'
        }, 50);
    }
})


onMounted(()=>{
    videoPlayer.value = document.getElementById('gamevedio');

    // Hide the video controls initially
    videoPlayer.value.controls = true;

    // Show controls when video is loaded
    videoPlayer.value.addEventListener('loadeddata', () => {
        videoPlayer.value.controls = false;
    });
   
})


</script>