<template>
    <div class="pb-36 overflow-hidden">
        <h2 class="text-4xl font-bold sm:text-5xl text-center">Unsere Mission</h2>
        <!-- articles -->
        <div class="flex flex-col mt-20 ">
            <!-- article 1 -->
            <article ref="article1" id="article1" class="clipable z-20 bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-32">
                <div class=" text-white md:flex md:justify-end lg:max-w-[69.375rem] mx-auto">
                    <div class="h-full px-4  flex flex-col gap-y-4 
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Planung und Konzept</h2>
                        <p class="font-light text-sm">In Zusammenarbeit mit verschiedenen Interessengruppen entwickeln wir eine maßgeschneiderte Plattform, die den Fokus auf bequemes, nachhaltiges Leben und lokale Angebote legt. Unser Ziel: Gemeinsam den ökologischen Fußabdruck und den unserer Städte reduzieren.</p>
                    </div>
                </div>
            </article>
            <div id="article1_images" class="container mx-auto relative ">
                <img class="city-img absolute w-48 left-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3
                            md:buttom-[13.4rem]" src="/images/about_us/third_section/city1.png" alt="city1">
                <img id="article1-tree1" class="absolute hidden md:block w-16 left-12 -bottom-28" src="/images/about_us/third_section/tree8.png" alt="tree8">
                <img id="article1-tree2" class="absolute hidden md:block w-16 right-20 -bottom-40" src="/images/about_us/third_section/tree5.png" alt="tree5">
                <img id="road-1" class="absolute hidden md:block z-10 w-[74%] top-6 left-[11.5rem]" src="/images/about_us/third_section/road1.svg" alt="road1">
            </div>
            <!-- article 2 -->
            <article ref="article2" class="mt-40 z-20 clipable bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-20 md:mt-44">
                <div class=" text-white lg:max-w-[69.375rem] mx-auto">
                    <div class="h-full px-4 flex flex-col gap-y-4
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Challenge 1: Lokaler online-Marktplatz </h2>
                        <p class="font-light text-sm">Unser lokaler online-Marktplatz verbindet Käufer:innen mit regionalen Einzelhändlern und Händlerinnen, um damit lokale Produktion statt internationaler Importe zu fördern. Damit entfällt der klimaschädliche Versand und die Retouren, Versandmitarbeiter:innen werden nicht ausgebeutet und lokale Produktionen werden sichtbar. Auch möchten wir lokale Dienstleister:innen integrieren, um lokale Fachkräfte zu fördern. So tragen wir zu einer nachhaltigen Innenstadtentwicklung und einer Weiterentwicklung der lokalen Wirtschaft bei.</p>
                    </div>
                </div>
            </article>
            <div id="article2_images" class="container mx-auto relative ">
                <img class="city-img absolute w-48 right-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3" src="/images/about_us/third_section/city2.png" alt="city2">
                <img id="article2-tree1" class="absolute hidden md:block w-16 right-56 -bottom-12" src="/images/about_us/third_section/tree6.png" alt="tree6">
                <img id="article2-tree2" class="absolute hidden md:block  z-30  w-14 right-16 -bottom-40" src="/images/about_us/third_section/tree3.png" alt="tree3">
                <img id="article2-tree3" class="absolute hidden md:block w-14 left-20 -bottom-40" src="/images/about_us/third_section/tree1.png" alt="tree1">
                <img id="road-2" class="absolute hidden md:block z-10 w-[75%] top-8 right-[11rem]" src="/images/about_us/third_section/road2.svg" alt="road2">
            </div>
            <!-- article 3 -->
            <article ref="article3" class="mt-40 z-20 clipable bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-32 md:mt-44">
                <div class="text-white md:flex md:justify-end lg:max-w-[69.375rem] mx-auto">
                    <div class="h-full px-4 flex flex-col gap-y-4
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Challenge 2: Veranstaltungen  </h2>
                        <p class="font-light text-sm">IndieZone bietet ein zentrales Veranstaltungsportal für lokale Events. Hier können Veranstaltungen in der Umgebung entdeckt, lokale Künstler:innen unterstützt und das soziale Leben in der Stadt aktiv mitgestaltet werden. Wir ermöglichen es jedem und jeder, schnell und unkompliziert eigene Veranstaltungen über unsere Plattform online bekannt zu machen. Ob Jazz-Abende in der Kellerbar nebenan, die Vernissage einer Kunststudentin oder offizielle Veranstaltungen der Stadt: Hier findet alles seinen Platz und du diese Veranstaltung in deiner Umgebung.</p>
                    </div>
                </div>
            </article>
            <div id="article3_images" class="container mx-auto relative">
                <img class="city-img absolute w-48 left-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3" src="/images/about_us/third_section/city3.png" alt="city3">
                <img id="article3-tree1" class="absolute hidden md:block w-16 left-20 -top-36" src="/images/about_us/third_section/tree6.png" alt="tree6">
                <img id="article3-tree2" class="absolute hidden md:block w-16 right-20 -bottom-36" src="/images/about_us/third_section/tree5.png" alt="tree5">
                <img id="article3-tree3" class="absolute hidden md:block  z-30 w-16 left-40 -bottom-36" src="/images/about_us/third_section/tree2.png" alt="tree2">
                <img id="article3-tree4" class="absolute hidden md:block w-14 left-8 -bottom-40" src="/images/about_us/third_section/tree3.png" alt="tree3">
                <img id="road-3" class="absolute hidden md:block z-10 w-[74%] top-6 left-[11.5rem]" src="/images/about_us/third_section/road3.svg" alt="road1">
            </div>
            <!-- article 4 -->
            <article ref="article4" class="mt-40 clipable z-20 bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-20 md:mt-44">
                <div class=" text-white lg:max-w-[69.375rem] mx-auto">
                    <div class="h-full px-4 flex flex-col gap-y-4
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Challenge 3: Vereine und Projekte</h2>
                        <p class="font-light text-sm">Wir integrieren Vereine, Projekte und gemeinnützige Organisationen in unsere Plattform, um das soziale Zusammenleben zu fördern. Hier kann man Vereine aus der Umgebung finden, um neue soziale Kontakte zu knüpfen. Auch warten spannende Projekte auf neue Mitarbeiter:innen und lokale Initiativen freuen sich auf engagierte Mitglieder:innen. So begegnen sich die Menschen wieder in lebendigen und nachhaltigen Innenstädten.</p>
                    </div>
                </div>
            </article>
            <div id="article4_images" class="container mx-auto relative ">
                <img class="city-img absolute w-48 right-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3" src="/images/about_us/third_section/city4.png" alt="city4">
                <img id="article4-tree1" class="absolute hidden md:block z-30 w-[4.5rem] right-56 -top-24" src="/images/about_us/third_section/tree7.png" alt="tree7">
                <img id="article4-tree2" class="absolute hidden md:block z-30 w-14 right-40 -bottom-40" src="/images/about_us/third_section/tree3.png" alt="tree3">
                <img id="article4-tree3" class="absolute hidden z-30 " src="/images/about_us/third_section/tree5.png" alt="tree5">
                <img id="article4-tree4" class="absolute hidden z-30 " src="/images/about_us/third_section/tree2.png" alt="tree2">
                <img id="road-4" class="absolute hidden md:block z-10 w-[74%] top-6 right-[11.5rem]" src="/images/about_us/third_section/road4.svg" alt="road4">
                
            </div>
            <!-- article 5 -->
            <article ref="article5" class="mt-40 z-20 clipable bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-32 md:mt-44">
                <div class="text-white md:flex md:justify-end lg:max-w-[69.375rem] mx-auto">
                   <div class="h-full px-4 flex flex-col gap-y-4
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Challenge 4: Wissen</h2>
                        <p class="font-light text-sm">IndieZone widmet sich der Bereitstellung von umfangreichen, informativen Ressourcen und praxisnahen Tipps rund um das Thema nachhaltiges Leben. Unser Blog bietet wertvolle Einblicke in die neuesten Entwicklungen und Best Practices in den Bereichen Umwelt- und Sozialverantwortung. Zusätzlich bieten wir Online-Kurse an, in denen Experten und Expertinnen ihr Wissen zu Nachhaltigkeitsthemen teilen. So können wir allen, von Bewohnerinnen über Einzelhändlern, Vereinen und Veranstalter*innen bis hin zu Städten helfen, nachhaltiger zu handeln. 
                        Wissen zu Nachhaltigkeitsthemen teilen. So konnen wir all Einzelhandlern, Vereinen und Veranstalter*innen bi- </p>
                    </div>
                </div>
            </article>
            <div id="article5_images" class="container mx-auto relative">
                <img class="city-img absolute w-48 left-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3" src="/images/about_us/third_section/city5.png" alt="city5">
                <img id="article5-tree1" class="absolute hidden md:block w-12 left-20 -top-56" src="/images/about_us/third_section/tree1.png" alt="tree1">
                <img id="article5-tree2" class="absolute hidden md:block w-16 right-20  -top-56" src="/images/about_us/third_section/tree2.png" alt="tree2">
                <img id="article5-tree3" class="absolute hidden md:block z-30 w-16 left-44 top-14" src="/images/about_us/third_section/tree7.png" alt="tree7">
                <img id="article5-tree6" class="absolute hidden md:block w-14 left-10 -bottom-40" src="/images/about_us/third_section/tree2.png" alt="tree2">
                <img id="article5-tree4" class="absolute hidden md:block w-16 right-32 -bottom-40" src="/images/about_us/third_section/tree7.png" alt="tree7">
                <img id="article5-tree5" class="absolute hidden md:block z-30 w-10 right-40 -bottom-40" src="/images/about_us/third_section/tree6.png" alt="tree6">

                <img id="road-5" class="absolute hidden md:block z-10 w-[72%] top-6 left-[11.5rem]" src="/images/about_us/third_section/road5.svg" alt="road5">
            </div>
            <!-- article 6 -->
            <article ref="article6" class="mt-40 z-20 clipable bg-primary pt-32 pb-48 xs:pt-24 xs:pb-44 sm:pt-16 md:pt-10 md:pb-20 md:mt-44">
                <div class=" text-white lg:max-w-[69.375rem] mx-auto">
                    <div class="h-full px-4 flex flex-col gap-y-4
                                 sm:max-w-[40.2rem] md:max-w-[38rem] lg:max-w-[45rem]">
                        <h2 class="text-4xl font-bold sm:text-4xl">Noch mehr Ideen?    </h2>
                        <p class="font-light text-sm">Beteilige dich an unserer Mission, das nachhaltige Leben einfach zu machen. Teile deine Ideen und Vorschläge mit uns, um gemeinsam eine umweltfreundliche und zukunftsfähige Stadtlandschaft zu gestalten.</p>
                        <nuxt-link to="/contact" class="mt-8 self-center">
                            <UIBaseButton class="px-10 py-4 bg-white  hover:scale-y-110 hover:scale-x-110 self-center">
                                <div class="text-primary">Jetzt mitmatchen</div> 
                            </UIBaseButton>
                        </nuxt-link>
                    </div>
                </div>
            </article>
            <div id="article4_images" class="container mx-auto relative ">
                <img class="city-img absolute w-48 right-0 bottom-2 translate-y-1/2 z-30 xs:w-56 xs:bottom-2.5 sm:w-64 sm:bottom-3"
                src="/images/about_us/third_section/city5.png" alt="city5">
                <img id="article6-tree1" class="absolute hidden md:block z-30 w-16 left-32 -bottom-28" src="/images/about_us/third_section/tree2.png" alt="tree2">
                
            </div>
        </div>
    </div>
