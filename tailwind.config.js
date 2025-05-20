/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        coolblue: "#1d5bde",      
        sweetevil: "#f81d22",     
        orangejuice: "#f8751d",   
        neoncyn: "#3abff8",       
        futureviolet: "#7a1dde",  
        snowwhite: "#f0f2f5",     
        justdark: "#101010",      
      },
    },
  },
};