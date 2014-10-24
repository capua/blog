Template.notFound.rendered = function() {
	$('body').css({'background': '#fff'});
	// Fix para colocar el return link al final
	$('html, body, #site-wrapper').css({'height': '100%'});
	// Animamos el mensaje de error
	$('.not-found-msg').addClass('animated shake');
};

Template.notFound.destroyed = function() {
	$('body').css({'background': '#98bfd3'});
	// Fix para colocar el return link al final
	$('html, body, #site-wrapper').css({'height': 'inherit'});
};
