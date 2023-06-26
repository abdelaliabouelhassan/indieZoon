<template>
    <div class="  w-full relative bg-primary pt-36 lg:pt-0 overflow-hidden">
        <img src="/images/for_you/Seitenverhältnis.svg" class=" hidden lg:block w-full h-full " alt="">
        <img src="/images/for_you/Seitenverhältnis_1.svg" class=" lg:hidden w-full h-full" alt="">
        <div class=" w-full h-full z-20 top-0 left-0 absolute flex">
            <div class=" mx-auto pt-20 lg:pt-0 lg:m-auto">
                <div class="  max-w-[24rem] md:max-w-[40.188rem] lg:max-w-[51.938rem] w-full flex flex-col items-center space-y-8 md:space-y-14">
                    <h1 class=" text-endie-green text-3xl md:text-6xl lg:text-7xl font-bold text-center">{{ $t('Weil_Digital_auch_Einfach_geht') }}</h1>
                     <NuxtLink to="/pre-register" >
                        <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                                <div class="text-primary text-sm md:text-xl font-bold text-center">{{ $t('Jetzt_Gespräch_vereinbaren') }}</div> 
                        </UIBaseButton>
                       </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>