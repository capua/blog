Template.newArticle.rendered = function() {
	// Highlight.js
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
};
