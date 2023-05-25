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
        //   'off-white':'#f9f9f9',
  
        //   'light-grey':'#f4f4f4',
          
        //   'success':'#2D9163',
        //   'danger':'#DE4654',
        //   'warning':'#FFC619',
        //   'info':'#1CCDF1',
  
  
        //   'light':'#555555', //for text
        //   'extra-light':'#a4a4a4', //for text
        },
        
        
      },
    },
    plugins: [],
  }
  
  