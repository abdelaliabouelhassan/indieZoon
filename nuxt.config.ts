// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
          { 
              hid: 'description', name: 'description', content: 'add your description here'
          },
          { 
              hid: 'keywords', name: 'keywords', content: 'add, your, keywords, here',
          },     
        ],
      link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css:[
    '~/assets/css/accordion.css'
  ],
})
