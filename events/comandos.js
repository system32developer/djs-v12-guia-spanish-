const Discord = require("discord.js"); //IMPORTAMOS DISCORD, TAMBIEN PUEDEN USARLO DESDE EL HANDLER
module.exports = {
	name: 'message', //EL EVENTO MESSAGE
	async execute(message, client) { // AQUI IMPORTAMOS CLIENT Y MESSAGE QUE ES DEL EVENTO
		if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try {
    let botperms = client.commands.get(command).botperm
    
    let perm = client.commands.get(command).permission
    if(!botperms){
    if(!perm){
            client.commands.get(command).execute(message, args, client, Discord);
        }else{
            var perms = message.member.hasPermission(perm)
            if(!perms) return message.channel.send("Necesitas el permiso **" + perm + "** para usar esto.")
            client.commands.get(command).execute(message, args, client, Discord);
        }
        }else{
          var botpe = message.guild.me.permissions.has(botperms)
            if(!botpe) return message.channel.send("Necesito el permiso **" + botperms + "** para usar esto.")
            if(!perm){
            client.commands.get(command).execute(message, args, client, Discord);
        }else{
            var perms = message.member.hasPermission(perm)
            if(!perms) return message.channel.send("Necesitas el permiso **" + perm + "** para usar esto.")
            client.commands.get(command).execute(message, args, client, Discord);
        }
        }
	} catch (error) {
		console.error(error);
		message.reply('Ocurrió un error al ejecutar este comando');
	}
	},
};