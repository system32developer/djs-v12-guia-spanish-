const fs = require('fs');
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const { prefix } = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {

	console.log('Listo!');}); 

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try {
    let perm = client.commands.get(command).permission
    if(!perm){
            client.commands.get(command).execute(message, args, client, Discord);
        }else{
            var perms = message.member.hasPermission(perm)
            if(!perms) return message.channel.send("Necesitas el permiso **" + perm + "** para usar esto.")
            client.commands.get(command).execute(message, args, client, Discord);
        }
	} catch (error) {
		console.error(error);
		message.reply('Ocurrió un error al ejecutar este comando');
	}
});

client.login('NzQ5MDkzMjc5OTQ5Mzg5OTA1.X0m9ew.hysdkb-KW1QuFPPW4wyPY_v8xTw');
