const path = require('path');
const fs = require('fs');
const { BeforeAll } = require('cucumber');

exports.config = {
    runner: 'local',
    specs: [
        './src/features/TC_004.feature',
        // 'src/test_scripts/TC_001.js',
        //'src/test_scripts/TC_002.js',
        //'src/test_scripts/TC_003.js',
        //'src/test_scripts/TC_004.js',
        //'src/test_scripts/TC_005.js',
    ],
    exclude: [
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--start-maximized'
                // '--headless', '--disable-gpu',
            ],
            // prefs: {
            //     'download.default_directory': downloadDir
            // }
        }}],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://unsplash.com',
    baseAPIUrl: 'https://api.unsplash.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters:['spec'],
    /*mochaOpts: {
        ui: 'bdd',
        timeout: 900000,
        compilers: ['js:@babel/register']
    },*/

    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./src/stepDefinitions/given.js', './src/stepDefinitions/when.js', './src/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,    // <boolean> show full backtrace for errors
        //compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
        compiler: ['js:@babel/register'], // <string[]> filetype:compiler used for processing required features
        failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
        compilers: ['js:@babel/register'],
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: true,    // <boolean> Enable this config to treat undefined definitions as warnings
        name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,    // <boolean> hide step definition snippets for pending steps
        source: false,      // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,       // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: 30000,    // <number> timeout for step definitions
        tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined,           // <string> specify a custom snippet syntax
    },
    
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: true
        }
    },
    before: () => {
        require('@babel/register');
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.sprintf = require('sprintf-js').sprintf;
    },

};
