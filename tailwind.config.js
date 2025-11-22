// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    // This correctly scans all your files for class names:
    "./index.html",
    "./{App,index,constants,types}.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./services/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Re-add your theme extensions here:
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#3b82f6', // Blue
        secondary: '#60a5fa', // Light Blue
        dark: '#1a1a1a', 
        darker: '#111111', 
        card: '#222222', 
      },
      animation: {
        'grid-flow': 'gridFlow 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        }
      }
    }
  },
  plugins: [],
}