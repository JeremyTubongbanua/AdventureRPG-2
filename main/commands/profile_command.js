const CommandBase = require("./misc/command_base");
const userManager = require("../managers/user_manager");
const util = require("../utility/util");

class ProfileCommand extends CommandBase {
	constructor() {
		super(["profile", "prf"]);
	}

	run(message, args) {
		const channel = message.channel;
		const user = message.author;
		var userPrf = null;

		if (args.length == 0) {
			userPrf = userManager.getUser(user.id);
		} else if (args.length == 1) {
			userPrf = userManager.getUser(util.getIdFromAt(args[0]));
		} else {
			channel.send(user.toString() + " Invalid command usage. **.prf [@user]**");
			return;
		}

		//send embed
	}
}

module.exports = ProfileCommand;
