const classInfo = require("../data/classInfo.json");

/**
 * Returns class info given the class id
 * Check classInfo.json
 * @param {number} classId
 */
function getClassInfo(classId) {
	for (var i in classInfo) {
		const id = classInfo[i].id;
		if (classId == id) {
			return classInfo[i];
		}
	}
	return null;
}

function getIdFromAt(arg) {
	const id = arg.substring(3, arg.length - 1);
	return id;
}

function getAtFromId(id) {
	const at = "<@!" + id + ">";
	return at;
}

module.exports.getClassInfo = getClassInfo;
module.exports.getIdFromAt = getIdFromAt;
module.exports.getAtFromId = getAtFromId;
