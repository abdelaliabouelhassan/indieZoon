<template>
    <section class="relative pt-20 pb-10 mt-20" ref="wrapper">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold sm:text-5xl text-center">Werde Teil von IndieZone</h2>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[69.375rem] sm:mx-auto sm:px-4  sm:gap-4 lg:gap-8 mt-20">
            <!-- first row of images -->
            <div class="grid grid-cols-2 justify-items-center container mx-auto px-4 sm:px-0 gap-4 lg:gap-8"> 
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square xs:p-2 max-w-[15rem]" ref="firstElement"
                    @mouseover="mouseOver($event,'first_img_info')">
                    <img :class="{'hidden':infoBar === 'first_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain " src="/images/about_us/fourth_section/building.png" alt="building">
                    <!-- element active image -->
                    <img :class="{'hidden':infoBar !== 'first_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain" src="/images/about_us/fourth_section/building_active.png" alt="building_active">
                </div>
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square xs:p-2 max-w-[15rem]" 
                    @mouseover="mouseOver($event,'second_img_info')">
                    <img :class="{'hidden':infoBar === 'second_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain " src="/images/about_us/fourth_section/avatar_shop.png" alt="avatar_shop">
                    <!-- element active image -->
                    <img :class="{'hidden':infoBar !== 'second_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain" src="/images/about_us/fourth_section/avatar_shop_active.png" alt="avatar_shop_active">
                </div>
            </div>
            <!-- first row of elements info banner -->
            <div class="bg-primary mt-10 col-span-full sm:hidden">
                <!-- element info -->
                <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full  
                        text-white flex flex-col justify-between gap-y-8">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-md xl:max-w-sm">Interesse an einer Zusammenarbeit?</h1>
                        <h3 class="text-xl ">Du willst deine Innenstadt retten oder deine Mitglieder:innen unterstützen?</h3>
                    </div>
                    <div class="font-semibold mt-3">Du erkennst das Potential für deine Stadt / deine Mitglieder:innen und möchtest ein maßgeschneidertes Konzept um deine Händler:innen, Veranstalter:innen und Co an den Start zu bringen?
                        <br><br>
                        Dann tritt mit uns in Kontakt.
                    </div>
                    <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-110 hover:scale-x-110 self-center">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
                </div>
                <!-- element info -->
                <div v-if="infoBar === 'second_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full 
                        text-white flex flex-col justify-between gap-y-8">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl ">Händler:innen</h1>
                        <h3 class="text-xl ">Du willst Teil der IndieZone werden?</h3>
                    </div>
                    <div class="font-semibold mt-3">Du hast ein lokales Ladengeschäft, oder kennst jemanden, der eins hat und umbedingt dabei sein muss?
                        <br><br>
                        Dann melde dich jetzt an!
                    </div>
                    <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                        <div class="text-primary"> Jetzt Voranmelden</div> 
                    </UIBaseButton>
                </div>
                
                
            </div>
            <!-- second row of images -->
             <div class="grid grid-cols-2 justify-items-center container mx-auto px-4 sm:px-0 gap-4 lg:gap-8"> 
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square xs:p-2 max-w-[15rem]" 
                    @mouseover="mouseOver($event,'third_img_info')">
                    <img :class="{'hidden':infoBar === 'third_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain " src="/images/about_us/fourth_section/avatar.png" alt="avatar">
                    <!-- element active image -->
                    <img  :class="{'hidden':infoBar !== 'third_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain" src="/images/about_us/fourth_section/avatar_active.png" alt="avatar_active">
                </div>
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square xs:p-2 max-w-[15rem]" 
                    @mouseover="mouseOver($event,'fourth_img_info')">
                    <img  :class="{'hidden':infoBar === 'fourth_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain " src="/images/about_us/fourth_section/handshake.png" alt="handshake">
                    <!-- element active image -->
                    <img :class="{'hidden':infoBar !== 'fourth_img_info'}" class="w-full h-full p-2 rounded-lg border object-contain" src="/images/about_us/fourth_section/handshake_active.png" alt="handshake_active">
                </div>
            </div>

            <!-- second row of elements banner -->
            <div class="bg-primary mt-5 col-span-full sm:hidden">
                <!-- elements info -->
                <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full  
                        text-white flex flex-col justify-between gap-y-8">
                        <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl ">Teammitglieder*innen</h1>
                        <h3 class="text-xl ">Du hast Lust bei einem jungen Projekt für mehr Nachhaltigkeit dabei zu sein?</h3>
                    </div>
                    <div class="flex flex-col gap-y-4">
                        <div class="font-semibold mt-3">Du bist:</div>
                        
                        <ul class="list-disc font-light text-sm pl-8 border-l-2 border-endie-green">
                            <li>Programmierer:in</li>
                            <li>Content Creator:in</li>
                            <li>Sales Manager:in</li>
                            <li>UI/UX Designer:in</li>
                            <li>charismatisch, kontaktfreudig und hast Lust mit uns zu vertiefen, was die Händler:innen, Städte und Nutzer:innen wirklich brauchen?</li>
                            
                        </ul>

                        <div class="font-semibold mt-3">Dann lern uns jetzt kennen!</div>
                    </div>
                        
                    <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
                </div>
                <!-- elements info -->
                <div v-if="infoBar === 'fourth_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full 
                        text-white flex flex-col justify-between gap-y-8">
                    <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl ">Partner:innen und Investor:innen</h1>
                        <h3 class="text-xl ">Du willst Teil des IndieZone Markplatzes werden?</h3>
                    </div>
                    <div class="font-semibold mt-3">Du bist von unserer Idee begeistert und willst uns unterstützen?
                        <br><br>
                        Dann nimm mit uns Kontakt auf.
                    </div>
                    <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
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
        <div class="hidden bg-primary w-full sm:block mt-10" >
            <!-- element info -->
            <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in px-4 py-10 w-full container mx-auto sm:flex
                    text-white  flex-col justify-between gap-y-8">
                <div class="text-endie-green">
                    <h1 class="text-4xl font-bold sm:text-5xl ">Interesse an einer Zusammenarbeit?</h1>
                    <h3 class="text-xl ">Du willst deine Innenstadt retten oder deine Mitglieder:innen unterstützen?</h3>
                </div>
                <div class="font-semibold mt-3">Du erkennst das Potential für deine Stadt / deine Mitglieder:innen und möchtest ein maßgeschneidertes Konzept um deine Händler:innen, Veranstalter:innen und Co an den Start zu bringen?
                    <br><br>
                    Dann tritt mit uns in Kontakt.
                </div>
                <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                    <div class="text-primary">Jetzt kontaktieren</div> 
                </UIBaseButton>
            </div>
            <div v-if="infoBar === 'second_img_info'" class="info_bar fade-in px-4 py-10 w-full container mx-auto sm:flex
                    text-white  flex-col justify-between gap-y-8">
                <div class="text-endie-green">
                    <h1 class="text-4xl font-bold sm:text-5xl ">Händler:innen</h1>
                    <h3 class="text-xl ">Du willst Teil der IndieZone werden?</h3>
                </div>
                <div class="font-semibold mt-3">Du hast ein lokales Ladengeschäft, oder kennst jemanden, der eins hat und umbedingt dabei sein muss?
                    <br><br>
                    Dann melde dich jetzt an!
                </div>
                <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                    <div class="text-primary"> Jetzt Voranmelden</div> 
                </UIBaseButton>
            </div>
            <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in px-4 py-10 w-full container mx-auto sm:flex
                    text-white  flex-col justify-between gap-y-8">
                <div class="text-endie-green">
                    <h1 class="text-4xl font-bold sm:text-5xl ">Teammitglieder*innen</h1>
                    <h3 class="text-xl ">Du hast Lust bei einem jungen Projekt für mehr Nachhaltigkeit dabei zu sein?</h3>
                </div>
                <div class="flex flex-col gap-y-4">
                    <div class="font-semibold mt-3">Du bist:</div>

                    <ul class="list-disc font-light text-sm pl-8 border-l-2 border-endie-green">
                        <li>Programmierer:in</li>
                        <li>Content Creator:in</li>
                        <li>Sales Manager:in</li>
                        <li>UI/UX Designer:in</li>
                        <li>charismatisch, kontaktfreudig und hast Lust mit uns zu vertiefen, was die Händler:innen, Städte und Nutzer:innen wirklich brauchen?</li>
                        
                    </ul>

                    <div class="font-semibold mt-3">Dann lern uns jetzt kennen!</div>
                </div>
                    
                <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                    <div class="text-primary">Jetzt kontaktieren</div> 
                </UIBaseButton>
            </div>
    
            
            <div v-if="infoBar === 'fourth_img_info'" class="info_bar fade-in px-4 py-10 w-full container mx-auto sm:flex
                    text-white  flex-col justify-between gap-y-8">
                 <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl ">Partner:innen und Investor:innen</h1>
                        <h3 class="text-xl ">Du willst Teil des IndieZone Markplatzes werden?</h3>
                    </div>
                    <div class="font-semibold mt-3">Du bist von unserer Idee begeistert und willst uns unterstützen?
                        <br><br>
                        Dann nimm mit uns Kontakt auf.
                    </div>
                    <UIBaseButton class="px-10 py-3 bg-white mt-8 hover:scale-y-125 hover:scale-x-110 self-center">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
            </div>

        </div>
    </section>
