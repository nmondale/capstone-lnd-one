import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
			
  			'sm': 'clamp(0.8rem, 1.1vw, 1.4rem)',
  			'nav': 'clamp(0.8rem, 1vw, 1rem)',
			'2xl': 'clamp(1.5rem, 2vw, 2.5rem)',
			'3xl': 'clamp(2rem, 2vw, 3rem)',
  			'4xl': 'clamp(3rem, 7.5vw, 10rem)',
  		},
  		lineHeight: {
  			'sm': 'clamp(1.2rem, 1.3vw, 1.5rem)',
  			'nav': 'clamp(1.2rem, 1.3vw, 1.5rem)',
			'3xl': 'clamp(1.5rem, 2vw, 2.5rem)',
  			'4xl': 'clamp(2rem, 2.2vw, 2.2rem)',
  		},
  	},
  	colors: {
      main: "var(--main-color)",
      alt: "var(--alt-color)",
      brightest: "var(--brightest-color)",
      darkest: "var(--darkest-color)",
      brightBlue: "var(--bright-blue)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
