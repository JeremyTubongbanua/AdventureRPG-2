const CommandBase = require("./command_base");

class DebugCommand extends CommandBase {
	constructor() {
		super(["debug", "test"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		message.channel.send(user.toString() + " Channel ID: " + channel.id);
	}
}

module.exports = DebugCommand;
