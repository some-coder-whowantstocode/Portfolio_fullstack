/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'customcol':'#04c2c9',
        'customcol_2':"#00a1a7"
      },
      animation:{ 
        teff:'teff 1s linear',
        seff:'seff 1s linear',
        dash:'dash 3s linear',
        roll:"roll 0.2s linear"
      },
      inset:{
        'custom':'var(-vh)'
      },
      boxShadow:{
        'out':"-5px -4px 2px 0px rgba(183,168,168,0.75),5px -4px 4px 0px rgba(183,168,168,0.75),-4px 6px 5px 0px rgba(183,168,168,0.75),5px 5px 5px 0px rgba(183,168,168,0.75)",
        "in":"2px 1px 4px 0px rgba(58, 57, 57, 0.75) inset, inset 2px -3px 4px 0px rgba(183,168,168,0.75), inset -5px 1px 5px 0px rgba(183,168,168,0.75), inset 5px 5px 5px 0px rgba(183,168,168,0.75)",
        skill:" 0px 0px 6px 0px rgba(0,0,0,0.75)"
      },
      height:{
        "outer":"100px",
        simg:'160px',
        "inner":"76px",
        "pimg":"300px",
        ibox:"40px",
        tbox:"300px",
        link:'60px',
        hlink:"55px",
        logo:"25px"
      },
      width:{
        "outer":"100px",
        simg:'160px',
        "inner":"76px",
        "pimg":"300px",
        ibox:"500px",
        link:'60px',
        hlink:"55px",
        logo:"25px"

      },
      scale:{
        "2":"scale(2)"
      },
      transitionProperty: {
        'size': 'height,width',
      },
      spacing:{
        "5px":"5px",
        "8px":"7.5px"
      }
    
    },
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('group-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group:hover .group-hover\\:${className}`;
        });
      });
    },
  ],
}

