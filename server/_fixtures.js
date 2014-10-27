/* ========================================================================= */
/* VARIABLES and FUNCTIONS ================================================= */
/* ========================================================================= */

var tagsId = [];

var now = new Date().getTime();

/* ========================================================================= */
/* TAGS ==================================================================== */
/* ========================================================================= */

var tags = [
	{ name: "html" },		// tagsId[0]
	{ name: "css" },		// tagsId[1]
	{ name: "javascript" }	// tagsId[2]
];

if (Tags.find().count() === 0) {
	_.each(tags, function (label) {
		var id = Tags.insert(label);
		tagsId.push(id);
	});
}

/* ========================================================================= */
/* ARTICLES ================================================================ */
/* ========================================================================= */

var articles = [
	{
		title: "Que comiencen los juegos!",
		picture: "images/news/1.png",
		description: "<p>Tras una lucha sangrienta para conseguir el nombre de usuario <i>capua</i> en GitHub, ya no tenemos excusas para compartir nuestras locuras.</p>",
		content: "<p>Tras una lucha sangrienta para conseguir el nombre de usuario <i>capua</i> en GitHub, ya no tenemos excusas para compartir nuestras locuras.</p>",
		date: now,
		author: "ayozebarrera",
		tags: [ tagsId[1], tagsId[2] ]
	}
];

if (Articles.find().count() === 0) {
	_.each(articles, function (article) {
		Articles.insert(article);
	});
}
