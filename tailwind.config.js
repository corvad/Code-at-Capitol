/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
      capitol: {
          "primary": "#0284c7",
          "secondary": "#9ca3af",
          "accent": "#60a5fa",
          "neutral": "#bfdbfe",
          "base-100": "#f3f4f6",
          "info": "#8AB1E0",
          "success": "#18B466",
          "warning": "#C9A508",
          "error": "#DC3D32",
          },
        },
      ],
    },
    plugins: [
      require('daisyui'),
    ],
  }