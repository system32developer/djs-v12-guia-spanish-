const fs = require('fs');
const Discord = require('discord.js'); 
const client = new Discord.Client(); 

const alive = require('./server.js')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));//TENEMOS DOS TIPOS DE EVENTOS, ONCE Y ON, ONCE SOLO FUNCIONARA 1 VEZ POR LO QUE USAREMOS ONCE READY Y LOS DEMAS USANDO ON
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

alive();
client.login('aqui-va-tu-token');