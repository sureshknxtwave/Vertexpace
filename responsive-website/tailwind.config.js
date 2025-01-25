module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#1e3a8a',
        },
        orange: {
          500: '#f97316',
        },
        primary: '#0A2357',
        secondary: '#F47B2A',
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      height: {
        '88': '22rem', // for the larger dashed border
      },
      width: {
        '88': '22rem', // for the larger dashed border
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        '4xl': ['2.25rem', {
          lineHeight: '2.5rem',
        }],
        '6xl': ['3.75rem', {
          lineHeight: '1',
        }],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(249, 115, 22, 0.3)', // orange glow effect
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this plugin is installed
    require('@tailwindcss/typography'), // Include only if used
  ],
}