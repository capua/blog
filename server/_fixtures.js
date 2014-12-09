/* ========================================================================= */
/* VARIABLES and FUNCTIONS ================================================= */
/* ========================================================================= */

var tagsId = [];

var now = new Date().getTime();

/* ========================================================================= */
/* TAGS ==================================================================== */
/* ========================================================================= */

var tags = [
	{ name: "html5" },		// tagsId[0]
	{ name: "css3" },		// tagsId[1]
	{ name: "javascript" },	// tagsId[2]
	{ name: "meteor" }, 	// tagsId[3]
	{ name: "mongodb" }, 	// tagsId[4]
	{ name: "sass" }, 		// tagsId[5]
	{ name: "terminal" }, 	// tagsId[6]
	{ name: "git" }, 		// tagsId[7]
	{ name: "editor" }		// tagsId[8]
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
		picture: "/images/news/1.png",
		description: "<p>Tras una lucha sangrienta para conseguir el nombre de usuario <i>capua</i> en GitHub, ya no tenemos excusas para compartir nuestras locuras.</p>",
		content: "<p>Éstas locuras estarán relacionadas con el mundo de la programación y de la tecnología. Somos dos <del>programadores</del> gladiadores y pronto escribiremos nuestros artículos de presentación.</p><p>Por Capua!</p>",
		date: now,
		author: "ayozebarrera",
		tags: [ tagsId[1], tagsId[2] ]
	},
	{
		newArticle: true,
		title: "Sublime Text 3",
		picture: "/images/news/1.png",
		description: "<p>Como buenos gladiadores además de estar bien preparados es importante familiarizarnos con nuestras armas. Cuanto mas cómodos y adaptados estemos a nuestro entorno de batalla mayor será nuestro poder. Una de las herramientas mas importantes para un programador es su editor de texto/IDE.</p>",
		content: "...",
		date: now,
		author: "marioblas",
		tags: [ tagsId[8] ]
	}
];

if (Articles.find().count() === 0) {
	_.each(articles, function (article) {
		Articles.insert(article);
	});
}
