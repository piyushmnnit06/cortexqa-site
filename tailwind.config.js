/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        carbon: "#05070b",
        panel: "#0d121a",
        line: "rgba(148, 163, 184, 0.18)",
        cortex: {
          teal: "#29f0d4",
          cyan: "#68d8ff",
          amber: "#f8c45d",
          rose: "#ff6f91",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(41, 240, 212, 0.18)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 3.2s ease-in-out infinite",
        scan: "scan 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.28" },
          "50%": { opacity: "0.9" },
        },
        scan: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
};
