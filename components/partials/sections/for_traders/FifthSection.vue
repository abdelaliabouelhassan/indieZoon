<template>
    <section class="pb-48 container  mx-auto mt-44 md:mt-28 lg:mt-0">
            <!-- section title -->
            <h2 class="text-4xl px-4 font-bold sm:text-5xl md:max-w-[36rem] md:mx-auto md:px-0 lg:max-w-none lg:px-4 ">
              {{$t('funktioniert')}}
            </h2>

        <article class="flex flex-col w-full px-4 gap-y-20 pt-32 sm:pt-40 md:pt-16 relative  md:items-center
                        lg:pt-52 lg:flex-row ">
            <!-- article image -->
            <img class="w-full object-contain 
                        md:max-w-xl md:order-2 
                        lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0 " 
                src="/images/for_traders/registrieren.gif" alt="registrieren">
            <!-- image space allocator -->
            <div class="hidden lg:block w-[50%]"></div>
            <!-- article content -->
            <div class="flex flex-col gap-y-5 
                        md:max-w-[36rem] md:order-1 
                        lg:order-2 lg:w-[50%]  lg:ml-36 xl:ml-[17rem]">
                <!-- article title -->
                <h3 class=" font-bold  text-2xl">{{ $t('Registrieren') }}</h3>
                <!-- article paragraph -->
                <p>{{ $t('Wir_wissen') }}</p>
            </div>
            
        </article>

        <article class="flex flex-col w-full px-4 gap-y-20 pt-64 relative sm:pt-72 md:items-center lg:pt-[26rem]
                        lg:flex-row  xl:pt-96">
            <!-- article image -->
            <img class="w-full object-contain 
                        md:max-w-xl md:order-2
                        lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2 " 
                        src="/images/for_traders/Produkt.png" alt="Produkt">
            <!-- image space allocator -->
            <div class="hidden lg:block order-2 w-[50%]"></div>
            <!-- article content -->
            <div class="flex flex-col gap-y-5 
                        md:max-w-[36rem] md:order-1 
                        lg:w-[50%] lg:mr-5 ">
                <!-- article title -->
                <h3 class=" font-bold  text-2xl">{{ $t('Produkte_hochladen') }}</h3>
                <!-- article paragraph -->
                <p class="lg:max-w-[27.688rem]">{{ $t('Stelle_deine') }}</p>
            </div>
                
        </article>

        <article class="flex flex-col w-full md:px-4 gap-y-24 pt-64 relative sm:pt-72 md:items-center lg:pt-[26rem] overflow-hidden md:overflow-visible
                        lg:flex-row  xl:pt-96">
            <!-- article image -->
            <img class="w-full object-contain scale-[120%] md:transform-none
                        md:max-w-xl md:order-2 
                        lg:order-1 lg:max-w-none lg:w-[50%] lg:absolute lg:left-0 " 
                src="/images/for_traders/Bequem-im-Laden-verkaufen.svg" alt="Bequem-im-Laden-verkaufen">
            <!-- image space allocator -->
            <div class="hidden lg:block w-[50%]"></div>
            <!-- article content -->
            <div class="flex flex-col gap-y-5  px-4 md:px-0
                        md:max-w-[36rem] md:order-1 
                        lg:order-2 lg:w-[50%]   lg:ml-48 ">
                <!-- article title -->
                <h3 class="font-bold  text-2xl">{{ $t('Bequem_im_Laden_verkaufen') }}</h3>
                <!-- article paragraph -->
                <p>{{ $t('Verkaufe') }}</p>
            </div>
            
        </article>

        <article class="flex flex-col w-full px-4 gap-y-20 pt-52 relative  md:items-center lg:pt-[26rem]
                        lg:flex-row lg:container lg:mx-auto 2xl:max-w-[85rem] xl:pt-96">
            <!-- article image -->
            <img class="w-full object-contain 
                        md:max-w-xl md:order-2
                        lg:max-w-none lg:w-[50%] lg:absolute lg:left-1/2 " 
                        src="/images/for_traders/Transparenz.png" alt="Transparenz">
            <!-- image space allocator -->
            <div class="hidden lg:block order-2 w-[50%]"></div>
            <!-- article content -->
            <div class="flex flex-col gap-y-5 
                        md:max-w-[36rem] md:order-1 
                        lg:w-[50%] lg:mr-5 ">
                <!-- article title -->
                <h3 class="font-bold  text-2xl">{{ $t('Kontrolliere_deinen_Erfolg') }}</h3>
                <!-- article paragraph -->
                <p class=" lg:max-w-[29.563rem]">{{ $t('IndieZone_bietet_volle') }}</p>
            </div>
                
        </article>


    </section>
</template>