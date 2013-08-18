Package.describe({
    summary: "\u001b[32mv0.0.1\n"+
         "\u001b[33m-----------------------------------------\n"+
         "\u001b[0m Adds basic support for rss feed v2.0     \n"+
         "\u001b[0m                                          \n"+
         "\u001b[33m-------------------------------------RaiX\n"
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
  api.add_files('rss.server.js', 'server');

  api.export && api.export('RssFeed');

});

// Package.on_test(function(api) {
//   api.use('cordova', ['client']);
//   api.use('test-helpers', 'client');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.add_files([
//     'plugin/meteor.cordova.js',
//     'meteor.cordova.tests.js',
//   ], 'client');
// });