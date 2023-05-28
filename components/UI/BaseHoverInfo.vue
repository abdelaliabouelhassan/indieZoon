<template>
    <div class="relative">
        <div class="w-full">
            <div class="w-full flex gap-x-10 container mx-auto"  > 
                <div class="w-36 h-36 cursor-pointer flex flex-col items-center" ref="firstElement"
                    @mouseover="mouseOver($event,'first_img_info') "  @mouseout="mouseOut">
                    <img class="h-[80%] object-contain" src="/images/Team/Klara.jpg" alt="Klara">
                    <span>Klara</span>
                </div>
                <div class="w-36 h-36 cursor-pointer flex flex-col items-center"
                    @mouseover="mouseOver($event,'second_img_info')"  @mouseout="mouseOut">
                    <img class="h-[80%] object-contain" src="/images/Team/Benni.jpg" alt="Klara">
                    <span>Benni</span>
                </div>
            </div>
            
            <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in bg-primary h-96 w-full mt-10 p-20">
                <h1 class="text-5xl text-white"> Klara</h1>
            </div>
            <div v-if="infoBar === 'second_img_info'" class="info_bar fade-in bg-primary h-96 w-full mt-10 p-20">
                <h1 class="text-5xl text-white"> Benni</h1>
            </div>

            <div class="w-full flex gap-x-10 container mx-auto"  > 
                <div class="w-36 h-36 cursor-pointer flex flex-col items-center"
                    @mouseover="mouseOver($event,'third_img_info') "  @mouseout="mouseOut">
                    <img class="h-[80%] object-contain" src="/images/Team/Michael.jpg" alt="Klara">
                    <span>Michael</span>
                </div>
                <div class="w-36 h-36 cursor-pointer flex flex-col items-center"
                    @mouseover="mouseOver($event,'fourth_img_info')"  @mouseout="mouseOut">
                    <img class="h-[80%] object-contain" src="/images/Team/Richard.jpg" alt="Klara">
                    <span>Richard</span>
                </div>
            </div>
            <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in bg-primary h-96 w-full mt-10 p-20">
                <h1 class="text-5xl text-white"> Michael</h1>
            </div>
            <div v-if="infoBar === 'fourth_img_info'" class="info_bar fade-in bg-primary h-96 w-full mt-10 p-20">
                <h1 class="text-5xl text-white"> Richard</h1>
            </div>
        </div>
        <div class="cursor absolute left-0 top-36" ref="cursor"> 
            <svg class="w-20 h-10" viewBox="0 0 143 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.0176 1.55486C69.2579 -0.467573 73.3671 -0.467569 76.6074 1.55486L137.829 39.7668C146.354 45.0882 142.584 58.25 132.534 58.25H10.0913C0.0412445 58.25 -3.72919 45.0882 4.79644 39.7668L66.0176 1.55486Z" fill="#1A2933"/>
            </svg>
        </div>
    </div>
</template>

<script setup>
const infoBar = ref('first_img_info')
const cursor = ref(null)
const firstElement = ref(null)
function mouseOver(event, info_bar) {
    
    infoBar.value = info_bar
    setTimeout(() => {
        setCursorPosition(event.target)
    }, 200);
}

function setCursorPosition(target){
    let referenceElement = target
    if(target.tagName !== 'DIV'){
        referenceElement = target.parentElement
    }
    console.log(referenceElement)
    let rect = referenceElement.getBoundingClientRect()
    let left = rect.left + (rect.width / 2) -  (cursor.value.offsetWidth / 2)
    cursor.value.style.left = `${left}px`

    let top = rect.y 
    
    cursor.value.style.top = `${top}px`
}


onMounted(()=>{
    setCursorPosition(firstElement.value)
})
</script>

<style scoped>
    .cursor{
        transition-property: left;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }
</style>