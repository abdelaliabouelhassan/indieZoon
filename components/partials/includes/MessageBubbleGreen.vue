<template>
    <div class="message_green_bubble relative flex flex-col ">
        <img class="z-0 w-full h-full object-fill absolute top-0 left-0 scale-x-110" src="/images/for_you/message_green_bubble.svg" alt="message_green_bubble">
        
        <!-- content -->
        <div class="z-10 w-full px-6 pt-4">
            <slot />
        </div>
        <div class="z-10 w-full px-6 flex items-center justify-end gap-x-1">
            <div class="text-[#B4AEAE]">18:07</div>
            <svg class="w-8 h-6" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99625 16.1698L4.82625 11.9998L3.40625 13.4098L8.99625 18.9998L20.9963 6.99984L19.5863 5.58984L8.99625 16.1698Z" fill="#2997FC"/>
                <path d="M15.9963 16.1698L11.8262 11.9998L10.4062 13.4098L15.9963 18.9998L27.9963 6.99984L26.5863 5.58984L15.9963 16.1698Z" fill="#2997FC"/>
            </svg>
        </div>
    </div>
</template>
<style scoped>
.message_green_bubble{
    /* clip-path: path("M247 18C247 8.05887 238.941 0 229 0H18C8.05887 0 1.84774e-06 8.05887 1.84774e-06 18V82C1.84774e-06 91.9411 7.9542 100 17.8953 100C70.7726 100 222.935 100 227.928 100C233.976 100 247 124 247 124V18Z"); */
    /* background: url(/images/for_you/message_green_bubble.svg);
    background-repeat: no-repeat; */
}
</style>