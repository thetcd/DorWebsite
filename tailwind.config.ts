import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'phantom-purple': '#AB9FF2',
        'phantom-purple-dark': '#8B7DD8',
        'phantom-bg': '#0D0D0D',
        'phantom-card': '#1A1A1A',
        'phantom-border': '#2A2A2A',
        'phantom-text': '#FFFFFF',
        'phantom-text-secondary': '#A0A0A0',
        'phantom-text-tertiary': '#6B6B6B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'phantom-gradient': 'linear-gradient(135deg, #AB9FF2 0%, #8B7DD8 100%)',
        'phantom-gradient-hover': 'linear-gradient(135deg, #BBAFF5 0%, #9B8FE0 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config


