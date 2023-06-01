<template>
    <section class="relative pt-20 pb-10 mt-20" ref="wrapper">
        <!-- section title -->
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold sm:text-5xl text-center">Werde Teil von IndieZone</h2>
        </div>
        
        <!-- section content -->
        <div class= "mt-20 container mx-auto grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:mx-auto sm:px-4 sm:justify-items-between sm:justify-between sm:gap-x-6 md:gap-x-8">
            <!-- first row of images -->
            <div class="grid grid-cols-2 px-4 gap-8 w-fit justify-items-center justify-center sm:px-0 sm:gap-6 md:gap-8"> 
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square max-w-[15rem]" ref="firstElement"
                    @mouseover="mouseOver($event,'first_img_info')">
                    <img  :class="{'hidden':infoBar === 'first_img_info'}" class="w-full h-full p-6 rounded-lg border object-contain " src="/images/about_us/fifth_section/building.svg" alt="building">
                    <!-- element active image -->
                    <img ref="building_img" :class="{'hidden':infoBar !== 'first_img_info'}" class="w-full h-full rounded-lg border object-contain" src="/images/about_us/fifth_section/building_active.svg" alt="building_active">
                </div>
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square max-w-[15rem]" 
                    @mouseover="mouseOver($event,'second_img_info')">
                    <img :class="{'hidden':infoBar === 'second_img_info'}" class="w-full h-full p-6 rounded-lg border object-contain " src="/images/about_us/fifth_section/avatar_shop.svg" alt="avatar_shop">
                    <!-- element active image -->
                    <img :class="{'hidden':infoBar !== 'second_img_info'}" class="w-full h-full rounded-lg border object-contain" src="/images/about_us/fifth_section/avatar_shop_active.svg" alt="avatar_shop_active">
                </div>
            </div>
            <!-- first row of elements info banner -->
            <div class="bg-primary mt-10 col-span-full sm:hidden">
                <!-- element info -->
                <div v-if="infoBar === 'first_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full  
                        text-white flex flex-col justify-between gap-y-8 ">
                    <div class="text-endie-green ">
                        <h1 class="text-[2.1rem] xs:text-4xl  font-bold sm:text-5xl  xl:max-w-sm xs:max-w-none" >Interesse an einer Zusammenarbeit?</h1>
                        <h3 class="text-xl ">Du willst deine Innenstadt retten oder deine Mitglieder:innen unterstützen?</h3>
                    </div>
                    <div class="font-semibold mt-3">Du erkennst das Potential für deine Stadt / deine Mitglieder:innen und möchtest ein maßgeschneidertes Konzept um deine Händler:innen, Veranstalter:innen und Co an den Start zu bringen?
                        <br><br>
                        Dann tritt mit uns in Kontakt.
                    </div>
                    <nuxt-link to="/contact" class="mt-8 self-center">
                        <UIBaseButton class="px-10 py-3 bg-white  hover:scale-y-110 hover:scale-x-110 ">
                            <div class="text-primary">Jetzt kontaktieren</div> 
                        </UIBaseButton>
                    </nuxt-link>
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
                    <nuxt-link to="/pre-register" class="mt-8 self-center">
                        <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110 ">
                            <div class="text-primary"> Jetzt Voranmelden</div> 
                        </UIBaseButton>
                    </nuxt-link>
                </div>
                
                
            </div>
            <!-- second row of images -->
             <div class="mt-4 grid grid-cols-2 px-4 gap-8 w-fit justify-items-center justify-center sm:px-0 sm:mt-0 sm:gap-6 md:gap-8"> 
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square max-w-[15rem]" 
                    @mouseover="mouseOver($event,'third_img_info')">
                    <img :class="{'hidden':infoBar === 'third_img_info'}" class="w-full h-full p-6 rounded-lg border object-contain " src="/images/about_us/fifth_section/avatar.svg" alt="avatar">
                    <!-- element active image -->
                    <img  :class="{'hidden':infoBar !== 'third_img_info'}" class="w-full h-full rounded-lg border object-contain" src="/images/about_us/fifth_section/avatar_active.svg" alt="avatar_active">
                </div>
                <!-- element -->
                <div class="image-element cursor-pointer flex flex-col items-center justify-between aspect-square max-w-[15rem]" 
                    @mouseover="mouseOver($event,'fourth_img_info')">
                    <img  :class="{'hidden':infoBar === 'fourth_img_info'}" class="w-full h-full p-6 rounded-lg border object-contain " src="/images/about_us/fifth_section/handshake.svg" alt="handshake">
                    <!-- element active image -->
                    <img :class="{'hidden':infoBar !== 'fourth_img_info'}" class="w-full h-full rounded-lg border object-contain" src="/images/about_us/fifth_section/handshake_active.svg" alt="handshake_active">
                </div>
            </div>

            <!-- second row of elements banner -->
            <div class="bg-primary mt-10 col-span-full sm:hidden">
                <!-- elements info -->
                <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in bg-primary  px-4 py-10 w-full  
                        text-white flex flex-col justify-between gap-y-8">
                        <div class="text-endie-green">
                        <h1 class="text-4xl font-bold sm:text-5xl max-w-[19.5rem] break-all xs:max-w-none xs:break-normal">Teammitglieder:innen</h1>
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
                    <nuxt-link to="/contact" class="mt-8 self-center">
                        <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Jetzt kontaktieren</div> 
                        </UIBaseButton>
                    </nuxt-link>
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
                    <nuxt-link to="/contact" class="mt-8 self-center">
                        <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                            <div class="text-primary">Jetzt kontaktieren</div> 
                        </UIBaseButton>
                    </nuxt-link>
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
                <nuxt-link to="/contact" class="mt-8 self-center">
                    <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
                </nuxt-link>
            </div>
            
            <!-- element info -->
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
                <nuxt-link to="/pre-register" class="mt-8 self-center">
                    <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                        <div class="text-primary"> Jetzt Voranmelden</div> 
                    </UIBaseButton>
                </nuxt-link>
            </div>
            
            <!-- element info -->
            <div v-if="infoBar === 'third_img_info'" class="info_bar fade-in px-4 py-10 w-full container mx-auto sm:flex
                    text-white  flex-col justify-between gap-y-8">
                <div class="text-endie-green">
                    <h1 class="text-4xl font-bold sm:text-5xl ">Teammitglieder:innen</h1>
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
                    
                <nuxt-link to="/contact" class="mt-8 self-center">
                    <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                        <div class="text-primary">Jetzt kontaktieren</div> 
                    </UIBaseButton>
                </nuxt-link>
            </div>

            <!-- element info -->
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
                <nuxt-link to="/contact" class="mt-8 self-center">
                <UIBaseButton class="px-10 py-3 bg-white hover:scale-y-125 hover:scale-x-110">
                    <div class="text-primary">Jetzt kontaktieren</div> 
                </UIBaseButton>
                </nuxt-link>
            </div>

        </div>
        
    </section>
</template>

<script setup>

const infoBar = ref('first_img_info')
const cursor = ref(null)
const firstElement = ref(null)
const referenceElement= ref(null)
const cursorTopPadding= ref(32) 
const wrapper= ref(null)
const building_img= ref(null)
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

function resizeCursorAdjustment(){
    setCursorPosition(referenceElement.value)
}
onMounted(()=>{

    if(building_img.value.complete){
         cursor.value.classList.remove('hidden')
            setCursorPosition(firstElement.value)
            window.addEventListener('resize', resizeCursorAdjustment)
            console.log('richard image was loaded')
    }else{
        building_img.value.addEventListener('load',()=>{
            cursor.value.classList.remove('hidden')
            setCursorPosition(firstElement.value)
            window.addEventListener('resize', resizeCursorAdjustment)
            console.log('richard image was loaded')
        })
    }
})

onUnmounted(() => {
    window.removeEventListener('resize',resizeCursorAdjustment)
})

</script>

<style scoped>
    .cursor{
        transition-property: left ;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }
</style>