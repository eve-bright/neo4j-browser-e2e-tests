require( 'coffee-script/register' );

exports.config = {
    onPrepare: function ()
    {
        global.By = protractor.By;
        browser.ignoreSynchronization = true;
        browser.getCapabilities().then( function ( cap )
        {
            browser.browserName = cap.caps_.browserName;
        } );

    },
    baseUrl: 'http://localhost:7474/',
    rootElement: 'html',
    capabilities: {
      browserName: 'phantomjs',
      version: '',
      platform: 'ANY',
      'phantomjs.binary.path':'node_modules/phantomjs/bin/phantomjs',
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },
    specs: [
        './../pages/*.coffee',
        './../scenarios/initialise-tests.coffee',
        './../scenarios/login-tests.coffee',
        './../scenarios/stream-tests.coffee',
        './../scenarios/drawer-tests.coffee',
        './../scenarios/teardown-tests.coffee'
    ],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000
    },
    maxSessions: 1
};
