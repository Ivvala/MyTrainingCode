// An example configuration file.
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./src/specFiles_Exam/E2E_BankingApp.js'],
 onPrepare: function() {
      /*jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
         takeScreenshots: true,
        //takeScreenshotsOnlyOnFailures: true
        })
      )
 },*/
	  jasmine.getEnv().addReporter(new AllureReporter({
		  resultsDir: './node_modules/jasmine-allure-reporter/allure-results'
	  }));
	 
},


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};
