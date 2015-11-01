// Package metadata file for Meteor.js
var packageName = 'aaronroberson:angular-easyfb';
var where = 'client';
var version = '1.4.1';
var summary = 'AngularJS + Facebook JavaScript SDK. Packaged for Meteor.';
var gitLink = 'https://github.com/aaronroberson/angular-easyfb';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.3.0', where)

  api.addFiles(['src/angular-easyfb.js'], where);
});