</template>

<script setup>

const infoBar = ref('first_img_info')
const cursor = ref(null)
const firstElement = ref(null)
const referenceElement= ref(null)
const cursorTopPadding= ref(30) //md:70
const wrapper= ref(null)

function mouseOver(event, info_bar) {
    
    infoBar.value = info_bar
    setTimeout(() => {
        setCursorPosition(event.target)
    }, 100);
}

function setCursorPosition(target){
    //tagret is the element that triggered the mouseOver event
    /*referenceElement is the wrapper element of the image 
      it's used to calculate the position of the cursor*/
    /* if the target is not the image wrapper , 
       set the referenceElement to the image wrapper*/
    if(!target.classList.contains('image-element')){
        referenceElement.value = target.closest('.image-element')
    }else{
        referenceElement.value = target

    }

    //get the element coordinates
    let rect = referenceElement.value.getBoundingClientRect()
    //set the cursor left position
    let left = rect.left + (rect.width / 2) -  (cursor.value.offsetWidth / 2)
    cursor.value.style.left = `${left}px`
    // set the cursor top position
    let top = rect.bottom + window.scrollY - wrapper.value.offsetTop - cursorTopPadding.value
    
    cursor.value.style.top = `${top}px`
}

function resizeAdjustment(){
    setCursorPosition(referenceElement.value)
}
onMounted(()=>{
    cursor.value.classList.remove('hidden')
    setCursorPosition(firstElement.value)
    window.addEventListener('resize',resizeAdjustment)
})

onUnmounted(() => {
    window.removeEventListener('resize',resizeAdjustment)
})

</script>

<style scoped>
    .cursor{
        transition-property: left ;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }
</style>