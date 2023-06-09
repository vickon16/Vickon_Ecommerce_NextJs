
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        150: "150px",
        180: "180px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "3xl": "1680px",
      },
      colors: {
        shade2Xs: "#3391e9",
        shadeXs: "#22639f",
        shadeSm: "#13395d",
        shadeSmCard: "#0f2e4b88",
        shadeMd: "#0c2237",
        shadeLg: "#0e273f",
        shadeXl: "#0a1d2e",
        shade2Xl: "#081824",
        shade3Xl: "#06111a",
        textXs: "#bbc",
        textSm: "#ccd",
        textMd: "#dde",
        textLg: "#eef",
        textXl: "#fff",
        grayColor: "#9c9c9c",
        primaryColor: "rgb(69, 131, 181)",
        secondaryColor: "rgb(101, 168, 222)",
      },
      fontSize: {
        clamp2Xs: "clamp(0.7rem, 0.85vw, 0.85rem)",
        clampXs: "clamp(0.9rem, 1vw, 1rem)",
        clampSm: "clamp(1.1rem, 1.2vw, 1.2rem)",
        clampMd: "clamp(1.2rem, 1.7vw, 1.7rem)",
        clampBase: "clamp(1.3rem, 2.1vw, 2.1rem)",
        clampLg: "clamp(1.5rem, 2.6vw, 2.6rem)",
        clampXl: "clamp(1.8rem, 3.1vw, 3.1rem)",
        clamp2Xl: "clamp(2.1rem, 3.6vw, 3.6rem)",
        clamp3Xl: "clamp(3.1rem, 5.8vw, 5.8rem)",
      },
    },
  },
  plugins: [],
};
