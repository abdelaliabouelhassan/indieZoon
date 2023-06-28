<template>
    <section ref="challenge_2" id="challenge_2_section" class="w-full pt-28 pb-16 space-y-20 lg:pb-28 xl:pb-36  ">
        <!-- section head title -->
        <div class="flex flex-col gap-y-10 sm:gap-y-16 lg:gap-y-20">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">{{ $t('Challenge_2_geht') }}</h3>
            <div class="w-full">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full  object-fill" 
                    src="/images/for_you/challenge_comming_soon.svg">
            </div>
        </div>
    </section>
</template>
