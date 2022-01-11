module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': {'max': '411px'},

      'sm': {'min': '640px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'dark-gray': '#222222',
      'light-gray': 'rgba(34, 34, 34, 0.5)',
      'dark-white': 'rgba(255, 255, 255, 0.5)',
      'cream': '#F7F8FA',
      'dark-blue': '#2E4DEC',
      'dark-gray-2': '#818181',
      'light-gray-2': '#969696',
      'primary-blue': '#2E4DEC',
      'gray': '#E5E5E5',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        'sm': '10px',
        'm': '15px',
        'L': '30px', 
      },
      spacing: {
        '1': '2px',
        '2': '4px',
        '3': '8px',
        '4': '10px',
        '5': '12px',
        '6': '14px',
        '7': '16px',
        '8': '18px',
        '9': '20px',
        '10': '22px',
        '11': '24px',
        '12': '26px',
        '13': '28px',
        '14': '30px',
        '15': '32px',
        '16': '34px',
        '17': '36px',
        '18': '38px',
        '19': '40px',
      },
      backgroundImage: {
        'hero': "url('/assets'/images/hero-image.png)"
      },
      gridTemplateColumns: {
        'cardReview': '71px 150px'
      }
    },

    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
  },
}
