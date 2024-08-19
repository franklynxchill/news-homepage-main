/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
       DEFAULT: '1rem',
      } 
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '992px',
      xl: '1124px',
    },
    extend: {
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        fontInter: 'Inter',
      },
      backgroundImage: {
        webMobile: 'url("/assets/images/image-web-3-mobile.jpg")',
        webDesktop: 'url("/assets/images/image-web-3-desktop.jpg")',
      },
    },
  },
  plugins: [],
}