</template>
<script setup>
const article1= ref(null)
const article2= ref(null)
const article3= ref(null)
const article4= ref(null)
const article5= ref(null)
const article6= ref(null)

function clipAnimation() {
    
    // article1
    let article1_rect = article1.value.getBoundingClientRect()
    if( article1_rect.top  > 0 ){
        let clipPercentage =  ( (article1_rect.top - 200) / (window.innerHeight -200))   * 100
        article1.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }
    else if(article1_rect.top  < 0){
        let clipPercentage = ((article1_rect.top)/(article1.value.offsetHeight ) )  * 100 * -1
        article1.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;
    }
    // article2
    let article2_rect = article2.value.getBoundingClientRect()
    if( article2_rect.top  > 0 ){
        let clipPercentage =  ( (article2_rect.top - 200) / (window.innerHeight -200))   * 100
        article2.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;
    }
    else if(article2_rect.top  < 0){
        let clipPercentage = ((article2_rect.top)/(article2.value.offsetHeight ) )  * 100 * -1
        article2.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }

    // article3
    let article3_rect = article3.value.getBoundingClientRect()
    if( article3_rect.top  > 0 ){
        let clipPercentage =  ( (article3_rect.top - 200) / (window.innerHeight -200))   * 100
        article3.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }
    else if(article3_rect.top  < 0){
        let clipPercentage = ((article3_rect.top)/(article3.value.offsetHeight ) )  * 100 * -1
         article3.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;
    }
    // article4
    let article4_rect = article4.value.getBoundingClientRect()
    if( article4_rect.top  > 0 ){
        let clipPercentage =  ( (article4_rect.top - 200) / (window.innerHeight -200))   * 100
        article4.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;
    }
    else if(article4_rect.top  < 0){
        let clipPercentage = ((article4_rect.top)/(article4.value.offsetHeight ) )  * 100 * -1
        article4.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }
    // article5
    let article5_rect = article5.value.getBoundingClientRect()
    if( article5_rect.top  > 0 ){
        let clipPercentage =  ( (article5_rect.top - 200) / (window.innerHeight -200))   * 100
        article5.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }
    else if(article5_rect.top  < 0){
        let clipPercentage = ((article5_rect.top)/(article5.value.offsetHeight ) )  * 100 * -1
        article5.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;

    }
    // article6
    let article6_rect = article6.value.getBoundingClientRect()
    if( article6_rect.top  > 0 ){
        let clipPercentage =  ( (article6_rect.top - 200) / (window.innerHeight -200))   * 100
        article6.value.style.clipPath = `inset(0 0 0 ${clipPercentage}%)`;
    }
    else if(article6_rect.top  < 0){
        let clipPercentage = ((article6_rect.top)/(article6.value.offsetHeight ) )  * 100 * -1
        article6.value.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    }

   
    
    
}
onMounted(() => {
    window.addEventListener('scroll', clipAnimation)
    window.addEventListener('resize', clipAnimation)
        
})
onUnmounted(() => {
    window.removeEventListener('scroll', clipAnimation)
    window.removeEventListener('resize', clipAnimation)
})
</script>

