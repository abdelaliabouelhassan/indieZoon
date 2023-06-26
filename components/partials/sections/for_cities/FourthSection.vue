<template>
    <section class="w-full max-w-[1169px] mx-auto px-4 pt-24 pb-56 flex flex-col items-center space-y-16  ">
        <!-- section head title -->
        <h2 class="text-4xl font-bold sm:text-5xl text-center">{{$t('Funktionen')}}</h2>
         
         <!-- feature cards -->
        <div class="w-full space-y-40">
                <div class=" w-full flex items-center justify-between lg:space-x-10  xl:space-x-0 flex-col lg:flex-row sm:flex-col md:flex-col-reverse">
                    <div class=" max-w-[36.563rem] max-h-[26.438rem] w-full">
                        <img src="/images/for_you/chat.svg" class=" w-full h-full object-cover" alt="">
                    </div>
                     <div class=" w-full max-w-[28.5rem] space-y-4 sm:pb-16 pt-10  lg:pt-0 pb-0">
                            <h1 class=" text-primary font-bold text-2xl ">{{ $t('Reichweitenstarke_Kommunikation') }}</h1>
                            <ul class=" list-disc pl-6 md:pl-10 lg:pl-5 font-semibold text-primary text-base space-y-2">
                                <li class=" bullet">{{ $t('Flächendeckende_Verbreitung_von_Information_an_alle_Nutzer') }} </li>
                                <li class=" bullet">{{ $t('Strukturierte_Wissenssammlung') }}</li>
                                <li class=" bullet">{{ $t('KI_Chatbot_zur_mühelosen_Hilfe') }}</li>
                            </ul>
                    </div>
                </div>
                <div class=" w-full flex items-center justify-between lg:space-x-10 xl:space-x-0   lg:flex-row md:flex-col flex-col-reverse">
                    
                     <div class=" w-full max-w-[28.5rem] space-y-4  pb-16 pt-10 lg:pt-0 lg:pb-0 ">
                            <h1 class=" text-primary font-bold text-2xl ">{{ $t('Zielgruppenorientierung') }}</h1>
                            <ul class=" list-disc pl-6 md:pl-10 lg:pl-5 font-semibold text-primary text-base space-y-2">
                                <li class=" bullet">{{ $t('Genaue_Adressierung_passender_Inhalte') }} </li>
                                <li class=" bullet">{{ $t('Vermeidung_von_Frustration_durch_Überflutung_mit_unrelevanten_Informationen') }}</li>
                                <li class=" bullet">{{ $t('Individuelle_Zielgruppen_erstellbar') }}</li>
                            </ul>
                    </div>
                    <div class=" max-w-[36.563rem] max-h-[26.438rem] w-full">
                        <img src="/images/for_you/portal.png" class=" w-full h-full object-cover" alt="">
                    </div>
                </div>
                 <div class=" w-full flex items-center justify-between lg:space-x-10 xl:space-x-0 flex-col lg:flex-row sm:flex-col md:flex-col-reverse">
                    <div class=" max-w-[36.563rem] max-h-[26.438rem] w-full">
                        <img src="/images/for_you/planing.svg" class=" w-full h-full object-cover" alt="">
                    </div>
                     <div class=" w-full max-w-[28.5rem] space-y-4 sm:pb-16 pt-10  lg:pt-0 pb-0">
                            <h1 class=" text-primary font-bold text-2xl ">{{ $t('Rückmeldungen_und_Befragungen') }}</h1>
                            <ul class=" list-disc pl-6 md:pl-10 lg:pl-5 font-semibold text-primary text-base space-y-2">
                                <li class=" bullet">{{ $t('Einfache_Integration') }}</li>
                                <li class=" bullet">{{ $t('Schnelle') }}</li>
                                <li class=" bullet">{{ $t('Systematisierte_Abwicklung') }}</li>
                            </ul>
                    </div>
                </div>
                   <div class=" w-full flex items-center justify-between lg:space-x-10 xl:space-x-0  flex-col lg:flex-row md:flex-col sm:flex-col-reverse">
                    
                     <div class=" w-full max-w-[28.5rem] space-y-4  pb-16 pt-10 lg:pt-0 lg:pb-0 ">
                            <h1 class=" text-primary font-bold text-2xl ">{{ $t('Intuitive_Bedienung') }}</h1>
                            <ul class=" list-disc pl-6 md:pl-10 lg:pl-5 font-semibold text-primary text-base space-y-2">
                                <li class=" bullet">{{ $t('Bedienung im Browser oder per App überall möglich ') }}</li>
                                <li class=" bullet">{{ $t('Intuitive_Oberfläche') }}</li>
                                <li class=" bullet">{{ $t('Video_Tutorials_bei_Bedarf_verfügbar') }}</li>
                            </ul>
                    </div>
                    <div class=" max-w-[36.563rem] max-h-[26.438rem] w-full">
                        <img src="/images/for_you/pc.svg" class=" w-full h-full object-cover" alt="">
                    </div>
                </div>
                

               
        </div>
    </section>
</template>

<script setup>
onMounted(() => {
   const elements = document.querySelectorAll('.bullet');
   
   elements.forEach((element) => {
            const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                element.classList.add('animate-bullet-line');
                observer.disconnect();
            }
            });
            observer.observe(element);
        });

 
});
</script>