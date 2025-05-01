/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b5563", //gray 
        secondary: "#6BA539", //green
        // secondary: "#19B55A", //green
      },
    },
    plugins: [],
  }
}

