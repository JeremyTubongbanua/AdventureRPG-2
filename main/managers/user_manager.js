const jsonutil = require("../utility/jsonutil");
const settings = require("../data/settings.json");

class UserManager {
	constructor() {}

	/**
	 * Registers a new user by writing a base template in settings.paths.usersFolderPath
	 * @param {string} discordId
	 * @param {number} classId - See classInfo.json
	 */
	registerNewUser(discordId, classId) {
		jsonutil.writeJSON(settings.paths.usersFolderPath + "\\" + discordId + ".json", { discordId: discordId, classId: classId });
	}

	/**
	 * Returns a JSON of the user
	 * @param {string} discordId
	 */
	getUser(discordId) {
		return jsonutil.readJSON(settings.paths.usersFolderPath + "\\" + discordId + ".json");
	}
}

const instance = new UserManager();
module.exports = instance;
