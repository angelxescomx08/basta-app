import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      negro: "#000",
      blanco: "#fff",

      fondo: "#f3fafc",
      primario: "#63bad4",
      secundario: "#d3ebf3",
      resaltar: "#36a3c4",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
  corePlugins: {
    backgroundOpacity: true,
    textOpacity: true,
  },
} satisfies Config;
