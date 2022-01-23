const fs = require("fs");

/**
 * Returns a parsed JSON
 * @param {string} filePath - file path of the json file (add .json at the end yourself)
 */
function readJSON(filePath) {
	return JSON.parse(fs.existsSync(filePath) ? fs.readFileSync(filePath) : "null");
}

/**
 * Receives a json object and writes it to a file
 * @param {string} filePath - No need to add .json at the end
 * @param {jsonObj} json - json object (will stringify)
 */
function writeJSON(filePath, json) {
	filePath += ".json";
	const stringified = JSON.stringify(json, null, 2);
	fs.writeFileSync(filePath, stringified);
}

module.exports.readJSON = readJSON;
module.exports.writeJSON = writeJSON;
