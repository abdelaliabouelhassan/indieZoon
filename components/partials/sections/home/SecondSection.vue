<template>
<section id="home_second_section " class="pt-32 lg:pt-36 xl:pt-56 mb-10 ">
    <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 md:mb-10  z-[2]">{{ $t('Für_jeden') }}</h2>

    <div  class="w-full flex justify-center relative text-white pb-14 
    md:pb-10 lg:pb-10  xl:mb-44 overflow-hidden md:overflow-visible">
        <!-- background images -->
        <img src="/images/home/second_section_backgrounds/home_second_section_background.svg" alt="home_second_section_background" 
            class="absolute top-0 right-0 w-full h-full z-[1] sm:hidden">
        <img src="/images/home/second_section_backgrounds/home_second_section_background_sm.svg" alt="home_second_section_background" 
            class="hidden absolute top-0 right-0 h-full w-full object-fill z-[1] sm:block lg:hidden">
            
        <img src="/images/home/second_section_backgrounds/home_second_section_background_lg.svg" alt="home_second_section_background" 
            class="hidden absolute top-0 right-0 w-full h-full object-cover 2xl:object-fill z-[1] lg:block ">
        
        <!-- articles container -->
        <div class="w-full z-[2] py-32 lg:pt-20 xl:pt-10 lg:max-w-[69.375rem] lg:mx-auto ">
            <!-- section head title -->
            
            <!-- first article -->
            <article class="w-full flex flex-col gap-y-16 pt-32 relative
                            md:pt-20  md:items-center
                            lg:pt-28 lg:flex-row
                            xl:pt-40">
                <!-- article image -->
                <div class="w-full px-4 md:px-0 self-center
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0">
                    <img class="w-full h-full object-contain" 
                     src="/images/home/for_you.svg" alt="for_you">
                </div>
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl w-full
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Für_Dich') }}</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li class=" bullet">{{ $t('Ein_Click') }}</li>
                        <li class=" bullet">{{ $t('Super_bequem') }}</li>
                        <li class=" bullet">{{ $t('Produkte_Veranstaltungen') }}</li>
                        <li class=" bullet">{{ $t('Informationen') }}</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <NuxtLink to="/for-you" >
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">{{ $t('Mehr_erfahren') }}</div> 
                        </UIBaseButton>
                        </NuxtLink>
                    </div>
                    
                </div>
            </article>
            <!-- second article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 relative 
                            md:pt-56 md:items-center
                            lg:flex-row lg:pt-72
                            xl:pt-96">
                <!-- article image -->
                <div class="md:px-0  px-4
                            md:order-2 md:max-w-xl md:h-auto md:w-full  
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2">
                    <img class=" w-full h-full object-cover md:object-contain " 
                      src="/images/home/for_cities.svg" alt="for_cities">
                </div>
                <!-- article content -->
                <div class="w-full flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl 
                            lg:text-left lg:order-2 lg:w-[50%] lg:max-w-none">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Kommunen') }}</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li class=" bullet">{{ $t('Kommunikation') }}</li>
                        <li class=" bullet">{{ $t('Reichweitenstark') }}</li>
                        <li class=" bullet">{{ $t('Direkte') }}</li>
                        <li class=" bullet">{{ $t('Einfach_bedienen') }}</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <NuxtLink to="/for-cities" >
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">{{ $t('Mehr_erfahren') }}</div> 
                        </UIBaseButton>
                        </NuxtLink>
                    </div>
                </div>
                <!-- image space allocator -->
                <div class="hidden lg:block w-[50%] lg:order-2"></div>
                
            </article>

            
            <!-- third article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 relative 
                            md:pt-56 md:items-center
                            lg:flex-row lg:pt-72
                            xl:pt-96">
                <!-- article image -->
                <div class="w-full px-4 md:px-0 self-center
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0">
                    <img class="w-full h-full object-contain" 
                     src="/images/home/for_traders.svg" alt="for_you">
                </div>
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl w-full
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Für_Händler_innen') }}</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li class=" bullet">{{ $t('Werde_gefunden_und') }}</li>
                        <li class=" bullet">{{ $t('Begeistere') }}</li>
                        <li class=" bullet">{{ $t('Einfach_günstig') }}</li>
                        <li class=" bullet">{{ $t('Kein_Versand_nötig') }}</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                         <NuxtLink to="/for-traders" >
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">{{ $t('Mehr_erfahren') }}</div> 
                        </UIBaseButton>
                         </NuxtLink>
                    </div>          
                </div>
                
            </article>

            <!-- fourth article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 pb-56 relative 
                            sm:pb-48
                            md:pt-56 md:items-center
                            lg:flex-row lg:pt-72 lg:pb-56
                            xl:pt-96">
                <!-- article image -->
                <div class="md:px-0  px-4
                            md:order-2 md:max-w-xl md:h-auto md:w-full  
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2">
                    <img class=" w-full h-full object-cover md:object-contain " 
                      src="/images/home/for_organizers.svg" alt="for_organizers">
                </div>
                <!-- article content -->
                <div class="flex flex-col gap-y-8 px-4
                            md:order-1 md:max-w-xl md:w-full
                            lg:text-left lg:order-2 lg:w-[50%] lg:max-w-none">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">{{ $t('Veranstalter') }}</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li class=" bullet">{{ $t('Erreiche_einfach') }}</li>
                        <li class=" bullet">{{ $t('Mehr_Übersicht') }}</li>
                        <li class=" bullet" >{{ $t('Kein_Stress') }}</li>
                        <li class=" bullet">{{ $t('Keine_Plakate') }}</li>

                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <UIBaseButton class="px-10 py-4 bg-[#9EA2A5] hover:scale-y-125 hover:scale-x-110">
<<<<<<< HEAD
                            <div class="text-primary">coming soon</div> 
=======
                            <div class="text-white">{{ $t('comingsoon') }}</div> 
>>>>>>> ced28597ac3b8f87ff4772c691903e94738ed18c
                        </UIBaseButton>
                    </div>
                </div>
                <!-- image space allocator -->
                <div class="hidden lg:block w-[50%] lg:order-2"></div>
                
            </article>
            
            

            
        </div>
        
        
        

    </div>
</section>
</template>

<script setup>
onMounted(() => {
   const elements = document.querySelectorAll('.bullet');
   
   elements.forEach((element) => {
            const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                element.classList.add('animate-bullet-line');
                observer.disconnect();
            }
            });
            observer.observe(element);
        });

 
});
</script>

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