<template>
    <div class="relative">

        <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:max-w-[69.375rem] md:mx-auto md:px-4  md:gap-4 lg:gap-8">
            <div class="grid grid-cols-2 container mx-auto px-4 md:px-0 gap-4 lg:gap-8" > 
                <div class="image-element cursor-pointer flex flex-col items-center justify-between relative
                        " ref="firstElement"
                    @mouseover="mouseOver($event,'first_img_info') "  @mouseout="mouseOut">
                    <img class="w-full h-36 xs:h-48 xs:w-48 rounded-lg object-cover 
                                sm:w-56 sm:h-56 md:h-48 md:w-48 lg:w-56 lg:h-56" src="/images/Team/Klara.jpg" alt="Klara">
                    <span class="font-semibold pt-1">Klara</span>
                    <!-- linkden icon -->
                    <svg class="w-6 h-6 absolute top-[55%] right-6 xs:top-[60%] xs:w-8 xs:h-8 fade-in" 
                         :class="{'hidden':infoBar !== 'first_img_info'}"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                    </svg>
                </div>
                <div class="image-element cursor-pointer flex flex-col items-center justify-between relative"
                    @mouseover="mouseOver($event,'second_img_info')"  @mouseout="mouseOut">
                    <img class="w-full h-36 xs:h-48 xs:w-48 rounded-lg object-cover
                                sm:w-56 sm:h-56 md:h-48 md:w-48 lg:w-56 lg:h-56" src="/images/Team/Benni.jpg" alt="Klara">
                    <span class="font-semibold pt-1">Benni</span>
                    <!-- linkden icon -->
                    <svg class="w-6 h-6 absolute top-[55%] right-6 xs:top-[60%] xs:w-8 xs:h-8 fade-in" 
                         :class="{'hidden':infoBar !== 'second_img_info'}"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                    </svg>
                </div>
            </div>
            
            <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in bg-primary h-96 p-4 col-span-full md:hidden">
                <h1 class="text-5xl text-white"> Klara</h1>
            </div>
            <div v-if="infoBar === 'second_img_info'" class="info_bar fade-in bg-primary h-96 p-4 col-span-full md:hidden">
                <h1 class="text-5xl text-white"> Benni</h1>
            </div>

            <div class="grid grid-cols-2 container mx-auto px-4 md:px-0  gap-4 lg:gap-8"  > 
                <div class="image-element cursor-pointer flex flex-col items-center justify-between relative"
                    @mouseover="mouseOver($event,'third_img_info') "  @mouseout="mouseOut">
                    <img class="w-full h-36 xs:h-48 xs:w-48 rounded-lg object-cover
                                sm:w-56 sm:h-56 md:h-48 md:w-48 lg:w-56 lg:h-56" src="/images/Team/Michael.jpg" alt="Klara">
                    <span class="font-semibold pt-1">Michael</span>
                    <!-- linkden icon -->
                    <svg class="w-6 h-6 absolute top-[55%] right-6 xs:top-[60%] xs:w-8 xs:h-8 fade-in" 
                         :class="{'hidden':infoBar !== 'third_img_info'}"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                    </svg>

                </div>
                <div class="image-element cursor-pointer flex flex-col items-center justify-between relative"
                    @mouseover="mouseOver($event,'fourth_img_info')"  @mouseout="mouseOut">
                    <img class="w-full h-36 xs:h-48 xs:w-48 rounded-lg object-cover
                                sm:w-56 sm:h-56 md:h-48 md:w-48 lg:w-56 lg:h-56" src="/images/Team/Richard.jpg" alt="Klara">
                    <span class="font-semibold pt-1">Richard</span>
                    <!-- linkden icon -->
                    <svg class="w-6 h-6 absolute top-[55%] right-6 xs:top-[60%] xs:w-8 xs:h-8 fade-in" 
                         :class="{'hidden':infoBar !== 'fourth_img_info'}"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in bg-primary h-96 p-4 col-span-full md:hidden">
                <h1 class="text-5xl text-white"> Michael</h1>
            </div>
            <div v-if="infoBar === 'fourth_img_info'" class="info_bar fade-in bg-primary h-96 p-4 col-span-full md:hidden">
                <h1 class="text-5xl text-white"> Richard</h1>
            </div>
        </div>
        <div class="absolute left-0 top-0 cursor" ref="cursor"> 
            <svg class="w-24 h-16" viewBox="0 0 143 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.0176 1.55486C69.2579 -0.467573 73.3671 -0.467569 76.6074 1.55486L137.829 39.7668C146.354 45.0882 142.584 58.25 132.534 58.25H10.0913C0.0412445 58.25 -3.72919 45.0882 4.79644 39.7668L66.0176 1.55486Z" fill="#1A2933"/>
            </svg>
        </div>

        <div class="hidden bg-primary w-full md:block mt-14" >
            <div v-if="infoBar === 'first_img_info'" class="info_bar hidden fade-in w-full  h-96 p-20 container mx-auto md:block">
                <h1 class="text-5xl text-white"> Klara</h1>
            </div>
            <div v-if="infoBar === 'second_img_info'" class="info_bar hidden fade-in w-full  h-96 p-20 container mx-auto md:block">
                <h1 class="text-5xl text-white"> Benni</h1>
            </div>
            <div v-if="infoBar === 'third_img_info'" class="info_bar hidden fade-in w-full  h-96 p-20 container mx-auto md:block">
                <h1 class="text-5xl text-white"> Michael</h1>
            </div>
            <div v-if="infoBar === 'fourth_img_info'" class="info_bar hidden fade-in w-full  h-96 p-20 container mx-auto md:block">
                <h1 class="text-5xl text-white"> Richard</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
const infoBar = ref('first_img_info')
const cursor = ref(null)
const firstElement = ref(null)
const referenceElement= ref(null)
function mouseOver(event, info_bar) {
    
    infoBar.value = info_bar
    setTimeout(() => {
        setCursorPosition(event.target)
    }, 200);
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
    let top = rect.bottom + window.scrollY - 96
    cursor.value.style.top = `${top}px`
}


onMounted(()=>{
    setCursorPosition(firstElement.value)
    window.addEventListener('resize', ()=>{
        setCursorPosition(referenceElement.value)
    })
})

onUnmounted(() => {
    window.removeEventListener('resize', ()=>{
        setCursorPosition(referenceElement.value)
    })
})

</script>

<style scoped>
    .cursor{
        transition-property: left ;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }
</style>