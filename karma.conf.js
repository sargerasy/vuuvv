var webpackConfig = require('./config/webpack.test.js');

module.exports = function(config) {
  var _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    singleRun: true,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  }

  if (process.env.TRAVIS) {
    _config.browsers = ['Chrome_travis_ci'];
  }

  config.set(_config);
}
