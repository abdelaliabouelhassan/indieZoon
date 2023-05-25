<template>
    <section id="home_third_section" class="w-full text-white pt-60 
             py-[32rem]">
        <!-- section container -->

            <div class="w-full md:container mx-auto ">

                <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 md:pt-52">Warum IndieZone?</h2>

                <article class="flex flex-col w-full gap-y-20 pt-52 md:pt-80 px-4  md:items-center
                    xl:flex-row  xl:px-8">
                    <div class="w-full xl:w-[50%] flex justify-center md:order-2 xl:order-1">
                        <img class="w-full md:max-w-xl object-contain" src="/images/home/Werde-gefunden.png" alt="Werde-gefunden">
                    </div>
                    <div class="flex flex-col gap-y-12 md:max-w-xl md:order-1 xl:order-2 xl:w-[50%]">
                        <h3 class="text-3xl font-bold sm:text-4xl">Werde gefunden</h3>
                        <p>Unser Marktplatz verbindet lokale Läden und Geschäfte in deiner Umgebung. Neue Kunden werden deinen Laden und deine Produkte endlich finden und zwar da wo sie suchen: online. Mit IndieZone als Partner erreichst du ohne Vorkenntnisse und großen Aufwand neue Kundinnen und ergänzt deine lokale Präsenz gezielt online. Die Kunden kaufen dabei trotzdem vor Ort bei dir im Laden.</p>
                    </div>
                </article>

                <article class="flex flex-col gap-y-20 pt-52 md:pt-80 md:items-center xl:flex-row xl:px-8 ">
                    <div class="w-full xl:w-[50%] flex justify-center md:order-2 xl:order-1">
                        <img class="h-[35rem] md:max-w-xl object-cover md:h-auto md:object-contain " src="/images/home/Verbinde-Tradition-mit-Innovation2.png" alt="Werde-gefunden">
                    </div>
                    <div class="flex flex-col gap-y-12 px-4 text-right md:max-w-xl md:order-1 xl:order-2 xl:w-[50%]">
                        <h3 class="text-3xl font-bold sm:text-4xl ">Verbinde Tradition mit Innovation</h3>
                        <p>Mit IndieZone bringst du die Stärke deines lokalen Ladens in die digitale Welt. Wir zeigen der Welt was du zu bieten hast. Dabei musst du das persönliche Verkaufen nicht aufgeben, um die Vorteile eines online-Marktplatzes zu nutzen: Weil sich Versand nicht lohnt - vergiss ihn. Du machst, was du am liebsten tust, und teilst deine Leidenschaft mit Menschen die das zu schätzen wissen. Denn dafür kommen die Kunden in deinen Laden.</p>
                    </div>
                </article>

                <article class="flex flex-col gap-y-32 pt-52 md:pt-80 md:items-center xl:flex-row xl:px-8">
                    <div class="w-full xl:w-[50%] flex justify-center md:order-2 xl:order-1">
                        <img class="w-full  object-cover" src="/images/home/Erreiche Grobes.png" alt="Erreiche Grobes">
                    </div>
                    <div class="flex flex-col gap-y-12 xl:w-[50%] px-4 md:max-w-xl md:order-1 xl:order-2">
                        <h3 class="text-3xl font-bold sm:text-4xl">Erreiche Großes</h3>
                        <p>IndieZone bietet dir mehr als nur eine Online-Präsenz. Als All-in-One-Marketing Lösung nehmen wir dir alles ab, was dich im Marketing bisher frustriert hat. Marketing ist teuer, online-Marketing noch teurer und gegen Amazon hat man trotzdem keine Chance? Nicht mit uns, dank unserer fairen Abomodelle. Werde Teil der IndieZone-Community und profitiere von Gemeinschaftsprojekten und unserem integrierten Blog, um immer auf dem neuesten Stand zu bleiben.</p>
                    </div>
                </article>

                

            </div>
            <div class="w-full h-80 bg-yellow-500 rhombus ">

            </div>

         <!-- section head title -->
    </section>
</template>

<style scoped>
#home_third_section{
    background-image: url(/images/home/home_third_section_backgroung.png);
    background-repeat:top left;
    background-position: 0% 50%;
    background-size: cover;
    clip-path: ellipse(500px 10px at 0% 50%);
}
@media (min-width:48rem) {
    #home_third_section{
        background-position-x: left;
        background-position-y:top 50%;
    }
}
@media (min-width:80rem) {
    #home_third_section{
            background-image: url(/images/home/home_third_section_backgroung_xl.png);
            background-size: 100% 100%;
            background-position: top left;

    }
}
.rhombus {
  width: 200px;
  height: 200px;
  /* border-radius: 10px; */
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  clip-path: ellipse(10rem 140px at  0% 10%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

</style>