<template>
    <section id="home-hero-section" class="h-[21.125rem] flex items-center justify-center relative">
        <div class="container mx-auto px-4 flex items-center justify-center">
            <h1 class="max-w-sm sm:max-w-xl  text-center text-4xl font-bold  md:text-5xl md:max-w-3xl lg:text-6xl lg:max-w-4xl ">The All-in-One Platform for Our Urban Future</h1>
           
            
        </div>
         <!-- circles -->
            <div class="absolute top-0 left-0 w-full h-full lg:max-w-[75rem] lg:left-1/2 lg:-translate-x-1/2  ">
                <!-- circle 1 -->
                <div id="img-circle-1" class=" w-11 h-11 rounded-full overflow-hidden absolute left-2 top-8">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_1.svg" alt="hero_section_img_1" srcset="">
                </div>
                <!-- circle 2 -->
                <div id="img-circle-2" class="w-10 h-10 rounded-full overflow-hidden absolute left-[40%] top-0 ">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_2.svg" alt="hero_section_img_2" srcset="">
                </div>
                <!-- circle 3 -->
                <div id="img-circle-3" class="w-[3.375rem] h-[3.375rem] rounded-full overflow-hidden
                            absolute right-6 top-4">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_3.svg" alt="hero_section_img_3" srcset="">
                </div>
                <!-- circle 4 -->
                <div id="img-circle-4" class="w-10 h-10 rounded-full overflow-hidden
                            absolute right-4 top-[50%]
                            xs:top-[25%]">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_4.svg" alt="hero_section_img_4" srcset="">
                </div>
                <!-- circle 5 -->
                <div id="img-circle-5" class="w-[3.125rem] h-[3.125rem] rounded-full overflow-hidden
                            absolute right-8 bottom-4">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_5.svg" alt="hero_section_img_5" srcset="">
                </div>
                <!-- circle 6 -->
                <div id="img-circle-6" class="w-[3.875rem] h-[3.875rem] rounded-full overflow-hidden
                            absolute left-[30%] bottom-4">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_6.svg" alt="hero_section_img_6" srcset="">
                </div>
                <!-- circle 6 -->
                <div id="img-circle-7" class="w-[2.8125rem] h-[2.8125rem] rounded-full overflow-hidden
                            absolute left-2 bottom-[25%]">
                    <img class="w-full h-full object-contain " src="/images/home/hero_section/hero_section_img_7.svg" alt="hero_section_img_7" srcset="">
                </div>

            </div>
        
    </section>
</template>
<style scoped>
    
    @media (min-width:22.375rem) {
        #home-hero-section{
            @apply h-[27.5rem] 
        }
        #img-circle-1{
           @apply w-[4.125rem] h-[4.125rem] top-4 left-[5%];
        }
        #img-circle-2{
           @apply w-[3.07rem] h-[3.07rem] top-14;
        }
        #img-circle-3{
           @apply w-16 h-16 top-4 right-[20%];
        }
        #img-circle-4{
           @apply w-[3.375rem] h-[3.375rem] top-24;
        }

        #img-circle-5{
           @apply w-[5.44rem] h-[5.44rem] bottom-14 right-[10%];
        }

        #img-circle-6{
           @apply w-[4.69rem] h-[4.69rem] left-[25%];
        }

        #img-circle-7{
           @apply w-[3.375rem] h-[3.375rem] left-[5%];
        }
    }

    @media (min-width:38.75rem) {
        #img-circle-2{
           @apply w-[4.125rem] h-[4.125rem];
        }
        #img-circle-3{
           @apply right-[10%];
        }
        #img-circle-4{
           @apply top-[55%];
        }
        #img-circle-5{
           @apply right-[20%];
        }
    }
    @media (min-width:48rem) {
        #img-circle-1{
           @apply w-20 h-20 ;
        }
        #img-circle-2, #img-circle-6{
           @apply w-[5.75rem] h-[5.75rem] ;
        }
        #img-circle-3{
           @apply w-[4.8125rem] h-[4.8125rem] ;
        }
        #img-circle-5{
           @apply w-[8.375rem] h-[8.375rem] bottom-4;
        }
        #img-circle-7{
           @apply w-[4.25rem] h-[4.25rem] ;
        }
        
    }
    @media (min-width:64rem) {
        #home-hero-section{
            @apply h-[calc(100vh-7rem)] 
        }
        #img-circle-1{
            @apply w-[9.69rem] h-[9.69rem] left-2 top-4;
        }
        #img-circle-2{
           @apply w-[7.125rem] h-[7.125rem] ;
        }
        #img-circle-3{
           @apply w-[8.8125rem] h-[8.8125rem] ;
        }
        #img-circle-4{
           @apply w-[6.69rem] h-[6.69rem] bottom-4;
        }
        #img-circle-5{
           @apply w-[11.5625rem] h-[11.5625rem];
        }
        #img-circle-6{
           @apply w-[8.8125rem] h-[8.8125rem] ;
        }
        #img-circle-7{
           @apply w-[9.69rem] h-[9.69rem] bottom-[15%];
        }
    }
</style>