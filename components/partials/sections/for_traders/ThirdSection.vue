<template>
    <section id="home_third_section" class="w-full flex justify-center relative text-white pb-14 mb-20
    md:pb-10 lg:pb-32 lg:mb-28 xl:mb-44 overflow-hidden md:overflow-visible">
        <!-- background images -->
        <img src="/images/for_traders/third_section_backgrounds/home_third_section_backgroung.svg" alt="home_third_section_background" 
            class="absolute top-0 right-0 w-screen h-full z-[1] xs:hidden">
        <img src="/images/for_traders/third_section_backgrounds/home_third_section_backgroung_xs.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] xs:block lg:hidden">
        <div class="w-full h-full overflow-x-hidden hidden absolute top-0 right-0 lg:block">
            <img src="/images/for_traders/third_section_backgrounds/home_third_section_backgroung_lg.svg" alt="home_third_section_background" 
            class="  w-full h-full z-[1]  2xl:scale-x-[115%]">
        </div>
        
        <!-- articles container -->
        <div class="z-[2] py-32 lg:pt-48 xl:pt-10 lg:max-w-[69.375rem] lg:mx-auto">
            <!-- section head title -->
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 pt-32 lg:pt-36 xl:pt-56">{{ $t('Warum_IndieZone') }}</h2>
            <!-- first article -->
            <article class="w-full flex flex-col gap-y-16 pt-32 relative
                            md:pt-44  md:items-center
                            lg:pt-38 lg:flex-row
                            xl:pt-52">
                <!-- article image -->
                <div class="w-full px-4 md:px-0
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0">
                    <img class="object-contain" 
                     src="/images/for_traders/Werde-gefunden.png" alt="Werde-gefunden">
                </div>
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl w-full
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Werde_gefunden') }}</h3>
                    <!-- article paragraph -->
                    <p class="font-light">{{ $t('Unser') }}</p>
                    
                </div>
            </article>
            <!-- second article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 relative 
                            md:pt-56 md:items-center
                            lg:flex-row lg:pt-64
                            xl:pt-96">
                <!-- article image -->
                <div class="md:px-0  px-4
                            md:order-2 md:max-w-xl md:h-auto md:w-full  
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2">
                    <img class=" w-full h-full object-cover md:object-contain " 
                      src="/images/for_traders/Verbinde-Tradition-mit-Innovation.svg" alt="Verbinde-Tradition-mit-Innovation">
                </div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl 
                            lg:text-left lg:order-2 lg:w-[50%] lg:max-w-none">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Verbinde_Tradition') }}</h3>
                    <!-- article paragraph -->
                    <p class="font-light lg:max-w-[27.688rem]">{{ $t('Mit_IndieZone') }}</p>
                </div>
                <!-- image space allocator -->
                <div class="hidden lg:block w-[50%] lg:order-2"></div>
                
            </article>
            <!-- third article  -->
            <article class="w-full flex flex-col gap-y-14 pt-48 pb-20 relative 
                            sm:gap-y-8
                            md:pt-56 md:pb-0 md:items-center 
                            lg:flex-row lg:pt-48
                            xl:pt-72 ">
                <!-- article image -->
                <img class="w-full object-contain scale-125
                            md:order-2 md:max-w-xl  
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0" 
                      src="/images/for_traders/community.svg" alt="community">
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4 
                            md:order-1 md:max-w-lg 
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-28">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Erreiche_Großes') }}</h3>
                    <!-- article paragraph -->
                    <p class="font-light lg:max-w-[27.875rem]">{{ $t('IndieZone_bietet') }}</p>
                </div>
            </article>
            
        </div>
        <!-- bottom button -->
        <div id="third_setion_button" class="w-full  h-[5.5rem] pb-2 z-[2] absolute bottom-0   flex items-center justify-center  ">
            <nuxt-link to="/pre-register">
                <UIBaseButton class="w-max py-4  hover:scale-y-125 hover:scale-x-110">
                        {{ $t('Jetzt_Voranmelden') }}
                </UIBaseButton>
            </nuxt-link>
        </div>
        
        

    </section>
</template>

<style scoped>
    

    @media (min-width:60rem) {
        #third_setion_button{
            @apply bottom-0;
        }
    }
    @media (min-width:71rem) {
        #third_setion_button{
            @apply -bottom-10;
        }
    }
    @media (min-width:75rem) {/*1200*/
        #third_setion_button{
            @apply -bottom-24;
        }
    }
    @media (min-width:80rem) {
        #third_setion_button{
            @apply -bottom-32;
        }
    }
</style>