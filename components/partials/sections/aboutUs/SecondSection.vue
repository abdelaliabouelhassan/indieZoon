<template>
    <section class="relative pt-20 pb-10" ref="wrapper">
        <!--  -->
        <div class="container mx-auto grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:mx-auto sm:px-4 sm:justify-items-between sm:justify-between sm:gap-x-6 md:gap-x-8 ">
            <!-- first row of images -->
            <div class="grid grid-cols-2 px-4 gap-8 w-fit justify-items-center justify-center sm:px-0 sm:gap-6 md:gap-8"> 
                <!-- team member element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between md:max-w-[16rem]" ref="firstElement"
                    @mouseover="mouseOver($event,'first_img_info')">
                    <!-- team member image -->
                    <div class="img-container aspect-square rounded-lg overflow-hidden relative group">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-all duration-150 ease-linear" src="/images/about_us/team/Richard.jpg" alt="Richard">
                        <!-- linkden icon -->
                        <svg class="w-6 h-6 absolute bottom-5 right-5 fade-in" 
                            :class="{'hidden':infoBar !== 'first_img_info'}"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                        </svg>
                    </div>
                    
                    <!-- team member name -->
                    <span class="font-semibold text-xl pt-1 transition-opacity duration-300 ease-in-out" 
                          :class="{'opacity-0':infoBar === 'first_img_info'}">
                          Richard
                    </span>
                </div>
                <!-- team member element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between md:max-w-[16rem]"
                    @mouseover="mouseOver($event,'second_img_info')">
                    <!-- team member image -->
                    <div class="img-container aspect-square rounded-lg overflow-hidden relative group">
                        <img class="w-full h-full  object-cover group-hover:scale-110 transition-all duration-150 ease-linear" src="/images/about_us/team/Klara.jpg" alt="Klara">
                        <!-- linkden icon -->
                        <svg class="w-6 h-6 absolute bottom-5 right-5 fade-in" 
                            :class="{'hidden':infoBar !== 'second_img_info'}"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                        </svg>
                    </div>
                    <!-- team member name -->
                    <span class="font-semibold text-xl pt-1 transition-opacity duration-300 ease-in-out"
                          :class="{'opacity-0':infoBar === 'second_img_info'}">
                          Klara
                    </span>
                   
                </div>
            </div>
            <!-- first row of team info banner -->
            <div class="bg-primary mt-4 col-span-full w-full sm:hidden ">
                <!-- team member info -->
                <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in bg-primary  px-4 pt-8 pb-10 w-full h-96
                        text-white flex flex-col justify-between">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Richard</h1>
                        <h3 class="text-xl ">Co-Founder, Produkt und Business Administration</h3>
                    </div>
                   <div class=" pl-4 pr-10 border-l-4 border-endie-green max-w-sm">
                        <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                        <div class="font-semibold mt-3">Definitiv Werkzeug, Schrauben und Bauteile... da lernt man bei der Beratung vor Ort immer einiges dazu.</div>
                   </div>
                    <div class="font-light text-sm max-w-sm">Fun Fact: Mir ist nicht egal was du fährst: zeig mir gerne dein Fahrrad.</div>
                </div>
                <!-- team member info -->
                <div v-if="infoBar === 'second_img_info'" class="info_bar fade-in bg-primary  px-4 pt-8 pb-10 w-full h-96
                        text-white flex flex-col justify-between">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Klara</h1>
                        <h3 class="text-xl ">Co-Founder, Produkt und Design</h3>
                    </div>
                   <div class=" pl-4 pr-10 border-l-4 border-endie-green max-w-sm">
                        <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                        <div class="font-semibold mt-3">Alles was man zum Nähen braucht. Ich will die Stoffe gerne anfassen können, bevor ich mir etwas daraus nähe.</div>
                   </div>
                    <div class="font-light text-sm max-w-sm">Fun Fact: Wenn ich einen Garten hätte, würde ich sofort ein Hausschwein bei mir einziehen lassen.</div>
                </div>
                
            </div>
            <!-- second row of images -->
            <div class="mt-4 grid grid-cols-2 px-4 gap-8 w-fit justify-items-center justify-center sm:px-0 sm:mt-0 sm:gap-6 md:gap-8"> 
                <!-- team member  -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between md:max-w-[16rem]"
                    @mouseover="mouseOver($event,'third_img_info') ">
                     <!-- team member image -->
                    <div class="img-container aspect-square rounded-lg overflow-hidden relative group">
                        <img class="w-full h-full  object-cover group-hover:scale-110 transition-all duration-150 ease-linear" src="/images/about_us/team/Benni.jpg" alt="Benni">
                        <!-- linkden icon -->
                        <svg class="w-6 h-6 absolute bottom-5 right-5 fade-in" 
                            :class="{'hidden':infoBar !== 'third_img_info'}"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                        </svg>
                    </div>
                    <span class="font-semibold text-xl pt-1 transition-opacity duration-300 ease-in-out"
                           :class="{'opacity-0':infoBar === 'third_img_info'}">
                           Benni
                    </span>
                </div>
                <!-- team member  -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between md:max-w-[16rem]"
                    @mouseover="mouseOver($event,'fourth_img_info')">
                    <!-- team member image -->
                    <div class="img-container aspect-square rounded-lg overflow-hidden relative group ">
                        <img class="w-full h-full  object-cover group-hover:scale-110 transition-all duration-150 ease-linear" src="/images/about_us/team/Michael.jpg" alt="Michael">
                        <!-- linkden icon -->
                        <svg class="w-6 h-6 absolute bottom-5 right-5 fade-in" 
                            :class="{'hidden':infoBar !== 'fourth_img_info'}"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                        </svg>
                    </div>
                    <!-- team member name -->
                    <span class="font-semibold text-xl pt-1 transition-opacity duration-300 ease-in-out"
                        :class="{'opacity-0':infoBar === 'fourth_img_info'}">
                        Michael
                    </span>
                    
                </div>
            </div>

            <!-- second row of team info banner -->
            <div class="bg-primary mt-4 col-span-full w-full sm:hidden">
                <!-- team member info -->
                <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in bg-primary  px-4 pt-8 pb-10 w-full h-96
                        text-white flex flex-col justify-between">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Benni</h1>
                        <h3 class="text-xl ">Web-Development</h3>
                    </div>
                   <div class=" pl-4 pr-10 border-l-4 border-endie-green max-w-sm">
                        <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                        <div class="font-semibold mt-3">Bauteile für meinen lang gehegten Traum: meinen eigenen 8-Bit-Steckbrett-Computer.</div>
                   </div>
                    <div class="font-light text-sm max-w-sm">Fun Fact: Ob Computer oder Jazzpiano ist mir eigentlich egal, ich hau gerne richtig in die Tasten.</div>
                </div>
                <!-- team member info -->
                <div v-if="infoBar === 'fourth_img_info'" class="info_bar fade-in bg-primary  px-4 pt-8 pb-10 w-full h-96
                        text-white flex flex-col justify-between">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Michael</h1>
                        <h3 class="text-xl ">Marketing</h3>
                    </div>
                   <div class=" pl-4 pr-10 border-l-4 border-endie-green max-w-sm">
                        <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                        <div class="font-semibold mt-3">Lebensmittel und Spezialitäten, Kleidung und Geschenke. Einfach regionale Besonderheiten.</div>
                   </div>
                    <div class="font-light text-sm max-w-sm">Fun Fact: Ist nicht die Generation Fun Fact. - “Was ist das?”</div>
                </div>
                
            </div>

        </div>

        <!-- cursor -->
        <div class="absolute left-0 top-0 cursor hidden" ref="cursor"> 
            <svg class="w-32 h-32" viewBox="0 0 143 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.0176 1.55486C69.2579 -0.467573 73.3671 -0.467569 76.6074 1.55486L137.829 39.7668C146.354 45.0882 142.584 58.25 132.534 58.25H10.0913C0.0412445 58.25 -3.72919 45.0882 4.79644 39.7668L66.0176 1.55486Z" fill="#1A2933"/>
            </svg>
        </div>

        <!-- team member infos larg screen -->
        <div class="hidden bg-primary w-full sm:block mt-5" >
            <div v-if="infoBar === 'first_img_info'" class="info_bar hidden fade-in w-full h-[28rem] py-10 px-4 container mx-auto sm:block md:h-96">
                <div class="grid grid-cols-12 grid-rows-6 gap-x-4 h-full">
                    <!-- text content -->
                    <div class="text-white flex flex-col gap-y-8 justify-between col-span-7 md:col-span-8  row-span-full ">
                        <div class="text-endie-green">
                            <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Richard</h1>
                            <h3 class="text-xl ">Co-Founder, Produkt und Business Administration</h3>
                        </div>
                        <div class="pl-4 pr-10 border-l-4 border-endie-green ">
                            <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                            <div class="font-semibold mt-3">Definitiv Werkzeug, Schrauben und Bauteile... da lernt man bei der Beratung vor Ort immernoch einiges dazu.</div>
                        </div>
                        <div class="font-light text-sm ">Fun Fact: Mir ist nicht egal was du fährst: zeig mir gerne dein Fahrrad.</div>
                    </div>
                    <!-- image -->
                    <div class="row-span-full col-span-5 md:col-span-4 lg:col-start-10 lg:col-span-3">
                        <img class="h-full w-full object-cover rounded-md" src="/images/about_us/team/Richard.jpg" alt="Richard">
                    </div>
                </div>
            </div>
            <div v-if="infoBar === 'second_img_info'" class="info_bar hidden fade-in w-full h-[28rem] py-10 px-4 container mx-auto sm:block md:h-96">
                <div class="grid grid-cols-12 grid-rows-6 gap-x-4 h-full">
                    <!-- text content -->
                    <div class="text-white flex flex-col gap-y-8 justify-between col-span-7 md:col-span-8  row-span-full ">
                        <div class="text-endie-green">
                            <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Klara</h1>
                            <h3 class="text-xl ">Co-Founder, Produkt und Design</h3>
                        </div>
                        <div class="pl-4 pr-10 border-l-4 border-endie-green ">
                            <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                            <div class="font-semibold mt-3">Co-Founder, Produkt und Design</div>
                        </div>
                        <div class="font-light text-sm ">Fun Fact: Wenn ich einen Garten hätte, würde ich sofort ein Hausschwein bei mir einziehen lassen.</div>
                    </div>
                    <!-- image -->
                    <div class="row-span-full col-span-5 md:col-span-4 lg:col-start-10 lg:col-span-3">
                        <img class="h-full w-full object-cover rounded-md" src="/images/about_us/team/Klara.jpg" alt="Klara">
                    </div>
                </div>
            </div>
            <div v-if="infoBar === 'third_img_info'" class="info_bar hidden fade-in w-full h-[28rem] py-10 px-4 container mx-auto sm:block md:h-96">
                <div class="grid grid-cols-12 grid-rows-6 gap-x-4 h-full">
                    <!-- text content -->
                    <div class="text-white flex flex-col gap-y-8 justify-between col-span-7 md:col-span-8  row-span-full ">
                        <div class="text-endie-green">
                            <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Benni</h1>
                            <h3 class="text-xl ">Web-Development</h3>
                        </div>
                        <div class="pl-4 pr-10 border-l-4 border-endie-green ">
                            <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                            <div class="font-semibold mt-3">Bauteile für meinen lang gehegten Traum: meinen eigenen 8-Bit-Steckbrett-Computer.</div>
                        </div>
                        <div class="font-light text-sm ">Fun Fact: Ob Computer oder Jazzpiano ist mir eigentlich egal, ich hau gerne richtig in die Tasten.</div>
                    </div>
                    <!-- image -->
                    <div class="row-span-full col-span-5 md:col-span-4 lg:col-start-10 lg:col-span-3">
                        <img class="h-full w-full object-cover rounded-md" src="/images/about_us/team/Benni.jpg" alt="Benni">
                    </div>
                </div>
            </div>
            <div v-if="infoBar === 'fourth_img_info'" class="info_bar hidden fade-in w-full h-[28rem] py-10 px-4 container mx-auto sm:block md:h-96">
                <div class="grid grid-cols-12 grid-rows-6 gap-x-4 h-full">
                    <!-- text content -->
                    <div class="text-white flex flex-col gap-y-8 justify-between col-span-7 md:col-span-8  row-span-full ">
                        <div class="text-endie-green">
                            <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Michael</h1>
                            <h3 class="text-xl ">Marketing</h3>
                        </div>
                        <div class="pl-4 pr-10 border-l-4 border-endie-green ">
                            <div class="font-light text-sm">Was kaufst du am liebsten lokal?</div>
                            <div class="font-semibold mt-3">Lebensmittel und Spezialitäten, Kleidung und Geschenke. Einfach regionale Besonderheiten.</div>
                        </div>
                        <div class="font-light text-sm ">Fun Fact: Ist nicht die Generation Fun Fact. - “Was ist das?”</div>
                    </div>
                    <!-- image -->
                    <div class="row-span-full col-span-5 md:col-span-4 lg:col-start-10 lg:col-span-3">
                        <img class="h-full w-full object-cover rounded-md" src="/images/about_us/team/Michael.jpg" alt="Benni">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const infoBar = ref('first_img_info')
