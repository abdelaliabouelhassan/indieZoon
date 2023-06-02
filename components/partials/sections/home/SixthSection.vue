<template>
    <!-- the section should be flex so that the z-index would work -->
    <section class="w-full  flex  relative overflow-hidden">
       <!-- background images -->
        <img src="/images/home/sixth_section_backgrounds/home_sixth_section_background.svg" alt="home_sixth_section_background" 
            class="absolute top-0 right-0 w-screen h-full z-[1] xs:hidden">
        <img src="/images/home/sixth_section_backgrounds/home_sixth_section_background_xs.svg" alt="home_sixth_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] xs:block md:hidden scale-x-150">
        <img src="/images/home/sixth_section_backgrounds/home_sixth_section_background_md.svg" alt="home_sixth_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] md:block  xl:hidden scale-x-[160%]">
        <img src="/images/home/sixth_section_backgrounds/home_sixth_section_background_lg.svg" alt="home_sixth_section_background" 
            class="hidden absolute top-0 right-0 w-screen h-full z-[1] xl:block scale-x-[160%] ">
        
        <!-- section content -->
        <div class="w-full container py-48 z-[2] mx-auto px-4 flex flex-col items-center text-white">
            <!-- section header -->
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 sm:mt-44">
                <span class="md:hidden">FAQ</span> 
                <span class="hidden md:block">Häufige Fragen (FAQ)</span> 
            </h2>
            <!-- accorion elements -->
            <div v-accordion class="accordion flex flex-col gap-y-5 mt-20  max-w-2xl">
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Muss ich Produkte hochladen? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">IndieZone bietet drei verschiedene Abomodelle an. Das günstigste Modell beinhaltet eine reine Shoppräsenz auf unserer Plattform. Das EInstellen von Produkten ist somit keine Pflicht. Wir würden es Ihnen aber sehr raten, um den Kunden ein möglichst gutes Bild von dem zu geben, was sie in Ihrem Laden kaufen können.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Was kostet IndieZone? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">Anders als die Onlinemarktplatzgiganten wird IndieZone keine Margen verlangen. Wir werden ein Abomodell verfolgen, welches sich nicht an Ihren Umsätzen, sondern an der eingestellten Produktanzahl bemisst. Da wir noch nicht auf dem Markt sind, stehen unsere Preise noch nicht fest. Die verschiedenen Abomodelle werden sich jedoch vorraussichtlich zwischen 9€ und 100€ befinden.<br> Derzeit sind wir mit verschiedenen Städten im Gespräch, um unseren Händlern einen kostenlosen Zugang zu ermöglichen.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Ist die Voranmeldung verbindlich? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">Die Voranmeldung bei IndieZone ist nicht verbindlich, sichert Ihnen aber einen Platz, sobald wir in Ihrer Region auf den Markt gehen. Zudem sagen wir Ihnen natürlich Bescheid, sobald IndieZone online geht. Außerdem unterstützen Sie uns durch eine Voranmeldung, da wir durch das so gezeigte Interesse bei Städten für eine Förderung Ihres Abonements argumentieren können.</p>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col items-center gap-y-5 mt-20  xl:mt-24">
                <div class="text-center md:text-xl lg:text-2xl md:font-semibold">Noch nicht alle Fragen beantwortet?</div>
                <UIBaseButton class="px-10 py-4 bg-white hover:scale-y-125 hover:scale-x-110">
                    <div class="text-primary">Jetzt direkt Fragen</div> 
                </UIBaseButton>
            </div>

            <div class="flex flex-col items-center gap-y-5 text-center mt-48   ">
                <div class="font-light">Werde Teil der IndieZone</div>
                <p class="text-xl font-medium xs:text-2xl sm:text-3xl  sm:max-w-2xl lg:max-w-4xl">Registriere dich direkt und mache den nächsten Schritt. Werde Teil der wachsenden Gemeinschaft und gestalte den Einzelhandel der Zukunft.<br><br>Einfach. Fair. Effektiv.</p>
            </div>
            <nuxt-link to="/pre-register" class="mt-20">
                <UIBaseButton class="px-10 py-4 bg-white   hover:scale-y-125 hover:scale-x-110">
                    <div class="text-primary"> Jetzt Voranmelden</div> 
                </UIBaseButton>
            </nuxt-link>
        </div>
        

    </section>
</template>