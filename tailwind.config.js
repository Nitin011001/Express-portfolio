/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.{hbs,html,js}",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons"
      }
    },
    colors:{
      'darkpale':'#06283D',
      'pale':"#256D85",
      'skyblue':'#47B5FF',
      'winter':'#DFF6FF',
      'teal':"#E7F6F2"
    }
  },
  plugins: [],
}