var quotes = ['NOOOOOOOOOOOOO',
	'Nope',
	'Noup',
	'No, amigui',
	'Si trabajas en salud entonces sí',
	'Si cuidas de alguien mayor, entonces sí',
	'Si te quedaste sin comida, tal vez',
	'Ehhh, no',
	'Ya te dije que no',
	'Si te quedaste sin comidita, sal con cuidado',
	'D-I-S-T-A-N-C-I-A-S-O-C-I-A-L',
	'¿ACASO NO LEES LAS NOTICIAS? NO!',
	'No, no, no',
	'Pero... no',
	'Solo si tienes un perrito que necesita salir',
	'Creo que no',
	'Mejor no',
	'Que no',
	'Si tienes que ir al hospital, asegúrate de llamar. Si no, no.',
	'Aun la respuesta es no',
	'No, pero un día esta página va a decir que sí, paciencia',
	'Pero no interactúes con nadie, porfi',
	'Si quieres aire fresco abre las ventas',
	'No es una buena idea',
	'Mmmm, yo no me arriesgaría',
	'Porfi no',
	'Mejor pide cosas por internet, si puedes',
	'No',
	'Ehemmmm... NO',
	'NO pero en mayúscula',
	'No-no',
	'Oh, no',
	'No, parce',

]


function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}