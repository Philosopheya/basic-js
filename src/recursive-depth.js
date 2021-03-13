const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = 0;
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        count = this.calculateDepth(e);
        if (depth < count) depth = count;
      }
    });
    return depth + 1;
  }
};
