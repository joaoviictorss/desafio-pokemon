import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokeball-bg': "url('/bg-pokeball.png')",
     
      },  
      fontFamily: {
        sans: ['var(--pokemon)']
      }
    },
  },
  plugins: [],
};
export default config;
