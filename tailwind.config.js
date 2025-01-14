/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#0B1C2C",
        "blue-light": "#153B50",
        "blue-neon": "#0ff",
        "rgba-black": "rgba(0, 0, 0, 0.3)",
      },
      boxShadow: {
        "circula-showcase": "0 0 10px rgba(0, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
