const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }

  // throw new CustomError('Not implemented');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] == "--discard-next") {
      newArr.pop();
    }

    if (arr[i - 1] == "--discard-next" && arr[i + 1] != "--discard-prev") {
      newArr.pop();
    } else if (
      arr[i - 1] == "--discard-next" &&
      arr[i + 1] == "--discard-prev"
    ) {
      newArr.splice(newArr.length - 1, 1, "***");
    }

    if (arr[i] == "--discard-prev") {
      newArr.pop();
      if (
        arr[i - 1] ||
        typeof arr[i - 1] == "boolean" ||
        typeof arr[i - 1] == "number"
      ) {
        newArr.splice(newArr.length - 1, 1);
      }
    }

    if (arr[i] == "--double-next") {
      newArr.pop();
      if (
        arr[i + 1] ||
        typeof arr[i + 1] == "boolean" ||
        typeof arr[i + 1] == "number"
      ) {
        newArr.push(arr[i + 1]);
      }
    }
    if (arr[i] == "--double-prev") {
      newArr.pop();
      if (
        (arr[i - 1] ||
          typeof arr[i - 1] == "boolean" ||
          typeof arr[i - 1] == "number") &&
        arr[i - 2] != "--discard-next"
      ) {
        newArr.push(arr[i - 1]);
      }
    }
  }

  return newArr;
};
