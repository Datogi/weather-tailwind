module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     backgroundImage: (theme) => ({
       'cold': "url('/src/cold.jpg')",
       'warm': "url('/src/warm.jpg')",
     }),
     colors:{
       color1:"#313131",
       color2:"#FFFF50"
     }
    
    },
  },
  plugins: [],
}
