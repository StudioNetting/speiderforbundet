module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stifinner: {
         400: '#fdfdfe', // Ekstra lys stifinnerblå
         500: '#becad7', // Lys stifinner
         600: '#596578', // Stifinner
         700: '#394b5d', // Mørk stifinner
         800: '#2c3a48', // Ekstra mørk stifinner
         900: '#192028', // Dypeste stifinner
      },
      speider: {
         400: '#fceb96', // Lys småspeidergul
         500: '#f2cc07', // Småspeidergul
      },
      vandrer: {
         300: '#f1f9ed', // Lys grønn
         400: '#d6e6d2', // Lys vandrergrønn
         500: '#99c49a', // Medium vandrergrønn
      },
   },
   fontFamily : {
      'sans' : ['DIN Pro', 'DIN', 'arial', 'helvetica', 'sans-serif'],
      'serif': [ 'Georgia', 'serif'],
   },
   fontSize: {
      sm: ['14px', '18px'],
      base: ['18px', '24px'],
      large: ['24px', '30px'],
      xl: ['36px', '40px'],
    }
  },
  variants: {},
  plugins: [],
};
