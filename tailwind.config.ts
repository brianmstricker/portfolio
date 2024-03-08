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
   colors: {},
  },
 },
 plugins: [],
};
export default config;
