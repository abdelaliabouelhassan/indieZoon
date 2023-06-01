<template>
    <section id="home_third_section" class="w-full flex justify-center relative text-white pb-14 mb-20
    md:pb-10 lg:pb-32 lg:mb-28 xl:mb-44 overflow-hidden md:overflow-visible">
        <!-- background images -->
        <img src="/images/home/third_section_backgrounds/home_third_section_backgroung.svg" alt="home_third_section_background" 
            class="absolute top-0 right-0 w-screen h-full z-[1] xs:hidden">
        <img src="/images/home/third_section_backgrounds/home_third_section_backgroung_xs.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] xs:block lg:hidden">
        
        <img src="/images/home/third_section_backgrounds/home_third_section_backgroung_lg.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0  w-screen h-full z-[1] lg:block">
        
        <!-- articles container -->
        <div class="z-[2] py-32 lg:pt-48 xl:pt-10 lg:max-w-[69.375rem] lg:mx-auto">
            <!-- section head title -->
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 pt-32 lg:pt-36 xl:pt-56">Warum IndieZone?</h2>
            <!-- first article -->
            <article class="w-full flex flex-col gap-y-16 pt-32 relative
                            md:pt-44  md:items-center
                            lg:pt-38 lg:flex-row
                            xl:pt-52">
                <!-- article image -->
                <img class="w-full object-contain
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0" 
                     src="/images/home/Werde-gefunden.png" alt="Werde-gefunden">
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-12 px-4
                            md:order-1 md:max-w-xl w-full
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">Werde gefunden</h3>
                    <!-- article paragraph -->
                    <p class="font-light">Unser Marktplatz verbindet lokale Läden und Geschäfte in deiner Umgebung. Neue Kunden werden deinen Laden und deine Produkte endlich finden und zwar da wo sie suchen: online. Mit IndieZone als Partner erreichst du ohne Vorkenntnisse und großen Aufwand neue Kundinnen und ergänzt deine lokale Präsenz gezielt online. Die Kunden kaufen dabei trotzdem vor Ort bei dir im Laden.</p>
                    
                </div>
            </article>
            <!-- second article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 relative 
                            md:pt-56 md:items-center
                            lg:flex-row lg:pt-64
                            xl:pt-96">
                <!-- article image -->
                <img class="h-[35rem] object-cover 
                            md:order-2 md:max-w-xl md:h-auto md:w-full md:object-contain 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2" 
                      src="/images/home/Verbinde-Tradition-mit-Innovation.svg" alt="Verbinde-Tradition-mit-Innovation">
                <!-- article content -->
                <div class="flex flex-col gap-y-12 px-4
                            md:order-1 md:max-w-xl 
                            lg:order-2 lg:w-[50%] lg:max-w-none">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">Verbinde Tradition mit Innovation</h3>
                    <!-- article paragraph -->
                    <p class="font-light lg:max-w-[27.688rem]">Mit IndieZone bringst du die Stärke deines lokalen Ladens in die digitale Welt. Wir zeigen der Welt was du zu bieten hast. Dabei musst du das persönliche Verkaufen nicht aufgeben, um die Vorteile eines online-Marktplatzes zu nutzen: Weil sich Versand nicht lohnt - vergiss ihn. Du machst, was du am liebsten tust, und teilst deine Leidenschaft mit Menschen die das zu schätzen wissen. Denn dafür kommen die Kunden in deinen Laden.</p>
                </div>
                <!-- image space allocator -->
                <div class="hidden lg:block w-[50%] lg:order-2"></div>
                
            </article>
            <!-- third article  -->
            <article class="w-full flex flex-col gap-y-16 pt-48 pb-20 relative 
                            md:pt-56 md:pb-0 md:items-center 
                            lg:flex-row lg:pt-48
                            xl:pt-72 ">
                <!-- article image -->
                <img class="w-full object-contain scale-125
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0" 
                      src="/images/home/Erreiche-Grobes2.svg" alt="Erreiche-Grobes">
                 <!-- image space allocator -->
                <div class="hidden lg:block w-[50%]"></div>
                <!-- article content -->
                <div class="flex flex-col gap-y-12 px-4 
                            md:order-1 md:max-w-lg 
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-28">
                    <!-- article title -->
                    <h3 class="text-3xl font-bold sm:text-4xl">Erreiche Großes</h3>
                    <!-- article paragraph -->
                    <p class="font-light lg:max-w-[27.875rem]">IndieZone bietet dir mehr als nur eine Online-Präsenz. Als All-in-One-Marketing Lösung nehmen wir dir alles ab, was dich im Marketing bisher frustriert hat. Marketing ist teuer, online-Marketing noch teurer und gegen Amazon hat man trotzdem keine Chance? Nicht mit uns, dank unserer fairen Abomodelle. Werde Teil der IndieZone-Community und profitiere von Gemeinschaftsprojekten und unserem integrierten Blog, um immer auf dem neuesten Stand zu bleiben.</p>
                </div>
            </article>
            
        </div>
        <!-- bottom button -->
        <div id="third_setion_button" class="w-full  h-20 z-[2] absolute bottom-0   flex items-center justify-center  ">
            <nuxt-link to="/pre-register">
                <UIBaseButton class="w-max py-4  hover:scale-y-125 hover:scale-x-110">
                        Jetzt Voranmelden
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