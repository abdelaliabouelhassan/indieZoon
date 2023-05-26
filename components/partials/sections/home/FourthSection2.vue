<template>
    <section id="home_fourth_section" class="w-full h-[35rem] mb-20 bg-contain bg-no-repeat bg-right-bottom
            xs:h-[45rem] sm:h-[55rem] md:h-[70rem] lg:h-[80em] xl:h-[80rem] 2xl:h-[110rem]">
        <div class="flex flex-col gap-y-8 px-4 container mx-auto">
            <h2 class="text-4xl font-bold sm:text-5xl text-center md:text-start md:pt-52 lg:pt-20">Unsere Mission</h2>
            <p class="max-w-sm md:max-w-lg xl:max-w-xl lg:text-lg md:font-semibold">Den lokalen Einzelhandel stärken, einzigartige, lokal produzierte Produkte und nachhaltigen Konsum fördern.</p>
            <div class="font-medium underline underline-offset-4">
                <nuxt-link to="/">Mehr über uns</nuxt-link>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
#home_fourth_section{
    background-image: url(/images/home/home_fourth_section_backgroung.png);
    /* background-repeat:no-repeat;
    background-size: contain;
    background-position:bottom right ; */
    /* background-position-y:100%;  */
}
</style>