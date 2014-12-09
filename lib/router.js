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
    data: function() { return Articles.findOne({_id: this.params._id}); }
  });

  this.route('new', {
  	path: 'new',
  	template: 'newArticle',
  	data: function() { return Articles.findOne({newArticle: true}); }
  });
});
