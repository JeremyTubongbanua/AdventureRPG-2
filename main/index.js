const Discord = require("discord.js");
const token = require("./data/token.json").token;
const settings = require("./data/settings.json");
const DebugCommand = require("./commands/misc/debug_command");
const HelpCommand = require("./commands/misc/help_command");
const RegisterCommand = require("./commands/register_command");

const bot = new Discord.Client();

var commands = [new DebugCommand(), new HelpCommand(), new RegisterCommand()];

bot.on("ready", () => {
	console.log("MattyP is here and ready to simp");
	settings.activationChannelIds.forEach((channelId) => {
		bot.channels.fetch(channelId, false, false).then((channel) => {
			channel.send("MattyP is here and ready to simperino");
		});
	});
});

bot.on("message", (message) => {
	if (message.author == bot) return;

	var tmp = message.content.split(" ");
	const enteredCmd = tmp.shift().toLowerCase();
	const args = tmp;

	if (enteredCmd.startsWith(settings.prefix)) {
		commands.forEach((command) => {
			const prefixlessEnteredCmdSplit = enteredCmd.split("");
			const prefixlessEnteredCmd = prefixlessEnteredCmdSplit.slice(1, prefixlessEnteredCmdSplit.length).join("");
			if (command.names.includes(prefixlessEnteredCmd)) {
				command.run(message, args);
			}
		});
	}
});

console.log("Loading...");
bot.login(token);
