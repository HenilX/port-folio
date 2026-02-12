module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#334155',
          accent: '#1e3a8a'
        },
        accent: {
          DEFAULT: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
}
