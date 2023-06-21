<template>
    <div class="base-feature-card p-4 flex flex-col items-center text-center rounded-md bg-primary/5">
        <div>
            <slot name="icon"/>
        </div>
        <h3 class="font-semibold mt-6">            
            <slot name="title"/>
        </h3>
        <div class="mt-3">            
            <slot name="content"/>
        </div>
    </div>
</template>

<style scoped>
    .base-feature-card{
        box-shadow: 3px 5px 8px 0px rgba(0, 0, 0, 0.3);
    }
</style>