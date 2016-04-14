require( 'coffee-script/register' );

exports.config = {

    onPrepare: function ()
    {
        global.Settings = {
          defaultTimeout: 500,
          shortTimeout: 500,
          longTimeout: 500,
          longRunningQueryTimeout: 5000
        }
        global.By = protractor.By;
        global.Version = '3.0';
        global.Remote = false;
        browser.ignoreSynchronization = true;
        browser.getCapabilities().then( function ( cap )
        {
            browser.browserName = cap.caps_.browserName;
        } );
    },
    baseUrl: 'http://localhost:9000',
    rootElement: 'html',
    maxSessions: 1,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        name: 'Chrome'
    },
    specs: [
        './../../pages/*.coffee',
        './../../scenarios/initialise-tests.coffee'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    }
};
