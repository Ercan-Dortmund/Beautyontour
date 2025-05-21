module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'tr'],
    localeDetection: true
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development'
};