<style scoped>
.clipable{
    /* clip-path: inset(0 0 0 99%); */
    transition-property: clip-path;
    transition-duration: 50ms; 
    transition-timing-function:ease;
}
.full{
    clip-path: inset(0 0 0 0);
}
#road-2, #road-1{
        clip-path: inset(0 0 10% 0);
}
@media (min-width: 53.1rem) { /* 849.1 */
    .city-img{
        width:22rem;
        bottom: 1rem;
    }
    /*article 1 trees*/
    #article1-tree1{
        width: 7rem;
        left: 4rem;
        bottom: -9rem;
    }
    #article1-tree2{
        width: 7rem;
        right: 6rem;
        bottom: -14rem;
    }
    /*article 2 trees*/
    #article2-tree1{
        width: 7rem;
        right: 19rem;
        bottom: -5rem;
    }
    #article2-tree2{
        width: 6rem;
        right: 13rem;
        bottom: -16rem;
    }
    #article2-tree3{
        width: 6rem;
        left: 4rem;
        bottom: -14rem;
    }
   
    /*article 3 trees*/
    #article3-tree1{
        width: 7rem;
        left: 16rem;
        top: -12rem;
    }
    #article3-tree2{
        width: 7rem;
        right: 8rem;
        bottom: -13rem;
    }
    #article3-tree3{
        width: 7.5rem;
        left: 15rem;
        bottom: -13.5rem;
    }
    #article3-tree4{
        width: 6rem;
        left: 4rem;
        bottom: -18rem;
    }
    
    /*article 4 trees*/
    #article4-tree1{
        width: 9rem;
        right: 23rem;
        top: -5rem;
    }
    #article4-tree2{
        width: 6rem;
        right: 15rem;
        bottom: -15rem;
    }
    #article4-tree3{
        width: 6rem;
        right: 22.5rem;
        top: 2rem;
        display: block;
    }
    #article4-tree4{
        width: 6rem;
        right: 3rem;
        top: 3rem;
        display: block;
    }
    /*article 5 trees*/
    #article5-tree1{
        width: 6rem;
        left: 18rem;
        top: -18rem;
    }
    #article5-tree2{
        display: none;
    }
    #article5-tree3{
        width: 7rem ;
        left: 14rem;
    }
    #article5-tree4{
        width: 7rem ;
        right: 5rem;
        bottom: -25rem;
    }
    #article5-tree5{
        display: none;
    }
    #article5-tree6{
        width: 7rem ;
        left: 2rem;
        bottom: -18rem;
    }
    /*article 6 tree*/
    #article6-tree1{
        width: 7rem ;
        left: 5rem;
        top: -2rem;
    }
    /*roads*/
    #road-3{
        top: 4.8rem;
        left: 13rem;
        transform: rotate(8deg);
    }
    #road-1 {
        clip-path: inset(0 0 12% 0);
        width: 75%;
        top: 5rem;
        left: 13rem;
        transform: rotate(8deg);
    }
    #road-2{
        clip-path: inset(0 0 10% 0);
        width: 75%;
        top: 5rem;
        right: 13rem;
        transform: rotate(-8deg);
    }
    #road-4{
        width: 75%; /*75 */
        top: 4rem;
        right: 13rem;  /*9.5*/
        transform: rotate(-7deg); /*0*/
    }
    #road-5 {
        width: 82%;
        top: 1rem;
        left: 8rem;
        transform: rotate(10deg);
    }

    article:not(#article1){
        margin-top: 20rem;
    }
    #city-img2{
        width:22rem;
        bottom: 1rem;
    }
}
@media (min-width: 58.5rem) {/* 936 px*/
    #road-1{
        clip-path: inset(0 0 8% 0);
        width: 73%;
        top: 3rem;
        left: 14.5rem;
        transform: rotate(3deg);
    }
    #road-2{
        clip-path: inset(0 0 18% 0);
    }
    #road-3{
        width: 73%;
        top: 3.2rem;
        left: 14rem;
        transform: rotate(3deg);
        clip-path: inset(0 0 6% 0);
    }
    #road-4{
        width: 72%;
        top: 3.5rem;
        right: 14.5rem; 
        transform: rotate(-3deg);
    }
    #road-5 {
        width: 72%;
        top: 2.5rem;
        left: 14rem;
        transform: rotate(3deg);
    }
}
@media (min-width: 64rem) {/*1024*/
    #road-1{
        clip-path: inset(0 0 18% 0);
        aspect-ratio: 0.8;
        width: 71%;
        top: -5.4rem;
        left: 15.5rem;
        transform: rotate(0deg);
    }
    #road-3{
        clip-path: inset(0 0 18% 0);
        aspect-ratio: 0.8;
        width: 71%;
        top: -8rem;
        left: 15rem;
        transform: rotate(-1.5deg);
    }
    #road-2{
        clip-path: inset(0 0 18% 0);
        aspect-ratio: 0.8;
        width: 72%;
        top: -6rem;
        right: 15rem;
        transform: rotate(-0deg);
    }
    #road-4{
        width: 70%;
        top: 1.5rem;
        right: 16rem; 
        transform: rotate(2deg);
    }
    #road-5 {
        width: 69.5%;
        top: 1.2rem;
        left: 16.5rem;
        transform: rotate(-3deg);
    }
    
}
</style>