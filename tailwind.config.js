/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ouro: {
          escuro:   '#8B6914',
          medio:    '#C9950A',  
          brilhante: '#E8B923',  
        },
        trofeu: {
          'bg-preto':    '#0D0B08',  
          'bg-escuro': '#1C1812', 
          'text-claro': '#F5E9C8',  
          'text-escuro':  '#2A1F08', 
          'text-outro': '#8A7650',  
        },
      },
    },
  },
  plugins: [],
}