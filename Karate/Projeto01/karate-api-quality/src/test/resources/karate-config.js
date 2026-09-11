function fn() {
  var env = karate.env || 'dev';

  var config = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    authUrl: 'https://auth.dev.example.com',
    timeout: 30000
  };

  // Environment-specific overrides
  if (env == 'staging') {
    config.baseUrl = 'https://api.staging.example.com';
  } else if (env == 'prod') {
    config.baseUrl = 'https://api.example.com';
    config.timeout = 60000;
  }

  return config;
}