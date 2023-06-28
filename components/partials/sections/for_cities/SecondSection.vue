<template>
    <div class=" w-full max-w-[70rem] mx-auto py-24 overflow-hidden md:py-40 space-y-20 sm:space-y-28  md:space-y-40 px-4 xl:px-0">
        <div class=" w-full flex  items-end left translate-x-[100%] opacity-0">
            <span class=" text-black font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl max-w-[8.5rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[18rem]">{{ $t('Stille_Telefone_statt_Telefonterror') }}</span>
            <div>
                <img src="/images/for_you/phone.svg" class=" w-full h-full max-w-[6.063rem] max-h-[6.063rem] sm:max-w-[9.563rem] sm:max-h-[9.563rem] md:max-w-[11.063rem] md:max-h-[11.063rem]  lg:max-w-[20.688rem] lg:max-h-[20.688rem] object-cover" alt="">
            </div>
        </div>
         <div class=" w-full flex  justify-end items-start sm:-space-x-28  space-y-8 -space-x-20 lg:-space-x-40 sm:space-y-14 right translate-x-[-100%] opacity-0">
            <span class=" text-black font-bold text-sm sm:text-xl md:text-2xl max-w-[15rem] lg:text-3xl sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[29.5rem] xl:max-w-[30.5rem]">{{ $t('Konstruktive_Bürgerbeteilung_statt_später_Meckern') }}</span>
            <div>
                <img src="/images/for_you/ppl.svg" class=" w-full h-full max-w-[12.625rem] max-h-[12.625rem] md:max-w-[14.563rem] md:max-h-[14.563rem] lg:max-w-[24.188rem] lg:max-h-[24.188rem] object-cover" alt="">
            </div>
        </div>
          <div class=" w-full flex  justify-start items-start -space-x-10 -space-y-4 lg:space-y-0 sm:-space-x-10 lg:-space-x-10 left translate-x-[100%] opacity-0">
             <div>
                <img src="/images/for_you/phone1.svg" class=" w-full h-full max-w-[9.125rem] max-h-[9.125rem] sm:max-w-[11.563rem] sm:max-h-[11.563rem] lg:max-w-[24.188rem] lg:max-h-[24.188rem] object-cover" alt="">
            </div>
            <span class=" text-black text-end font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl max-w-[14rem] sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[29.875rem]">{{ $t('Direkter_Kanal_statt_Bergen_von_Postwurfsendungen') }}</span>
           
        </div>
        <div class=" w-full flex  justify-end items-start -space-x-6 space-y-4 sm:-space-x-16  lg:-space-x-16 sm:space-y-6 right translate-x-[-100%] opacity-0">
            <span class=" text-black font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl max-w-[10rem] sm:max-w-[15rem] md:max-w-[18rem] lg:max-w-[20.813rem]">{{ $t('Leere_Wartezimmer_statt_voller_Gänge') }}</span>
            <div>
                <img src="/images/for_you/office.svg" class=" w-full h-full max-w-[9.938rem] max-h-[9.938rem] sm:max-w-[14rem] sm:max-h-[14rem] md:max-w-[17.938rem] md:max-h-[17.938rem] lg:max-w-[22.688rem] lg:max-h-[22.688rem] object-cover" alt="">
            </div>
        </div>
    </div>
</template>


<script setup>
let elements = null
let elements2 = null
function animate(){
    elements.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            element.classList.add('left-animate');
            observer.disconnect();
        }
        });
        observer.observe(element);
    });
    
    elements2.forEach((element) => {
        const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            element.classList.add('right-animate');
            observer.disconnect();
        }
        });    
        observer.observe(element);
    });
}
onMounted(() => {
   elements = document.querySelectorAll('.left');
   elements2 = document.querySelectorAll('.right');
   const images = [...document.querySelectorAll('.left img'), ...document.querySelectorAll('.right img')]
//    const scrollPosition = ref(0)

   const interval = setInterval(() => {
        let allowAnimation = true
        images.forEach(img =>{
            if(!img.complete){
                allowAnimation = false
            }
        })
        if(allowAnimation){
            animate()
            clearInterval(interval)
        }
   }, 100);
   




 
});
</script>