const cursor = ref(null)
const firstElement = ref(null)
const referenceElement= ref(null)
const cursorTopPadding= ref(53)
const wrapper= ref(null)

async function mouseOver(event, info_bar) {
    
    infoBar.value = info_bar
    setTimeout(() => {
        setCursorPosition(event.target)
    }, 100);

}

function setCursorPosition(target){
    //tagret is the element that triggered the mouseOver event
    /*referenceElement is the wrapper element of the image 
      it's used to calculate the position of the cursor*/

    referenceElement.value = target
    /* if the target is not the image wrapper , 
       set the referenceElement to the image wrapper*/
    if(!target.classList.contains('image-element')){
        referenceElement.value = target.closest('.image-element')
    }
    //get the element coordinates
    let rect = referenceElement.value.getBoundingClientRect()
    //set the cursor left position
    let left = rect.left + (rect.width / 2) -  (cursor.value.offsetWidth / 2)
    cursor.value.style.left = `${left}px`

    //set the cursor top position
    let top = rect.bottom + window.scrollY - wrapper.value.offsetTop - cursorTopPadding.value
    cursor.value.style.top = `${top}px`
}

function resizeAdjustment() {
    setCursorPosition(referenceElement.value)
}
onMounted(()=>{
    cursor.value.classList.remove('hidden')
    setCursorPosition(firstElement.value)
    window.addEventListener('resize', resizeAdjustment)
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeAdjustment)
})

</script>

<style scoped>
    .cursor{
        transition-property: left ;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }
</style>