<template>
    <section ref="challenge_3" id="challenge_3_section" class="w-full pt-28 pb-16 space-y-20 lg:pb-28 xl:pb-36  ">
        <!-- section head title -->
        <div  class="flex flex-col gap-y-8">
            <h3 class="text-3xl font-bold sm:text-4xl container mx-auto px-4">{{ $t('Challenge_3_Wann') }}</h3>
            <div class="w-full">
                <img @click="switchFromGif1" id="challenge_1_gif" 
                    class="w-full object-contain" 
                    src="/images/for_you/challenge_comming_soon.svg">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>