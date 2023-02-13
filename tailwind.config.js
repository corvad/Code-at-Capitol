/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#60a5fa",
        
"secondary": "#86efac",
        
"accent": "#6366f1",
        
"neutral": "#bfdbfe",
        
"base-100": "#1f2937",
        
"info": "#a78bfa",
        
"success": "#15803d",
        
"warning": "#fb923c",
        
"error": "#ef4444",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}