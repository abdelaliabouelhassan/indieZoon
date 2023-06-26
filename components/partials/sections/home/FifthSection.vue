<template>
    <section class=" my-64 container mx-auto flex justify-center">
        <div class=" px-4 flex flex-col items-center text-center text-2xl font-bold
                xs:text-3xl xs:max-w-[32rem] sm:max-w-[40rem]
                sm:gap-y-8  lg:max-w-[64rem]">
            <p class="font-semibold text-xl">{{ $t('Warum_ins') }}</p>
            <div class="mt-6 ">
                <div class=" xs:px-4 sm:px-0">
                    <p>{{ $t('Für_eine') }}</p>
                    <p>{{ $t('Fürè_eine') }}</p>
                </div>
                <p>{{ $t('Für_Dich_für') }}</p>
            </div>
            <div class="flex flex-col items-center gap-y-4 mt-6 xs:mt-8 lg:mt-48">
                <p class=" lg:text-5xl">{{ $t('Mission') }}</p>
                <a href="https://www.linkedin.com/company/indiezone/" target="_blank" class="mt-10 lg:mt-5" >
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 4.2467C0.5 1.99013 2.42578 0.117188 4.80469 0.117188H54.1953C56.5742 0.117188 58.5 1.96757 58.5 4.2467V53.7557C58.5 56.0122 56.5742 57.8852 54.1953 57.8852H4.80469C2.42578 57.8852 0.5 56.0348 0.5 53.7557V4.2467Z" fill="#006699"/>
                        <path d="M18.1289 48.4522V22.4566H9.45156V48.4522H18.1289ZM13.8016 18.8913C16.8148 18.8913 18.6953 16.9055 18.6953 14.4007C18.65 11.8508 16.8148 9.91016 13.8695 9.91016C10.9016 9.91016 8.95312 11.8508 8.95312 14.4233C8.95312 16.9055 10.8336 18.9138 13.7563 18.9138H13.8016V18.8913ZM22.932 48.4522H31.6094V33.9651C31.6094 33.1753 31.6773 32.3855 31.9039 31.8439C32.5156 30.3095 33.943 28.6848 36.3445 28.6848C39.4937 28.6848 40.7398 31.0767 40.7398 34.5518V48.4748H49.4398V33.5815C49.4398 25.5933 45.1578 21.8474 39.4711 21.8474C37.8774 21.7861 36.2977 22.1646 34.9064 22.9411C33.5151 23.7176 32.3663 24.8619 31.5867 26.2477H31.632V22.4566H22.932C23.0453 24.8937 22.932 48.4522 22.932 48.4522Z" fill="white"/>
                    </svg>
                </a>

            </div>
        </div>
        
        
    </section>
</template>