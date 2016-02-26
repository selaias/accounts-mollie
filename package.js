Package.describe({
  name: 'selaias:accounts-mollie',
  version: '0.2.0',
  summary: 'Login service for Mollie accounts',
  git: 'https://github.com/selaias/accounts-mollie.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');
  
  api.use(['accounts-base', 'accounts-oauth'], ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);

  api.use('selaias:oauth-mollie@0.2.0', ['client', 'server']);

  api.addFiles("mollie.js");

});