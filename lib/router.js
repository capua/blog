Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
      return [
        Meteor.subscribe('tags')
      ];
    }
});

Router.map(function() {
  this.route('blog', {
    path: '/',
    waitOn: function() {
    	return [
    		Meteor.subscribe('articles')
    	];
    }
  });

  this.route('article', {
    path: '/article/:_id',
    template: 'article',
    waitOn: function() {
      return [
        Meteor.subscribe('articles') //cambiar subscripción a singleArticle
      ];
    }
  });
});
