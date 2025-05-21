module.exports = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'tr'],
  },
  images: {
    domains: ['localhost'],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/shop': { page: '/shop' },
      '/booking': { page: '/booking' },
      '/health': { page: '/health' },
      '/contact': { page: '/contact' },
      '/admin': { page: '/admin' },
      '/editor': { page: '/editor' },
    };
  },
}
