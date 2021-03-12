module.exports = {
	name: 'say',
	description: 'Manda un mensaje! (Requiere permisos)',
  permission: "MANAGE_MESSAGES",
	execute(message, args, client, Discord) {
		message.channel.send(args.join(" "))
	},
};