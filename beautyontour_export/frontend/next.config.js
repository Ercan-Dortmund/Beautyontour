module.exports = {
  reactStrictMode: true,
  i18n: {
    // Supported languages
    locales: ['de', 'en', 'tr'],
    // Default language
    defaultLocale: 'de',
  },
  // Environment variables
  env: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/beautyontour',
    API_URL: process.env.API_URL || 'http://localhost:3001',
  },
  // For production deployment
  output: 'standalone',
}
