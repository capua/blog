Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('choose', {
    path: '/',
    template: 'choose'
  });
});
