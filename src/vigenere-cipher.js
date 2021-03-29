const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = "true") {
    this.reverse = !reverse;
  }

  encrypt(string, key) {
    let stringEncryptedArr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringEncrypted = "";
    let sIndex = -1;
    let kIndex = -1;
    let rIndex = 0;
    const kLength = key.length;
    const sLength = string.length;

    if (kLength < sLength) {
      const m = Math.ceil(sLength / kLength);
      for (let i = 0; i < m - 1; i++) {
        key += key;
      }
    }
    let stringArr = string.toLowerCase().split("");

    let keyArr = key.toLowerCase().split("");

    for (let i = 0; i < stringArr.length; i++) {
      for (let a = 0; a < alphabet.length; a++) {
        if (stringArr[i] == alphabet[a]) {
          sIndex = a;
        }

        if (keyArr[i] == alphabet[a]) {
          kIndex = a;
        }
      }
      if (sIndex < 0) {
        keyArr.splice(i, 0, stringArr[i]);
        stringEncryptedArr.push(stringArr[i]);
      } else {
        rIndex = sIndex + kIndex;
        if (rIndex >= 26) {
          rIndex = rIndex - 26;
        }
        stringEncryptedArr.push(alphabet[rIndex]);
        sIndex = -1;
        kIndex = -1;
      }
    }
    if (this.reverse) {
      stringEncryptedArr = stringEncryptedArr.reverse();
    }
    stringEncrypted = stringEncryptedArr.join("").toUpperCase();
    return stringEncrypted;
  }
  decrypt(string, key) {
    let stringDecryptedArr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringDecrypted = "";
    let rIndex = -1;
    let kIndex = -1;
    let sIndex = 0;
    const kLength = key.length;
    const sLength = string.length;

    if (kLength < sLength) {
      const m = Math.ceil(sLength / kLength);
      for (let i = 0; i < m - 1; i++) {
        key += key;
      }
    }
    let stringArr = string.toLowerCase().split("");

    let keyArr = key.toLowerCase().split("");

    for (let i = 0; i < stringArr.length; i++) {
      for (let a = 0; a < alphabet.length; a++) {
        if (stringArr[i] == alphabet[a]) {
          rIndex = a;
        }

        if (keyArr[i] == alphabet[a]) {
          kIndex = a;
        }
      }
      if (rIndex < 0) {
        keyArr.splice(i, 0, stringArr[i]);
        stringDecryptedArr.push(stringArr[i]);
      } else {
        sIndex = rIndex - kIndex;
        if (sIndex < 0) {
          sIndex = sIndex + 26;
        }
        stringDecryptedArr.push(alphabet[sIndex]);
        rIndex = -1;
        kIndex = -1;
      }
    }
    if (this.reverse) {
      stringDecryptedArr = stringDecryptedArr.reverse();
    }
    stringDecrypted = stringDecryptedArr.join("").toUpperCase();
    return stringDecrypted;
  }
}

module.exports = VigenereCipheringMachine;
