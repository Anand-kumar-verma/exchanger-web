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
        blue100:"#00008B"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #6A5ACD, #483D8B, #00008B)',
      },
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      marquee: 'marquee 15s linear infinite',
    },
    plugins: [],
  }
}

