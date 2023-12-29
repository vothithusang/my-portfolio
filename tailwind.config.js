// eslint-disable-next-line no-undef
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        full: "100%",
      },
      borderRadius: {
        small: "4px",
        mid: "10px",
      },
      fontFamily: {
        // inter: ["Inter"],
        // noto: ["NotoSansKR"],
        // open: ["OpenSans"],
        poppins: ["Poppins"],
      },
      boxShadow: {
        common: "0px 0px 32px rgba(136, 152, 170, 0.15)",
      },
      colors: {
        borderColor: "rgba(0, 0, 0, 0.10)",
        textColor: "rgba(0, 0, 0, 0.70)",
        mainColor: "#3F80F7",
        mainYellow: "#C99C33",
        disabledColor: "#A3A5AE",
        whiteColor: "#ffffff",
        blackColor: "#000000de",
        bgColumn: "#57b4ff14",
        errorColor: "#bc1430",
      },
    },
  },
  plugins: [],
};
