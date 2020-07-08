const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    specs: [
        './features/*.feature',
    ],
    maxInstances: 10,

    capabilities: [

        {
            browserName: 'chrome',
            maxInstances: '5',
        },
    ],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/reports/errorShots/',

    baseUrl: 'http://computer-database.herokuapp.com/',
    waitforTimeout: 9000,            // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 9000,    // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
    connectionRetryCount: 3,          // Default request retries count
    services: ['selenium-standalone'],
    framework: 'cucumber',
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./stepDefinitions/given.js', './stepDefinitions/when.js', './stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,    // <boolean> show full backtrace for errors
        //compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
        compiler: [], // <string[]> filetype:compiler used for processing required features
        failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
        name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,    // <boolean> hide step definition snippets for pending steps
        source: false,      // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,       // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
        tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined,           // <string> specify a custom snippet syntax
    },
    before: function() {
        /**
         * Setup the Chai assertion framework
         */
        const chai    = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};


