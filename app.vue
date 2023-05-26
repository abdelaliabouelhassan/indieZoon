<template>
  <div>
    <NuxtLayout>
      <NuxtPage />

    </NuxtLayout>

  </div>
</template>

<script setup>

useHead({
  link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      }
    ]
})

</script>