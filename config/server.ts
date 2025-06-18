export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // ✅ Add this line to allow external hosts (like ngrok)
  allowedHosts: ['.ngrok-free.app', 'localhost', '127.0.0.1'],
});
