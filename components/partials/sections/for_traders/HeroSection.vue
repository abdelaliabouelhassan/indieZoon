<template>
    <section class="w-full container mx-auto px-4 pb-12 text-center flex flex-col gap-y-12 
                md:gap-y-6 xl:flex-row xl:text-start xl:justify-between xl:items-center  xl:gap-x-12">
        <!-- hero image -->
        <div class="w-full flex justify-center items-center md:order-2 xl:justify-end">
            <img class="w-full md:max-w-xl lg:max-w-xl object-contain" src="/images/for_traders/hero.png" alt="hero">
        </div>
        <!-- hero content -->
        <div class="flex flex-col items-center gap-y-8 md:order-1 md:mt-10 xl:mt-0 xl:items-start">
            <h1 class="text-4xl font-bold sm:text-5xl max-w-md lg:text-6xl xl:max-w-sm">{{ $t('Gemeinsam') }}</h1>
            <p class="max-w-2xl">{{ $t('Verbinde') }}</p>
            <div class="flex flex-col items-center gap-y-4 xl:items-start">
                <nuxt-link to="/pre-register">
                    <UIBaseButton class="w-fit px-7 py-3  hover:scale-y-125 hover:scale-x-110">
                        {{ $t('Starte_in_deine_Zukunft') }}
                    </UIBaseButton>
                </nuxt-link>
                <p class="text-light max-w-md"> {{ $t('der_befragten') }}</p>
            </div>
        </div>
    </section>
</template>

