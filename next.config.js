/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // config
  api: {
    bodyParser: false, // Optional: Set bodyParser options
    baseUrl: '/api', // Specify the base URL for API routes
  },
});
