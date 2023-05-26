<template>
    <section id="home_fourth_section" class="w-full relative pb-20">
        <!-- background -->
        <img class="w-full pt-32 md:pl-[20%] md:pt-80 lg:hidden" 
             src="/images/home/home_fourth_section_backgroung.svg" alt="home_fourth_section_backgroung">
        <!-- background lg -->
        <img class="hidden w-full lg:block pl-[25%] pt-44" 
             src="/images/home/home_fourth_section_backgroung_lg.svg" alt="home_fourth_section_backgroung_lg">

        <div class="absolute top-0  w-full flex flex-col gap-y-8 px-4 container left-1/2 -translate-x-1/2 ">
            <h2 class="text-4xl font-bold sm:text-5xl text-center md:text-start md:pt-52 lg:pt-20">Unsere Mission</h2>
            <p class="max-w-sm md:max-w-lg xl:max-w-xl lg:text-lg md:font-semibold">Den lokalen Einzelhandel stärken, einzigartige, lokal produzierte Produkte und nachhaltigen Konsum fördern.</p>
            <div class="font-medium underline underline-offset-4">
                <nuxt-link to="/">Mehr über uns</nuxt-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>