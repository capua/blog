/*
{
	_id: objectId 						- id generado por mongo
	emails: array
		address: string					- dirección de email
		verified: boolean 				- verificado	
	profile: object 
		firstName: int 					- nombre
		lastName: int   				- apellidos
		dni: string       				- dni
		unitNumber: int 				- número de unidad
		company: string 				- nombre de la compañia
		city: string 					- ciudad
	services: object
		password: object
			bcrypt: string 				- contraseña encriptada
		resume: object
			loginTokens: object
				when: date 				- fecha de cuando se ha logeado
				hashedToken: string 	-  token para la sesion
}
*/