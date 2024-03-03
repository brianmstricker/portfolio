import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  container: {
   center: true,
   padding: {
    DEFAULT: "1rem",
    sm: "1.25rem",
    lg: "2rem",
    xl: "4rem",
   },
  },
  extend: {
   colors: {
    main: {
     "50": "#eef9ff",
     "100": "#d9f2ff",
     "200": "#bbe9ff",
     "300": "#8cdcff",
     "400": "#55c6ff",
     "500": "#2ea9ff",
     "600": "#178bf9",
     "700": "#1072e5",
     "800": "#145cb9",
     "900": "#164f92",
     "950": "#112c50",
    },
   },
  },
 },
 plugins: [],
};
export default config;
