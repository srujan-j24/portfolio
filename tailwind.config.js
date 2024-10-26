/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			rotateY: {
				'0%': { transform: ' rotateZ(-6deg) rotateX(0deg)' },
				'100%': { transform: 'rotateZ(-6deg) rotateX(360deg) ' },
			},
			glitch: {
				'2%, 64%': { transform: 'translate(2px, 0) skew(0deg)' },
				'4%, 60%': { transform: 'translate(-2px, 0) skew(2deg)' },
				'62%': { transform: 'translate(0, 0) skew(50deg)' },
			},
		},
		animation: {
			rotateY: 'rotateY 10s linear infinite',
			glitch: 'glitch 1s infinite',
		},
  		fontFamily: {
  			archivoBlack: ['"Archivo Black"', 'sans-serif'],
  			montserrat: ['Montserrat"', 'sans-serif'],
			blackOps: ['"Black Ops One"', 'system-ui'],
			glitch: ['"Rubik Glitch"', 'system-ui']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
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
  		}
  	}
  },
  plugins: [
	  require("tailwindcss-animate"),

  ],
}

