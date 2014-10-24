trimInput = function(value) {
	return value.replace(/^\s*|\s*$/g, '');
};

isNotEmpty = function(value, field) {
	if (value && value !== '') {
		Session.set(field + 'Empty', null);
		return true;
	}
	Session.set(field + 'Empty', 'Éste campo es obligatorio.');
	console.log('Please fill in all required fields.');
	return false;
};

isEmail = function(value, field) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(value)) {
		Session.set(field + 'NotEmail', null);
		return true;
	}
	Session.set(field + 'NotEmail', 'Introduce un email válido.');
	console.log('Please enter a valid email address.');
	return false;
};

areValidEmails = function(email, confirm) {
	if (email !== confirm) {
		Session.set('emailsNotEquals', 'Los emails no coinciden.');
		console.log('Your two emails ar not equivalent.');
		return false;
	}
	Session.set('emailsNotEquals', null);
	return true;
};

isValidPassword = function(password) {
	if (password.length < 6) {
		console.log('Your password should be 6 characters or longer.');
		return false;
	}
	return true;
};

areValidPasswords = function(password, confirm) {
	if (!isValidPassword(password)) {
		return false;
	}
	if (password !== confirm) {
		console.log('Your two passwords are not equivalent.');
		return false;
	}
	return true;
};

areConditionsAccepted = function(value) {
	if (value) {
		Session.set('conditionsNotAccepted', null);
		return true;
	}
	Session.set('conditionsNotAccepted', 'Debes aceptar las condiciones.');
	console.log('Please accept conditions.');
	return false;
};
