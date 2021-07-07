/*
Primero instalamos el paquete para manejar la db con npm install quick.db

Descargan el programa del enlace de aquí abajo para poder entender mejor la database
https://sqlitebrowser.org/dl/
Lo usaremos más tarde, los docs aquí abajo por si quieren ser más avanzados
https://quickdb.js.org/overview/docs
*/
var db = require('quick.db')

module.exports = {
	name: 'sumar',
	execute(message, args, client, Discord) {
		if(!db.has('balance')) return db.set('balance', 10)
		let actual = db.get('balance')
        await db.set('balance', actual+10)
		message.channel.send(`Ahora tienes ${db.get('balance')} monedas`)
	},
};

/*
Usamos db.has que en español seria database.tiene? en forma de pregunta, le pregunta a la database si
tiene la propiedad balance, si no la tiene la establece a '10' como default, pero si tiene le va a
sumar de 10 en 10.
Si quieren entender como funciona el programa que descargaron pregunten por el servidor de discord, es
muy útil
*/ 