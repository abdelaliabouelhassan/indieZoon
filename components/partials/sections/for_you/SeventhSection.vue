<template>
    <section class="w-full relative pb-32 mt-36  md:mt-0 lg:mt-20">
        <!-- background images -->
        <img class="w-full pt-60 xs:pt-44 pl-6 md:pl-[15%] md:pt-[22rem]  lg:hidden" 
             src="/images/puzzle_backgroung.svg" alt="puzzle_backgroung">
        <div class="container mx-auto hidden lg:block ">
            <img class=" w-full pl-[15%] pt-56 object-contain max-w-[69.375rem]" 
                src="/images/puzzle_backgroung_lg.svg" alt="puzzle_backgroung_lg">
        </div>

        <!-- section content -->
        <div class="absolute top-0  w-full flex flex-col gap-y-8 px-4 container left-1/2 -translate-x-1/2 ">
            <h2 class="text-4xl font-bold sm:text-5xl md:text-start md:pt-52 lg:pt-20">{{ $t('Unsere_Ziele') }}</h2>
            <div class="flex flex-col gap-y-4 md:gap-y-6">
                <div class="max-w-[20rem] xs:max-w-none font-semibold flex flex-col leading-8 md:leading-normal 
                    md:text-xl  md:gap-y-4">
                    <p>{{ $t('Komfortabel') }}</p>
                    <p>{{ $t('Nachhaltigkeit_Weil') }}</p>
                    <p>{{ $t('Wieder') }}</p>
                </div>
                <nuxt-link to="/about">
                    <div class="text-sm underline underline-offset-4 flex items-center gap-x-1">
                        {{ $t('Mehr') }}
                        <!-- chevron -->
                        <svg class="w-2.5 h-2.5 -rotate-90 mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path stroke="black" stroke-width="2" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
