module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'indian-orange': '#FF6B35',
        'spice-red': '#D7263D',
        'golden-turmeric': '#FFD700',
        'masala-black': '#1a110d'
      },
      boxShadow: {
        'dish-card': '0 10px 15px -3px rgba(255,107,53,0.1)',
      }
    },
  },
  plugins: []
}