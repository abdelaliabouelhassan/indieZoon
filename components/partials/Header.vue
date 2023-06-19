<template>
    <header >
        <!-- nav bar container -->
        <div id="nav-wrapper" class="w-full z-[200] bg-white">
            <!-- nav bar -->
            <nav class="h-24 md:h-28 w-full container mx-auto px-4 flex items-center justify-between">
                <nuxt-link to="/">
                    <div class="flex items-center gap-x-4 cursor-pointer">
                        <img class="h-16 w-16 md:h-20 md:w-20 " src="/images/logo/logo.svg" alt="logo">
                        <img class="h-5  md:h-7" src="/images/logo/logo_name.svg" alt="logo">
                    </div>
                </nuxt-link>

                <!-- big screen menu container -->
                <ul class="hidden xl:flex ml-auto gap-x-8 text-light text-lg font-medium">
                    <li v-if="!isHomePage" class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/">{{$t('Für_Händler')}}</nuxt-link></li>
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="">{{ $t('Für_Nutzer') }}</nuxt-link></li>
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/about">{{ $t('Über_uns') }}</nuxt-link></li>
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/contact">{{ $t('Kontakt') }}</nuxt-link></li>
                    
                </ul>
                <div class="flex items-center">
                    <!-- pre-register button -->
                    <nuxt-link  v-if="isHomePage" to="/pre-register" class="mr-10 xl:mr-0 xl:ml-10">
                        <UIBaseButton class="bg-primary/60 hidden hover:bg-primary md:flex  rounded-lg">
                                Jetzt Voranmelden
                        </UIBaseButton>
                    </nuxt-link>

                    <!-- small screen menu container -->
                    <div class="xl:hidden flex items-center gap-x-4 md:ml-0">
                        
                        <!-- menue toggle button -->
                        <div class="w-11 h-11 md:w-14 md:h-14 p-1 md:cursor-pointer outline-none" 
                                :class="{'hidden':smallScreenMenuActive}"
                                @click="showSmallScreenMenu">
                            <svg class="w-full h-full" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <path d="M2 22H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                    <path d="M2 12H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                    <path d="M2 2H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                </g>
                            </svg>
                            <!-- <svg class="w-14 h-14 md:h-16 md:w-16 text-[#1A2933]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                                <path  stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg> -->

                        </div>

                        <!-- backdrop for small screen menu-->
                        <div class="z-[201] fixed top-0 left-0 w-screen h-screen bg-black/20"
                            :class="{'hidden':!smallScreenMenuActive}"
                            @click.self="hideSmallScreenMenu">
                        </div>
                        
                        <!-- close btn and menu container -->
                        <div class="z-[202] relative" :class="{'hidden':!smallScreenMenuActive}">
                            <!-- close button -->
                            <div class="w-11 h-11 py-1.5 md:w-14 md:h-14  bg-white rounded-t-lg md:cursor-pointer outline-none" 
                                    @click="hideSmallScreenMenu">
                                <svg class="w-full h-full" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7 22L24.6985 4.30151" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                        <path d="M7 4L24.6985 21.6985" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                    </g>
                                </svg>
                                <!-- <svg class="w-full h-full text-[#1A2933]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> -->

                            </div>
                            <ul class="font-semibold bg-white absolute top-11 md:top-14 right-0 w-max rounded-b-lg rounded-l-lg overflow-hidden">
                                <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="">{{ $t('Für_Nutzer') }}</nuxt-link></li>
                                <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/">{{$t('Für_Händler')}}</nuxt-link></li>
                                <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/about">{{ $t('Über_uns') }}</nuxt-link></li>
                                <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/contact">{{ $t('Kontakt') }}</nuxt-link></li>
                                <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/pre-register">{{ $t('Voranmelden') }}</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class=" px-4 ">
                        <LangSwitch />
                    </div>
                     
                </div>
                
            </nav>
        </div>
    </header>
</template>

<script setup>

import LangSwitch from "@/components/UI/LangSwitch.vue"

const router = useRouter();
const isHomePage = computed(()=> router.currentRoute.value.path === '/')

const smallScreenMenuActive = ref(false)

function showSmallScreenMenu() {
    smallScreenMenuActive.value = true
}
function hideSmallScreenMenu() {
    smallScreenMenuActive.value = false
}

onMounted(() => {
    window.onscroll = function () {
        hideSmallScreenMenu()
    }
})

</script>
<style scoped>
#reverse-rounded{
    clip-path: circle(100% at 100% 100%);
}
</style>