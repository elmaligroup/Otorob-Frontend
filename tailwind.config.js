/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/*", "index.html"],
  theme: {
  
    screens: {
      '2xs': '262px',
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    backgroundImage: {
      'header': "url('../images/car.svg')",
      'footer': "url('../images/footer.png')"
  },
    
    extend: { 
      margin: {
        '420': '26.25rem',
        '660': '41.25rem',
        'on': '0.625rem'
      },
      colors: {
      titles: "#020044",
      price: "#0000A2",
      ship: "#096301",
      lightblue: "#4267B2",
      brand: "linear-gradient(90deg, #020044 0%, rgba(0, 0, 162, 0.72) 100%)"
    },
    fontFamily: { 
      poppins: "'Poppins', sans-serif",
   },
   
     
  },
  plugins: [
  ],
}
}
