/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        "container2":`
        "max-width":"1200px",
        "padding":"0 20px"
        `,
      },
    },
  },
  plugins: [],
}

