/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-desktop': "url('../src/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('../src/images/bg-sidebar-mobile.svg')",
        'arcade-icon': "url('../src/images/icon-arcade.svg')",
        'advanced-icon': "url('../src/images/icon-advanced.svg')",
        'pro-icon': "url('../src/images/icon-pro.svg')",
      },
      cursor: {
        'fancy': 'pointer',
      }
    },
  },
  plugins: [],
}

