module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      stifinner: {
        lighter: "#FDFDFE", // Ekstra lys stifinnerblå
        light: "#BECAD7", // Lys stifinner
        profile: "#596578", // Stifinner
        dark: "#394B5D", // Mørk stifinner
        darker: "#2C3A48", // Ekstra mørk stifinner
        darkest: "#192028", // Dypeste stifinner
      },
      speider: {
        light: "#FCEB96", // Lys småspeidergul
        profile: "#F2CC07", // Småspeidergul
      },
      vandrer: {
        lighter: "#F1F9ED", // Lys grønn
        light: "#D6E6D2", // Lys vandrergrønn
        dark: "#99C49A", // Medium vandrergrønn
      },
      leder: {
        light: "#B2E3EF", // Medium lederblå
        profile: "#70B8D2", // Lederblå
        dark: "#317E9B", // Mørk lederblå
      },
      orange: {
        light: "#FFD9A1", // Lys orange
      },
      red: {
        light: "#EAB1B4", // Lys rød
      },
      white: "#FFFFFF",
      event: {
        project: "#B2E3EF", // Medium lederblå
        camp: "#FCEB96", // Lys småspeidergul
        activity: "#EAB1B4", // Lys rød
        course: "#FFD9A1", // Lys orange
        hike: "#99C49A", // Lys stifinner
      },
    },
    fontFamily: {
      sans: ["DIN Pro", "DIN", "arial", "helvetica", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    fontSize: {
      xsmall: ["14px", "16px"], // Text style: label
      small: ["14px", "18px"], // Text style: paragraph sans, menu items
      basealt: ["18px", "20px"], // Text style: h3
      base: ["18px", "24px"], // Text style: paragraph serif
      medium: ["24px", "30px"], // Text style: h2, preamble
      large: ["36px", "40px"], // Text style: h1
    },
  },
  variants: {},
  plugins: [],
};
