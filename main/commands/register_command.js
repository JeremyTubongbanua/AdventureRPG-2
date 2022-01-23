const CommandBase = require("./misc/command_base");
const userManager = require("../managers/user_manager");
const emojis = require("../data/emojis.json");
const classInfo = require("../data/classInfo.json");
const util = require("../utility/util");

class RegisterCommand extends CommandBase {
	constructor() {
		super(["register"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		const discordId = user.id;

		channel.send(user.toString() + " Choose a class (Expires in 60 seconds)").then((msg) => {
			msg.react(emojis.swords).then(() => {
				msg.react(emojis.shield).then(() => {
					msg.react(emojis.bow);
				});
			});

			const filter = (reaction, user) => {
				return [emojis.swords, emojis.shield, emojis.bow].includes(reaction.emoji.name) && user.id == discordId;
			};
			msg
				.awaitReactions(filter, { max: 1, time: 60 * 1000, errors: ["time"] })
				.then((collected) => {
					const reaction = collected.first().emoji.name;
					if (reaction == emojis.swords) {
						userManager.registerNewUser(discordId, classInfo.knight.id);
						channel.send(user.toString() + " You have chosen to be a Knight! " + emojis.swords);
					} else if (reaction == emojis.shield) {
						userManager.registerNewUser(discordId, classInfo.tank.id);
						channel.send(user.toString() + " You have chosen to be a Tank! " + emojis.shield);
					} else {
						userManager.registerNewUser(discordId, classInfo.archer.id);
						channel.send(user.toString() + " You have chosen to be a Archer! " + emojis.bow);
					}
				})
				.catch((collected) => {
					channel.send(user.toString() + " Your time has expired");
					console.log(collected);
				});
		});
	}
}

module.exports = RegisterCommand;
