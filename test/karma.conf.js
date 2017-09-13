// Karma configuration
// Generated on Tue Sep 05 2017 18:01:38 GMT+0300 (MSK)
const webpackConfig = require('../configs/webpack.config.js');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // репортеры необходимы для  наглядного отображения результатов
    reporters: ['mocha', 'coverage'],
    // list of files / patterns to load in the browser
    files: [
      'static/*.js',
      'test/**/*.js'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    // karma watches the test entry points
     // (you don't need to specify the entry option)
     // webpack watches dependencies
     // webpack configuration
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-jasmine', 'karma-mocha',
      'karma-chrome-launcher', 'karma-firefox-launcher',
      'karma-coverage', 'karma-webpack',
      'karma-mocha-reporter', 'karma-sourcemap-loader'
    ],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
