<template>
    <section ref="messages_section" class="py-32">
        <div class="w-full flex flex-col gap-y-2.5 max-w-[58rem] mx-auto px-4 text-sm sm:text-base">

            <!-- message 1 -->
            <div class="message opacity-0 w-fit relative  flex flex-col items-end self-end">
                <img class="z-0 h-full object-contain absolute -top-0.5 left-0 scale-x-[115%] translate-x-1 sm:hidden" src="/images/for_you/message_green_bubble.svg" alt="message_green_bubble">
                <img class="z-0 w-full object-fill absolute top-1 left-0  scale-x-[103%] -translate-x-2.5 hidden sm:block" src="/images/for_you/message_green_bubble_sm.svg" alt="message_green_bubble">
                
                <p class="z-10  pr-4 pt-4 w-[18.5rem] sm:w-[27.5rem]">
                    {{$t('Digitalisierung_auch')}}
                </p>
                <div class="z-10 w-full pr-5 pb-9 flex items-center justify-end gap-x-1 text-sm">
                    <div class="text-[#B4AEAE]">18:07</div>
                    <svg class="w-8 h-6" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99625 16.1698L4.82625 11.9998L3.40625 13.4098L8.99625 18.9998L20.9963 6.99984L19.5863 5.58984L8.99625 16.1698Z" fill="#2997FC"/>
                        <path d="M15.9963 16.1698L11.8262 11.9998L10.4062 13.4098L15.9963 18.9998L27.9963 6.99984L26.5863 5.58984L15.9963 16.1698Z" fill="#2997FC"/>
                    </svg>
                </div>
            </div>

            <!-- message 2 -->
            <div class="message opacity-0 w-fit relative flex items-center gap-x-3 pb-7 md:flex-col md:pb-12">
                <img class="z-0 w-full object-contain absolute -top-2.5 left-0 scale-y-[75%] sm:-top-3 md:scale-x-[130%] md:translate-x-10 md:scale-y-[140%] md:top-1" src="/images/for_you/message_blue_bubble.svg" alt="message_green_bubble">
                <p class="z-10  pl-4 pt-3 text-white grow w-full font-light">
                    {{ $t('Haha') }}
                </p>
                <div class="text-sm z-10 flex pt-3  pr-4 items-center justify-end gap-x-1 grow-0 md:pt-0 md:ml-auto md:absolute  md:-right-[28%] md:bottom-6 ">
                    <div class="text-[#B4AEAE]">18:07</div>
                </div>
            </div>
            
            <!-- message 3 -->
            <div  class="message opacity-0 w-fit relative flex flex-col items-end self-end">
                <img class="z-0 h-full object-fill absolute -top-0.5 left-0 scale-x-[150%] translate-x-10 sm:scale-x-[154%] sm:translate-x-[3.3rem] md:hidden" src="/images/for_you/message_green_bubble.svg" alt="message_green_bubble">
                <img class="z-0 w-full object-fill absolute -top-2 left-0 scale-y-[85%] scale-x-[103%] -translate-x-2.5 hidden md:block" src="/images/for_you/message_green_bubble_sm.svg" alt="message_green_bubble">
                 
                <p class="z-10 pr-4  pt-4 w-[20rem] sm:w-[22.5rem] md:w-[33.5rem]">
                    {{ $t('Wissen_wo_heute') }}
                </p>
                <div class=" text-sm z-10 w-full pr-5 pb-8 flex items-center justify-end gap-x-1">
                    <div class="text-[#B4AEAE]">18:07</div>
                    <svg class="w-8 h-6" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99625 16.1698L4.82625 11.9998L3.40625 13.4098L8.99625 18.9998L20.9963 6.99984L19.5863 5.58984L8.99625 16.1698Z" fill="#2997FC"/>
                        <path d="M15.9963 16.1698L11.8262 11.9998L10.4062 13.4098L15.9963 18.9998L27.9963 6.99984L26.5863 5.58984L15.9963 16.1698Z" fill="#2997FC"/>
                    </svg>
                </div>
            </div>

            <!-- message 4 -->
            <div class="message opacity-0 w-fit relative flex flex-col items-center sm:flex-row md:flex-col pb-8 md:pb-14">
                <img class="z-0 w-full object-fill absolute -top-5 left-0 scale-y-[76%] sm:hidden" src="/images/for_you/message_blue_bubble_sm.svg" alt="message_green_bubble">
                <img class="z-0 w-full object-fill absolute -top-3.5  left-0 scale-y-[70%] hidden sm:block md:scale-x-[114%] md:translate-x-8  md:scale-y-[125%] md:top-0" src="/images/for_you/message_blue_bubble_md.svg" alt="message_green_bubble">
                <p class="z-10  px-4 pt-3 text-white grow font-light w-[19.5rem] sm:w-[28rem] sm:pr-3">
                    {{$t('Verrückt')}}
                </p>
                <div class="w-full  text-sm z-10 pr-6 sm:pr-4 flex justify-end gap-x-1  mt-auto  sm:w-fit md:absolute md:bottom-7 md:-right-[13%]">
                    <div class="text-[#B4AEAE]">18:07</div>
                </div>
            </div>

            <!-- message 5 -->
            <div class="message opacity-0 w-fit relative flex flex-col items-end self-end">
                <img class="z-0 h-full object-fill absolute top-0 left-0 scale-y-[106%] scale-x-[106%] -translate-x-2 sm:hidden" src="/images/for_you/message_green_bubble.svg" alt="message_green_bubble">
                <img class="z-0 w-full object-fill absolute top-2 left-0  scale-x-[103%] scale-y-[106%] -translate-x-2.5 hidden sm:block" src="/images/for_you/message_green_bubble_sm.svg" alt="message_green_bubble">
                <p class="z-10 pr-4  pt-4 w-[16rem] sm:w-[25rem]">
                   {{ $t('Mal_so_einfach') }}
                </p>
                <div class="text-sm z-10 w-full pr-5 pb-8 flex items-center justify-end gap-x-1">
                    <div class="text-[#B4AEAE]">18:07</div>
                    <svg class="w-8 h-6" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99625 16.1698L4.82625 11.9998L3.40625 13.4098L8.99625 18.9998L20.9963 6.99984L19.5863 5.58984L8.99625 16.1698Z" fill="#2997FC"/>
                        <path d="M15.9963 16.1698L11.8262 11.9998L10.4062 13.4098L15.9963 18.9998L27.9963 6.99984L26.5863 5.58984L15.9963 16.1698Z" fill="#2997FC"/>
                    </svg>
                </div>
            </div>

            <!-- message 6 -->
            <div class="message opacity-0 w-fit relative flex items-center gap-x-3 pb-6 ">
                <img class="z-0 w-full object-contain absolute -top-1 left-0 scale-y-[84%]" src="/images/for_you/message_blue_bubble.svg" alt="message_green_bubble">
                <p class="z-10  pl-4 pt-3 text-white grow w-full font-light">
                    {{ $t('Ansprüche') }}  
                </p>
                <div class="text-sm z-10 flex pt-3 sm:pt-3.5 pr-4 items-center justify-end gap-x-1 grow-0">
                    <div class="text-[#B4AEAE]">18:07</div>
                </div>
            </div>

            <!-- message 7 -->
            <div class="message opacity-0 w-fit relative font-light flex flex-col items-start gap-x-3 pb-8 px-4 pt-4">
                <img class="z-0 w-full h-full object-fill absolute -top-0 left-0 scale-y-[104%] " src="/images/for_you/message_blue_bubble_lg.svg" alt="message_green_bubble">
                <div class="z-10 rounded-2xl overflow-hidden flex-col ">
                    <img class="w-full" src="/images/for_you/message_7_img.svg" alt="message_7_img">
                    <div class="px-4 py-3 bg-white/10 text-white">
                        <div>IndieZone - Home</div>
                        <div>{{ $t('The_sustainable') }}</div>
                    </div>
                </div>
                <div class="z-10  px-2 pt-3 text-white grow  flex flex-col gap-y-2 mt-2">
                    <p>{{ $t('Kannst') }}</p>
                    <p class="text-blue-400 underline underline-offset-2" >IndieZone.de</p>   
                </div>
                
                <div class="text-sm w-full z-10 pb-1 pr-2  flex justify-end gap-x-1 grow-0 mt-auto">
                    <div class="text-[#B4AEAE]">18:07</div>
                </div>
            </div>

        </div>

    </section>
</template>

<script setup>

const messages= ref(null)

function slideAnimation() {
    messages.value.forEach((message,index) => {
        let message_rect = message.getBoundingClientRect()
        if(message_rect.top  < window.innerHeight-200){
            if(index === 6 && !message.classList.contains('appear') && messages.value[index-1].classList.contains('appear')){
                message.classList.add('appear');
            }
            else if (index !== 6 && !message.classList.contains('appear') && !messages.value[index+1].classList.contains('appear')) {
                message.classList.add('appear');
            }
        }else if(message_rect.top  > window.innerHeight){
            if (message.classList.contains('appear')) {
                message.classList.remove('appear');
            }
        }
    });
}
onMounted(() => {
    messages.value = [...document.querySelectorAll('.message')]
    slideAnimation()
    window.addEventListener('scroll', slideAnimation)
    window.addEventListener('resize', slideAnimation)
        
})
onUnmounted(() => {
    window.removeEventListener('scroll', slideAnimation)
    window.removeEventListener('resize', slideAnimation)
})
</script>

<style scoped>
    .appear {
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>