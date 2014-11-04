Template.article.rendered = function() {
	// Highlight.js
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
};

Template.article.helpers({
	articles: function() {
		return Articles.find();
	}
});
