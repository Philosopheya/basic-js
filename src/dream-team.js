const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let name = [];
  members.forEach(function (member) {
    if (typeof member == "string") name.push(member.trim()[0].toUpperCase());
  });
  return name.sort().join("");
};
