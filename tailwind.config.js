// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],

          // 🔥 Override specific DaisyUI roles
          success: "#22c55e",
          primary: "#1e40af",
          secondary: "#f43f5e",
        },
      },
    ],
  },
};
