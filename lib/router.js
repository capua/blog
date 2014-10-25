Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('blog', {
    path: '/'
  });
  this.route('choose', {
    path: '/choose',
    template: 'choose'
  });
});
