module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stifinner: {
         lighter: '#fdfdfe', // Ekstra lys stifinnerblå
         light: '#becad7', // Lys stifinner
         profile: '#596578', // Stifinner
         dark: '#394b5d', // Mørk stifinner
         darker: '#2c3a48', // Ekstra mørk stifinner
         darkest: '#192028', // Dypeste stifinner
      },
      speider: {
         light: '#fceb96', // Lys småspeidergul
         profile: '#f2cc07', // Småspeidergul
      },
      vandrer: {
         lighter: '#f1f9ed', // Lys grønn
         light: '#d6e6d2', // Lys vandrergrønn
         dark: '#99c49a', // Medium vandrergrønn
      },
      leder: {
         light: '#B2E3EF', // Medium lederblå
         profile: '#70B8D2', // Lederblå
         dark: '#317E9B', // Mørk lederblå
      },
      orange: {
         light: '#ffd9a1', // Lys orange
      },
      red: {
         light: '#EAB1B4', // Lys rød
      },
      white: '#FFFFFF',
      event: {
         'course': '#B2E3EF', // Medium lederblå
         'camp': '#fceb96', // Lys småspeidergul
         'hike': '#EAB1B4', // Lys rød
         'activity': '#ffd9a1', // Lys orange
         'project': '#becad7', // Lys stifinner
      },
   },
   fontFamily : {
      'sans' : ['DIN Pro', 'DIN', 'arial', 'helvetica', 'sans-serif'],
      'serif': [ 'Georgia', 'serif'],
   },
   fontSize: {
      small: ['14px', '16px'],
      base: ['18px', '24px'],
      large: ['24px', '30px'],
      xlarge: ['36px', '40px'],
    }
  },
  variants: {},
  plugins: [],
};
