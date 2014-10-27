Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('blog', {
    path: '/',
    waitOn: function() {
    	return [
    		Meteor.subscribe('articles'),
    		Meteor.subscribe('tags')
    	];
    }
  });

  this.route('choose', {
    path: '/choose',
    template: 'choose'
  });
});
