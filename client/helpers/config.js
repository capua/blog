Meteor.startup(function() {
	// Moment.js
	moment.locale('es');

	// Highlight.js
	hljs.configure({
		tabReplace: '    ', // 4 spaces
		useBR: true
	});
});
