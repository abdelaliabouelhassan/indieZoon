module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': '475px',
        },
        
        colors:{
          'primary':'#1A2933',
          'endie-green':'#99D100'
        },
        
        
      },
    },
    plugins: [],
  }
  
  