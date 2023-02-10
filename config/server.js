module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  locale: 'ru-RU',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
