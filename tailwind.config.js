/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: [
    "./index.html",
    "./pages/sourcers.html",
    "./pages/createListing.html",
    "./pages/complianceVerified.html",
    "./pages/idVerified.html",
    "./pages/sourcerProfilePage.html",
    "./pages/referralProgram.html",
    "./pages/pricing.html",
    "./pages/ourPartners.html",
    "./pages/partnersAdvertisment.html",
    "./pages/blog.html",
    "./pages/blogPost.html",
    "./pages/getVerified.html",
    "./pages/signIn.html",
    "./pages/signUp.html",
    "./pages/propertyListings.html",
    "./pages/listing.html",
    "./pages/dashboard.html",
    "./pages/dashboardMessages.html",
    "./pages/investors.html",
    "./pages/investorProfilePage.html",
    "./pages/subscription.html",
    "./pages/accountDetails.html",
    "./pages/myProfile.html",




  ],
  theme: {
    fontFamily: {
      "stolzl": ["stolzl", "sans-serif"]
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      "2k": "2560px"
    },
    colors: {
      "primary": "#F8B84E",
      "secondary": "#16234A",
      "white": "#fff",
      "black": "#000",
      "lightGrey": "#F9F9F9",
      "lightBlue": "#7D8395",
      "danger": "#D83535"
    },
    extend: {},
  },
  plugins: [],
}

