/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        spider: {
          red: '#e62429',
          crimson: '#bd0f14',
          brightRed: '#ff2a32',
          blue: '#0066cc',
          electric: '#0ea5e9',
          darkBlue: '#052b57',
          dark: '#080a11',
          surface: '#0e1220',
          border: '#1b233a',
          glow: 'rgba(230, 36, 41, 0.4)',
        },
        brand: {
          rose: '#e62429',
          crimson: '#bd0f14',
          pink: '#ff2a32',
          violet: '#0066cc',
          purple: '#0ea5e9',
          indigo: '#2563eb',
        },
        dark: {
          bg: '#07090e',
          card: '#0d111d',
          elevated: '#131829',
          border: '#1c243d',
          text: '#f1f5f9',
          muted: '#94a3b8',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'web-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

