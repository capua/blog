// Fairly stupid pluralizer
UI.registerHelper('pluralize', function(n, thing) {
	if (n === 1) {
		return '1 ' + thing;
	}
	else {
		return n + ' ' + thing + 's';
	}
});

UI.registerHelper('equals', function(a, b) {
	return a == b;
});

// Format an ISO date using Moment.js
// http://momentjs.com/
// moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
// usage: {{dateFormat creation_date format="MMMM YYYY"}}
UI.registerHelper('dateFormat', function(context, block) {
	if (window.moment) {
		var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
		return moment(context).format(f); // had to remove Date(context)
	}
	else {
		return context; // moment plugin not available. return data as is.
	}
});

// Usage: {{dateFromNow creation_date}}
UI.registerHelper('dateFromNow', function(context) {
	if (window.moment) {
		return moment(context).fromNow(); // had to remove Date(context)
	}
	else {
		return context; // moment plugin not available. return data as is.
	}
});

// Usage: {{getTagById tag_id}}
UI.registerHelper('getTagById', function(id) {
	return Tags.findOne({_id: id}).name;
});
