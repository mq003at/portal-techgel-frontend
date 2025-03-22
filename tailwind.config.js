/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",'./src/**/*.{js,ts,jsx,tsx}', './node_modules/flyonui/flyonui.js'],
  plugins: [require('daisyui'), require('flyonui/plugin')],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        ],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"], // or your own custom theme
  },

};
