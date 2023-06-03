<template>
    <div class="w-full md:pt-64 md:mt-10 md:pl-20 lg:container lg:mx-auto md:px-4
                lg:pt-32 lg:max-w-[69.375rem]">
        <!-- contact info top  -->
        <div class="bg-primary overflow-hidden md:hidden">
            <div class="container mx-auto px-4 py-10 flex flex-col gap-y-12 items-end text-endie-green text-end ">
                <h1 class="text-3xl max-w-xs xs:text-[2rem] xs:max-w-sm font-bold md:text-4xl">Wir freuen uns 
                auf deine Nachricht!</h1>
                <div class="flex flex-col gap-y-5">
                    <div class="flex items-center gap-x-4 text-lg font-semibold underline underline-offset-4">
                        <a href="mailto:info@indiezone.de" class="md:order-2">info@indiezone.de</a>
                        <svg class="w-8 h-8 md:order-1" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.33073 17.6693C1.7349 17.6693 1.22483 17.4571 0.800521 17.0328C0.376215 16.6085 0.164062 16.0984 0.164062 15.5026V2.5026C0.164062 1.90677 0.376215 1.3967 0.800521 0.972396C1.22483 0.54809 1.7349 0.335938 2.33073 0.335938H19.6641C20.2599 0.335938 20.77 0.54809 21.1943 0.972396C21.6186 1.3967 21.8307 1.90677 21.8307 2.5026V15.5026C21.8307 16.0984 21.6186 16.6085 21.1943 17.0328C20.77 17.4571 20.2599 17.6693 19.6641 17.6693H2.33073ZM10.9974 10.0859L2.33073 4.66927V15.5026H19.6641V4.66927L10.9974 10.0859ZM10.9974 7.91927L19.6641 2.5026H2.33073L10.9974 7.91927ZM2.33073 4.66927V2.5026V15.5026V4.66927Z" fill="#99D100"/>
                        </svg>
                    </div>
                    <div class="flex items-center gap-x-4 text-lg font-semibold underline underline-offset-4">
                        <a href="https://www.linkedin.com/company/indiezone" class="md:order-2">linkedin/IndieZone</a>
                        <svg class="w-7 h-8 md:order-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805L17.0392 17.0433ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z" fill="#99D100"/>
                        </svg>
                        
                    </div>
                </div>
            </div>
        </div>

        

        <div id="contact_inputs_container" class="bg-primary/5 
               md:rounded-md md:relative md:px-6 lg:px-10">
            <!-- contact info card -->
            <div class="hidden bg-primary overflow-hidden w-fit max-w-[27rem] rounded-xl px-4 pt-0 pb-10 absolute -top-[31.5%]  -left-16 md:block 
                lg:pb-32 lg:-top-[15%] xl:-left-28">
                
                <div class="px-4 py-10 flex flex-col text-endie-green gap-y-12  max-w-[24rem] rounded-xl">
                    <h1 class="font-bold max-w-lg text-5xl ">Wir freuen uns 
                    auf deine Nachricht!</h1>
                    <div class="flex flex-col gap-y-5">
                        <div class="flex items-center gap-x-4 text-xl font-semibold underline underline-offset-4">
                            <a href="mailto:info@indiezone.de" class="md:order-2">info@indiezone.de</a>
                            <svg class="w-8 h-8 md:order-1" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33073 17.6693C1.7349 17.6693 1.22483 17.4571 0.800521 17.0328C0.376215 16.6085 0.164062 16.0984 0.164062 15.5026V2.5026C0.164062 1.90677 0.376215 1.3967 0.800521 0.972396C1.22483 0.54809 1.7349 0.335938 2.33073 0.335938H19.6641C20.2599 0.335938 20.77 0.54809 21.1943 0.972396C21.6186 1.3967 21.8307 1.90677 21.8307 2.5026V15.5026C21.8307 16.0984 21.6186 16.6085 21.1943 17.0328C20.77 17.4571 20.2599 17.6693 19.6641 17.6693H2.33073ZM10.9974 10.0859L2.33073 4.66927V15.5026H19.6641V4.66927L10.9974 10.0859ZM10.9974 7.91927L19.6641 2.5026H2.33073L10.9974 7.91927ZM2.33073 4.66927V2.5026V15.5026V4.66927Z" fill="#99D100"/>
                            </svg>
                        </div>
                        <div class="flex items-center gap-x-4 text-xl font-semibold underline underline-offset-4">
                            <a href="https://www.linkedin.com/company/indiezone" class="md:order-2">linkedin/IndieZone</a>
                            <svg class="w-8 h-8 md:order-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805L17.0392 17.0433ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z" fill="#99D100"/>
                            </svg>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- form -->
            <div class="container mx-auto px-4 py-10 rounded-md overflow-hidden 
                flex flex-col">
                <h3 class="text-lg md:text-end font-medium mb-4">Schreibe uns direkt:</h3>
                <div class="flex flex-col gap-y-4  mb-10 md:w-[42%] md:ml-auto lg:mb-8 lg:w-[60%] xl:w-[40%]">
                    <UIBaseTextInput placeholder="Name" />
                    <UIBaseTextInput placeholder="Email-Adress" />
                </div>
                
                <UIBaseTextArea placeholder="Nachricht" class="mb-8 lg:w-[60%] lg:ml-auto xl:w-[65%]"/>
                <UIBaseButton class="w-fit ml-auto xl:mr-4 hover:scale-y-125 hover:scale-x-110">Senden</UIBaseButton>
            </div>
        </div>
        
        
    </div>
</template>



<script setup>
 useSeoMeta({
    title: 'IndeZone - Contact us',
    description: 'IndeZone - Contact us', // change this to your description
    keywords: 'IndeZone,something,else', // change this to your keywords
    //og tags
    ogTitle: 'IndeZone - Home', // change this to your og:title
    ogDescription: 'IndeZone - Home', // change this to your og:description
    ogImage: 'https://indie-zoon.vercel.app/images/home/hero.png', // change this to your og:image
    ogUrl: 'https://indie-zoon.vercel.app/', // change this to your og:url
    //twitter tags
    twitterTitle: 'IndeZone - Home', // change this to your twitter:title
    twitterDescription: 'IndeZone - Home', // change this to your twitter:description
    twitterImage: 'https://indie-zoon.vercel.app/images/home/hero.png', // change this to your twitter:image
    twitterUrl: 'https://indie-zoon.vercel.app', // change this to your twitter:url
})

</script>


<style scoped>
    #contact_inputs_container{
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.2);
    }
</style>