import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      oscuro: "#1A2028",
      blanco: "#fff",
      "azul-oscuro": "#256074",
      azul: "#1FACAE",
      "azul-claro": "#77FAC6",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
