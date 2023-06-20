<template>
<section id="home_second_section " class="pt-32 lg:pt-36 xl:pt-56 mb-10 ">
    <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 md:mb-10  z-[2]">Für jeden genau das Richtige</h2>

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
                    <h3 class="text-3xl font-bold sm:text-4xl">Für Dich</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li>Ein Click für Alles</li>
                        <li>Super bequem und einfach nachhaltig</li>
                        <li>Produkte, Veranstaltungen, Dienstleistungen und mehr…</li>
                        <li>Informationen deiner Stadtverwaltung endlich digital</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Mehr erfahren</div> 
                        </UIBaseButton>
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
                    <h3 class="text-3xl font-bold sm:text-4xl">Für Städte und Kommunen</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li>Direkte Kommunikation und Information</li>
                        <li>Reichweitenstark und zielgruppenorientiert</li>
                        <li>Direkte Rückmeldung und Umfragen</li>
                        <li>Einfach zu bedienen und planbar</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Mehr erfahren</div> 
                        </UIBaseButton>
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
                    <h3 class="text-3xl font-bold sm:text-4xl">Für Händler:innen</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li>Werde gefunden und erreiche mehr</li>
                        <li>Begeistere persönlich in deinem Laden</li>
                        <li>Einfach und günstig</li>
                        <li>Kein Versand nötig</li>
                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Mehr erfahren</div> 
                        </UIBaseButton>
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
                    <h3 class="text-3xl font-bold sm:text-4xl">Für Veranstalter:innen</h3>
                    <!-- article list -->
                    <ul class="font-medium list-disc list-inside">
                        <li>Erreiche einfach neues Publikum</li>
                        <li>Mehr Übersicht dank Voranmeldungen</li>
                        <li>Kein Stress mit Bargeld oder Abendkasse</li>
                        <li>Keine Plakate und Flugblätter mehr</li>

                    </ul>
                    <!-- content button -->
                    <div class="mt-2 flex justify-end px-4">
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Mehr erfahren</div> 
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