<template>
    <footer class="flex flex-col gap-y-10 container mx-auto px-4 py-10 mt-20">

        <!-- footer top section -->
        <div class="grid grid-cols-1 gap-y-10  md:grid-cols-12 ">
            <!-- newsletter subscription -->
            <div class="flex flex-col gap-y-6 max-w-md 
                        md:max-w-none  md:order-2 md:col-span-5 md:gap-y-3">
                <h3 class="md:text-lg font-semibold md:mb-2">{{ $t('Händler') }}</h3>
                <UIBaseTextInput placeholder="Mail-Adresse">
                    <!-- send button -->
                    <button class="w-6 h-6 hover:scale-125 ">
                        <svg class="w-full h-full" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M18.9895 3.97984L13.3375 16.9937C13.1832 17.3489 13.1061 17.5265 12.9806 17.6085C12.8754 17.6772 12.7483 17.7037 12.6244 17.6829C12.4766 17.6581 12.3347 17.5263 12.0511 17.2626L9.20085 14.6133L7.38345 16.3009L7.38345 13.0555L15.1621 6.82446L6.13399 11.8061L3.71163 9.46304C3.37634 9.13872 3.2087 8.97657 3.18214 8.81261C3.15996 8.67574 3.19562 8.53582 3.28058 8.42625C3.38237 8.295 3.60717 8.23284 4.05678 8.10853L18.9895 3.97984Z" fill="#1A2933"/>
                            </g>
                        </svg>
                    </button>
                </UIBaseTextInput>
                <div class="flex gap-x-2 items-start">
                    <input class="mt-1 w-4 h-4 shrink-0" type="checkbox">
                    <div>
                        {{ $t('Ich_nehme_die') }} <span class="text-[#0968C0]">{{ $t('Datenschutzhinweise') }} </span> {{ $t('zur_Kenntniss') }}
                    </div>
                </div>
                <div class="text-light">
                   {{$t('Abboniere')}} 
                </div>
            </div>
            <!-- logo and other links -->
            <div class="flex gap-x-[30%]  py-8 max-w-md
                        md:py-0 md:max-w-none md:gap-x-[30%] md:order-1 md:col-span-7 md:h-fit lg:gap-x-[35%]">
                <div class="flex flex-col justify-between shrink-0">
                    <img class="h-28 w-28" src="/images/footer/footer_logo.svg" alt="footer_logo">
                    <div>
                        <div class="mt-4">
                            <nuxt-link to="/">{{ $t('Impressum') }}</nuxt-link>
                        </div>
                        <div class="mt-2">
                            <nuxt-link to="/">{{ $t('Datenschutz') }}</nuxt-link>
                        </div>
                         <div class="mt-2">
                            <nuxt-link to="/pre-register">{{ $t('Voranmelden') }}</nuxt-link>
                        </div>
                         <div class="mt-2">
                            <nuxt-link to="/contact">{{ $t('Kontakt') }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <h3 class="md:text-lg font-semibold mb-2">Inhalte</h3>
                  
                    <div class="hover:scale-105 hover:font-medium">
                        <nuxt-link to="/for-you">{{ $t('Für_Dich') }}</nuxt-link>
                    </div>
                    
                    <div class="hover:scale-105 hover:font-medium">
                        <nuxt-link to="/for-cities">{{ $t('Für_Städte') }}</nuxt-link>
                    </div>
                     <div class="hover:scale-105 hover:font-medium">
                        <nuxt-link to="/for-traders">{{ $t('Händler:innen') }}</nuxt-link>
                    </div>

                    <div class="hover:scale-105 hover:font-medium">
                        <nuxt-link to="/about">{{ $t('Über_uns') }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer bottom section -->
        <div class="w-full flex flex-col pt-3 border-t-2 border-black lg:flex-row lg:justify-between lg:items-start">
            <!-- copyright -->
            <p class="w-full text-center sm:text-end lg:order-2">
                &copy; IndieZone {{new Date().getFullYear()}}  designed by Klara Prettl
            </p>

            <!-- european union -->
            <div class="flex gap-x-4 xs:gap-x-10 mt-6 lg:mt-0 lg:order-1">
                <img class="w-44 sm:w-40 object-contain shrink-0" src="/images/EFRE_EU.svg" alt="EFRE_EU">
                <div class="max-w-[14rem] lg:shrink-0">{{ $t('Union') }}</div>
            </div>
        </div>
    </footer>
</template>