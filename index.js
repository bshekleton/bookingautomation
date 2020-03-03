
var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './.tmp/results.json',
        output: './booking_automation_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.1.2",
            "Test Environment": "Testing",
            "Browser": "Chrome  80.0.3987.122 (Official Build) (64-bit)",
            "Platform": "Windows 10",
            "Tester":"Bryan Shekleton"
        }
    };
 
    reporter.generate(options);