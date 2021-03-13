const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  let count = 1;
  if (Array.isArray(arr) == false) {
    return 1;
  } else {
    arr.forEach(e => {
      if (Array.isArray(e)) {
        let depth = this.calculateDepth(element) + 1;
        if (count < depth) {
          count = depth;
        }
      }
    });
    return max;
  }
};
};
