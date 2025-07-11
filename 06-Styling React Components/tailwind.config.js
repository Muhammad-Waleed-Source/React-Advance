/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
};

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       fontFamily: {
//         title: ['"Pacifico"', 'cursive']
//       }
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
