/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'stripe':"url('/html/assets/Background_Stripe_1.png')",
      },
    },
    
  },
  plugins: [],
}
