<template>
    <section id="home_third_section" class="w-full flex justify-center relative text-white pb-14 mb-20
    md:pb-32">
        
        <img src="/images/home/third_section/home_third_section_backgroung.svg" alt="home_third_section_background" 
            class="absolute top-0 right-0 w-screen h-full z-[1] xs:hidden">
        <img src="/images/home/third_section/home_third_section_backgroung_xs.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] xs:block lg:hidden">
        <!-- <img src="/images/home/third_section/home_third_section_backgroung_sm.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] sm:block md:hidden"> -->
        <!-- <img src="/images/home/third_section/home_third_section_backgroung_md.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] lg:block xl:hidden"> -->
        <img src="/images/home/third_section/home_third_section_backgroung_lg.svg" alt="home_third_section_background" 
            class="hidden absolute top-0 right-0  w-screen h-full z-[1] lg:block">
        <!-- section container -->
        <div class=" z-[2] py-32 lg:pt-64 xl:pt-32 ">
            <!-- section head title -->
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 pt-32 ">Warum IndieZone?</h2>

            <article class="w-full flex flex-col gap-y-16 pt-32 relative
                            md:pt-48  md:items-center
                            lg:flex-row lg:container lg:mx-auto 2xl:max-w-[85rem] 
                            xl:pt-64 2xl:pt-72">

                <img class="w-full object-contain
                            md:order-2 md:max-w-xl 
                            lg:order-1 lg:w-[50%]" 
                     src="/images/home/Werde-gefunden.png" alt="Werde-gefunden">

                <div class="flex flex-col gap-y-12 px-4
                            md:order-1 md:max-w-xl 
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">

                    <h3 class="text-3xl font-bold sm:text-4xl">Werde gefunden</h3>
                    <p>Unser Marktplatz verbindet lokale Läden und Geschäfte in deiner Umgebung. Neue Kunden werden deinen Laden und deine Produkte endlich finden und zwar da wo sie suchen: online. Mit IndieZone als Partner erreichst du ohne Vorkenntnisse und großen Aufwand neue Kundinnen und ergänzt deine lokale Präsenz gezielt online. Die Kunden kaufen dabei trotzdem vor Ort bei dir im Laden.</p>
                    
                </div>
            </article>
            
            
            
            <article class="w-full flex flex-col gap-y-16 pt-32 relative 
                            md:pt-48 md:items-center
                            lg:flex-row lg:container lg:mx-auto 2xl:max-w-[85rem] lg:pt-52
                            xl:pt-64 2xl:pt-72">
                <div class="w-full md:order-2 h-10 bg-yellow-400 grow">
                    <!-- <img class="h-[35rem] object-cover 
                                 md:max-w-xl md:h-auto lg:max-w-full " 
                        src="/images/home/Verbinde-Tradition-mit-Innovation.png" alt="Verbinde-Tradition-mit-Innovation"> -->
                </div>

                <div class="flex flex-col gap-y-12 px-4
                            md:order-1 md:max-w-xl 
                              lg:mr-5">
                    <h3 class="text-3xl font-bold sm:text-4xl">Verbinde Tradition mit Innovation</h3>
                    <p>Mit IndieZone bringst du die Stärke deines lokalen Ladens in die digitale Welt. Wir zeigen der Welt was du zu bieten hast. Dabei musst du das persönliche Verkaufen nicht aufgeben, um die Vorteile eines online-Marktplatzes zu nutzen: Weil sich Versand nicht lohnt - vergiss ihn. Du machst, was du am liebsten tust, und teilst deine Leidenschaft mit Menschen die das zu schätzen wissen. Denn dafür kommen die Kunden in deinen Laden.</p>
                </div>
                <div class="hidden lg:block w-[50%] lg:order-2"></div>
                
            </article>

            <article class="w-full flex flex-col gap-y-16 pt-32 pb-20 relative 
                            md:pt-48 md:pb-0 md:items-center
                            lg:flex-row lg:container lg:mx-auto 2xl:max-w-[85rem] lg:pt-52
                            xl:pt-64  2xl:pt-72  ">

                <img class="w-full object-contain 
                            md:order-2 md:max-w-xl
                            lg:order-1 lg:w-[50%]" 
                      src="/images/home/Erreiche-Grobes.svg" alt="Erreiche-Grobes">
                
                <div class="flex flex-col gap-y-12 px-4 
                            md:order-1 md:max-w-xl 
                            lg:order-2 lg:w-[50%] lg:max-w-none lg:ml-5">
                    <h3 class="text-3xl font-bold sm:text-4xl">Erreiche Großes</h3>
                    <p>IndieZone bietet dir mehr als nur eine Online-Präsenz. Als All-in-One-Marketing Lösung nehmen wir dir alles ab, was dich im Marketing bisher frustriert hat. Marketing ist teuer, online-Marketing noch teurer und gegen Amazon hat man trotzdem keine Chance? Nicht mit uns, dank unserer fairen Abomodelle. Werde Teil der IndieZone-Community und profitiere von Gemeinschaftsprojekten und unserem integrierten Blog, um immer auf dem neuesten Stand zu bleiben.</p>
                </div>
            </article>
            
        </div>
        <div class="w-full  h-20 z-[2] absolute bottom-0 lg:-bottom-20 flex items-center justify-center  ">
            <UIBaseButton class="w-max px-8 py-4  hover:scale-y-125 hover:scale-x-110   ">
                    Jetzt Voranmelden
            </UIBaseButton>
        </div>
        

    </section>
</template>
