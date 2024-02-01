/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ECF4D6",
        secondary: "#9AD0C2",
        tertiary: "#2D9596",
        quaternary: "#265073",
        white: "#FFFFFF",
        bg: "#F2F2F2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

