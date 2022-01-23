const CommandBase = require("./command_base");
const helpMsg = require("../../data/jsonmessages/helpMsg.json");

class HelpCommand extends CommandBase {
	constructor() {
		super(["help"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		channel.send(user.toString(), { embed: helpMsg.embed });
	}
}

module.exports = HelpCommand;
