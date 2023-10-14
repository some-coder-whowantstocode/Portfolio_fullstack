/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{ 
        teff:'teff 1s linear',
        seff:'seff 1s linear'
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

