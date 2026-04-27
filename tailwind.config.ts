import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C47FF",
          dark: "#4B2FD4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
