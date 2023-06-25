<template>
    <section class="w-full relative pb-20 mt-10">
        <!-- background images -->
        <img class="w-full pt-36 sm:pt-40 md:pl-[20%] md:pt-96  lg:hidden" 
             src="/images/puzzle_backgroung.svg" alt="puzzle_backgroung">
        <div class="container mx-auto hidden lg:block ">
            <img class=" w-full pl-[25%] pt-56 object-contain max-w-[69.375rem]" 
                src="/images/puzzle_backgroung_lg.svg" alt="puzzle_backgroung_lg">
        </div>

        <!-- section content -->
        <div class="absolute top-0  w-full flex flex-col gap-y-4 md:gap-y-8 px-4 container left-1/2 -translate-x-1/2 ">
            <h2 class="text-4xl font-bold sm:text-5xl md:text-start md:pt-52 lg:pt-20">{{ $t('Unsere_Ziele') }}</h2>
            <div class="
                max-w-[32rem] font-semibold
                md:text-[1.5625rem] 
                sm:text-[0.875rem]
                 text-[0.675rem]
                md:max-w-[855rem] w-full
                lg:max-w-[69.8125rem] 
                 flex flex-col md:gap-y-4">
                <p class=" whitespace-normal lg:whitespace-nowrap">  {{ $t('Verwaltungen_entlasten') }}</p>
                <p>{{ $t('Digitalisierung') }}</p>
                <p>{{ $t('Bürger_und_Verwaltung_näher_zusammenbringen') }}</p>
            </div>
            <nuxt-link to="/about">
                <div class="text-sm underline underline-offset-4 flex items-center gap-x-1">
                   {{$t('Mehr_über_uns')}}
                    <!-- chevron -->
                    <svg class="w-2.5 h-2.5 -rotate-90 mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                        <g>
                            <path stroke="black" stroke-width="2" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                        </g>
                    </svg>
                </div>
            </nuxt-link>
        </div>


        <div class=" w-full flex pt-56">
            <div class=" mx-auto flex flex-col items-center space-y-10">
                <h2 class=" text-primary font-bold text-4xl md:text-5xl max-w-[25rem] lg:max-w-full text-center">Worauf wartest du noch?</h2>
                    <NuxtLink to="/contact" >
                        <UIBaseButton class="px-10 py-4 bg-primary  hover:scale-y-125 hover:scale-x-110">
                                <div class="text-white text-sm md:text-xl font-bold text-center">{{ $t('Jetzt_Gespräch_vereinbaren') }}</div> 
                        </UIBaseButton>
                    </NuxtLink>
            </div>
        </div>
    </section>
</template>
