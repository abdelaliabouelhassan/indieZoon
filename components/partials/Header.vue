<template>
    <header >
        <!-- nav bar container -->
        <div id="nav-wrapper" class="fixed top-0 w-full z-[200] bg-white" ref="navbar">
            <!-- nav bar -->
            <nav class="h-24 md:h-28 w-full container mx-auto px-4 flex items-center">
                <nuxt-link to="/">
                    <div class="flex items-center gap-x-4 cursor-pointer">
                        <img class="h-16 w-16 md:h-20 md:w-20 " src="/images/logo/logo.png" alt="logo">
                        <img class="h-5  md:h-7" src="/images/logo/logo_name.png" alt="logo">
                    </div>
                </nuxt-link>

                <!-- big screen menu container -->
                <ul class="hidden xl:flex ml-auto gap-x-8 text-light text-lg font-medium">
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/">Für Nutzer</nuxt-link></li>
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/about">Über uns</nuxt-link></li>
                    <li class="hover:text-primary cursor-pointer hover:scale-110"><nuxt-link to="/contact">Kontakt</nuxt-link></li>
                </ul>
                <!-- pre-register button -->
                <nuxt-link to="/pre-register" class="ml-auto mr-10 xl:mr-0 xl:ml-10">
                    <UIBaseButton class="bg-primary/60 hidden hover:bg-primary md:flex  rounded-lg">
                            Jetzt Voranmelden
                    </UIBaseButton>
                </nuxt-link>

                <!-- small screen menu container -->
                <div class="xl:hidden flex items-center gap-x-4 ml-auto md:ml-0">
                    
                    <!-- menue toggle button -->
                    <button class="w-11 h-11 md:w-14 md:h-14 p-1" 
                            :class="{'hidden':smallScreenMenuActive}"
                            @click="showSmallScreenMenu">
                        <svg class="w-full h-full" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1611_3644)">
                                <path d="M2 22H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                <path d="M2 12H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                <path d="M2 2H30" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1611_3644">
                            <rect width="32" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <!-- backdrop for small screen menu-->
                    <div class="z-[201] absolute top-0 left-0 w-screen h-screen bg-black/20 fade-in"
                        :class="{'hidden':!smallScreenMenuActive}"
                        @click.self="hideSmallScreenMenu">
                    </div>
                    
                    <!-- close btn and menu container -->
                    <div class="z-[202] relative" :class="{'hidden':!smallScreenMenuActive}">
                        <!-- close button -->
                        <button class="w-11 h-11 p-1 mx-1.5 bg-white rounded-t-md" 
                                @click="hideSmallScreenMenu">
                            <svg class="w-full h-full" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M7 22L24.6985 4.30151" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                    <path d="M7 4L24.6985 21.6985" stroke="#1A2933" stroke-width="4" stroke-linecap="round"/>
                                </g>
                            </svg>
                        </button>
                        <ul class="font-semibold bg-white absolute top-11 right-1.5 w-max rounded-b-md rounded-l-md overflow-hidden fade-in">
                            <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/">Für Nutzer:innen</nuxt-link></li>
                            <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/">Für Händler:innen</nuxt-link></li>
                            <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/about">Über uns</nuxt-link></li>
                            <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/contact">Kontakt</nuxt-link></li>
                            <li @click="hideSmallScreenMenu" class="px-10 py-6 cursor-pointer hover:scale-105"><nuxt-link to="/pre-register">Voranmelden</nuxt-link></li>
                        </ul>
                    </div>
                </div>

                
            </nav>
        </div>
    </header>
</template>

<script setup>

const navbar = ref(null)
const navHeight = ref(null)
const prevScrollPos = ref(false)

const smallScreenMenuActive = ref(false)

function showSmallScreenMenu() {
    smallScreenMenuActive.value = true
}
function hideSmallScreenMenu() {
    smallScreenMenuActive.value = false
}

onMounted(() => {
    navHeight.value = navbar.value.offsetHeight
    prevScrollPos.value = window.scrollY
    window.addEventListener('scroll', (e)=>{
        let currentScrollPos = window.scrollY
        console.log('currentScrollPos' , currentScrollPos)
        if(currentScrollPos <= navHeight.value ){
            navbar.value.style.top = "0"
        }
        else if (prevScrollPos.value > currentScrollPos) {
            navbar.value.style.top = "0"
        }
        else {
            navbar.value.style.top =   `${-navHeight.value}px`
        }
        prevScrollPos.value = currentScrollPos
    })
})

</script>

<style scoped>
#nav-wrapper{
    transition: top 200ms ease-in-out;
}
</style>