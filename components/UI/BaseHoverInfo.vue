<template>
    <div class="container mx-auto relative">
        <div class="flex gap-x-10 "  @mouseover="mouseOver">
            <div class="w-36 h-36 cursor-pointer" >
                <img class="w-full object-contain" src="/images/team/Klara.jpg" alt="Klara">
            </div>
            <div class="w-36 h-36 cursor-pointer" @mouseover="mouseOver">
                <img class="w-full object-contain" src="/images/team/Benni.jpg" alt="Benni">
            </div>
        </div>
        <div class=" absolute left-0 transition-all ease-out duration-200" ref="cursor"> 
            <svg class="w-20 h-10" viewBox="0 0 143 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.0176 1.55486C69.2579 -0.467573 73.3671 -0.467569 76.6074 1.55486L137.829 39.7668C146.354 45.0882 142.584 58.25 132.534 58.25H10.0913C0.0412445 58.25 -3.72919 45.0882 4.79644 39.7668L66.0176 1.55486Z" fill="#1A2933"/>
            </svg>

        </div>
    </div>
</template>

<script setup>
const cursor = ref(null)
function mouseOver(e) {
    console.log('target', e)
    console.log('mouse over', e.target.getBoundingClientRect().x)
    cursor.value.style.left = `${e.target.getBoundingClientRect().x}px`
}
</script>