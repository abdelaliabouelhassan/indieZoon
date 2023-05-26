<template>
    <section id="home_third_section" class="w-full text-white pt-60 pb-[28rem] relative
            md:py-[32rem] lg:pt-[10rem] lg:pb-[20rem]">
        
        <!-- section container -->

        <div>
            <!-- section head title -->
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 md:pt-52 lg:pt-20">Warum IndieZone?</h2>

            <article class="flex flex-col w-full gap-y-20 pt-52 md:pt-80 px-4  md:items-center
                lg:flex-row  lg:container lg:mx-auto 2xl:max-w-[85rem] relative xl:pt-[30rem]">
                <img class="w-full md:max-w-xl object-contain lg:max-w-3xl lg:w-[50%] lg:absolute 
                    lg:left-0 " src="/images/home/Werde-gefunden.png" alt="Werde-gefunden">
                <div class="hidden lg:block w-[50%]"></div>
                <div class="flex flex-col gap-y-12 md:max-w-lg lg:w-[50%] lg:ml-5">
                    <h3 class="text-3xl font-bold sm:text-4xl">Werde gefunden</h3>
                    <p>Unser Marktplatz verbindet lokale Läden und Geschäfte in deiner Umgebung. Neue Kunden werden deinen Laden und deine Produkte endlich finden und zwar da wo sie suchen: online. Mit IndieZone als Partner erreichst du ohne Vorkenntnisse und großen Aufwand neue Kundinnen und ergänzt deine lokale Präsenz gezielt online. Die Kunden kaufen dabei trotzdem vor Ort bei dir im Laden.</p>
                </div>
            </article>
            
            <article class="flex flex-col w-full gap-y-20 pt-52 md:pt-80  md:items-center
                lg:flex-row  lg:container lg:mx-auto 2xl:max-w-[85rem] relative xl:pt-[30rem]">
                
                <div class="flex flex-col gap-y-12 md:max-w-lg  lg:w-[50%] lg:mr-8 px-4 ">
                    <h3 class="text-3xl font-bold sm:text-4xl">Verbinde Tradition mit Innovation</h3>
                    <p>Mit IndieZone bringst du die Stärke deines lokalen Ladens in die digitale Welt. Wir zeigen der Welt was du zu bieten hast. Dabei musst du das persönliche Verkaufen nicht aufgeben, um die Vorteile eines online-Marktplatzes zu nutzen: Weil sich Versand nicht lohnt - vergiss ihn. Du machst, was du am liebsten tust, und teilst deine Leidenschaft mit Menschen die das zu schätzen wissen. Denn dafür kommen die Kunden in deinen Laden.</p>
                </div>
                <div class="hidden lg:block w-[50%] "></div>
                <img class="h-[35rem] object-cover md:object-contain md:w-full md:max-w-xl lg:max-w-3xl lg:w-[50%] lg:absolute 
                    lg:left-1/2 " src="/images/home/Verbinde-Tradition-mit-Innovation2.png" alt="Werde-gefunden">
            </article>

            <article class="flex flex-col gap-y-32 pt-52 md:pt-80 md:items-center lg:flex-row 
                lg:container lg:mx-auto 2xl:max-w-[85rem] relative xl:pt-[30rem]">
                <img class="w-full md:max-w-xl object-contain lg:max-w-3xl lg:w-[50%] lg:absolute 
                    lg:left-0 " src="/images/home/Erreiche-Grobes.svg" alt="Erreiche-Grobes">
                <div class="hidden lg:block w-[50%]"></div>
                
                <div class="flex flex-col gap-y-12 md:max-w-lg lg:w-[50%] lg:ml-5 px-4">
                    <h3 class="text-3xl font-bold sm:text-4xl">Erreiche Großes</h3>
                    <p>IndieZone bietet dir mehr als nur eine Online-Präsenz. Als All-in-One-Marketing Lösung nehmen wir dir alles ab, was dich im Marketing bisher frustriert hat. Marketing ist teuer, online-Marketing noch teurer und gegen Amazon hat man trotzdem keine Chance? Nicht mit uns, dank unserer fairen Abomodelle. Werde Teil der IndieZone-Community und profitiere von Gemeinschaftsprojekten und unserem integrierten Blog, um immer auf dem neuesten Stand zu bleiben.</p>
                </div>
            </article>
            

        </div>
        <div class="h-20 flex items-center justify-center mt-[80rem] absolute bottom-20 w-full">

            <UIBaseButton class="w-max px-8 py-4  hover:scale-y-125 hover:scale-x-110   ">
                    Jetzt Voranmelden
            </UIBaseButton>
        </div>

    </section>
</template>

<style scoped>
#home_third_section{
    background-image: url(/images/home/home_third_section_backgroung.svg);
    background-repeat:no-repeat;
    background-size: cover;
    background-position-x: left;

}
@media (min-width:48rem) {
    #home_third_section{
        background-position-x: left;
    }
}
@media (min-width:64rem) {
    #home_third_section{
        background-image: url(/images/home/home_third_section_backgroung_xl.svg);
        background-position-y: top;
    }
}
@media (min-width:96rem) {
    #home_third_section{
        background-position-x:center ;
    }
}
@media (min-width:105rem) {
    #home_third_section{
        background-position-y: bottom ;
    }
}


</style>