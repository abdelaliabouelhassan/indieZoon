<template>
    <section class="bg-primary text-endie-green" >
        <div class="container mx-auto px-4 pb-24 flex flex-col justify-center items-center gap-y-12 relative
                      sm:pb-32 
                      md:pt-36 md:pb-0
                      lg:pb-56 ">
            <img class="md:order-2 w-full object-contain max-w-xl lg:absolute 
                        lg:bottom-8 lg:right-4 lg:max-w-lg" 
                src="/images/for_you/hero_image.svg" alt="hero_image">
            <div class="w-full flex flex-col items-center gap-y-20 md:order-1 lg:items-start">
                <div class="w-full text-center font-bold  text-3xl max-w-xs
                            xs:max-w-sm
                            sm:text-4xl sm:max-w-lg
                            md:text-5xl md:max-w-[41rem] lg:max-w-4xl lg:text-start">
                    >{{ $t('kompliziert') }}
                </div>
                <div class="w-full flex flex-col items-center gap-y-8 lg:items-start">
                    <p class="hidden lg:block text-5xl font-bold">{{ $t('Wir_auch') }}</p>
                    <div @click="gotoChallenge" >
                        <UIBaseButton class="px-10 py-4 bg-white  hover:scale-y-110 hover:scale-x-110 self-center ">
                            <div class="text-primary font-bold md:text-xl">{{ $t('Start_Now') }}</div> 
                        </UIBaseButton>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>
function gotoChallenge() {
    // let section = document.getElementById('challenge_1_section')
    // section.scrollIntoView({behavior:'smooth'});


    const sectionId = "challenge_1_section";
    const section = document.getElementById(sectionId);  
    const yOffset = 230; 
    // // Offset to adjust for any fixed header or navigation bar  
    window.scrollTo({   top: section.offsetTop + yOffset,   behavior: 'smooth' });
}
</script>