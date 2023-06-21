<template>
    <section class="bg-primary text-endie-green">
        <div class="container mx-auto px-4 py-24 sm:py-32 flex flex-col justify-center items-center gap-y-12 
                      lg:pt-36 lg:pb-56 relative">
            <img class="md:order-2 w-full object-contain max-w-xl lg:absolute 
                        lg:bottom-8 lg:right-4 lg:max-w-lg" 
                src="/images/for_you/hero_image.svg" alt="hero_image">
            <div class="w-full flex flex-col items-center gap-y-20 md:order-1 lg:items-start">
                <div class="w-full text-center font-bold  text-3xl max-w-xs
                            xs:max-w-sm
                            sm:text-4xl sm:max-w-lg
                            md:text-5xl md:max-w-[41rem] lg:max-w-4xl lg:text-start">
                    >80% der Menschen finden es zu kompliziert und aufwendig nachhaltig zu leben.
                </div>
                <div class="w-full flex flex-col items-center gap-y-8 lg:items-start">
                    <p class="hidden lg:block text-5xl font-bold">Wir auch!</p>
                    <nuxt-link to="/pre-register">
                        <UIBaseButton class="px-10 py-4 bg-white  hover:scale-y-110 hover:scale-x-110 self-center ">
                            <div class="text-primary font-bold md:text-xl">Start Now</div> 
                        </UIBaseButton>
                    </nuxt-link>
                </div>
                
            </div>
        </div>
    </section>
</template>