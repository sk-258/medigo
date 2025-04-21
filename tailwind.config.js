module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0097b2', // Custom primary color
        secondary: '#f2a900', // Custom secondary color
        lightGray: '#f8f8f8', // Light gray background
        darkGray: '#333333', // Dark gray text
        success: '#4CAF50', // Success color (green)
        error: '#FF5733', // Error color (red)
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '72': '18rem', // Custom spacing (18rem)
        '84': '21rem', // Custom spacing (21rem)
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'medicines': "url('/src/assets/medicines-bg.jpg')",
        'doctor': "url('/src/assets/doctor-bg.jpg')",
      },
    },
  },
  plugins: [],
}
