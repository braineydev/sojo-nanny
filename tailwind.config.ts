import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#FAF5EE", taupe: "#B8A394", cocoa: "#5C4636", rose: "#C98A8A" },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
