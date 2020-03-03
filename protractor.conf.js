exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 50000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: { 'browserName': 'chrome', chromeOptions: { args: ['start-maximized'] } },

  plugins: [{
    path: './mouse-plugin.js'
  }],

  specs: ['features/*.feature'],

  cucumberOpts: {
    tags: false,
    format: 'json:.tmp/results.json',
    require: [
      'features/stepDefinitions/stepDefinition.js'
    ]
  }
};