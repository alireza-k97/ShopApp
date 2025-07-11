// tailwind.config.js
module.exports = {
  content: ['./dist/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IranSansRegular', 'sans-IranSansBold'],
      },
    },
  },
  plugins: [],
}
