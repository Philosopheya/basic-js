const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string') {
    str = String(str);
  }

  let result = [];
  let addResult = [];

  if(!options.separator) {options.separator = "+";}

  if(options.hasOwnProperty('addition')) {
    if(typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if(!options.additionSeparator) {options.additionSeparator = "|";}
    for(let a = 0; a < options.additionRepeatTimes - 1; a += 1) {
      addResult.push(options.addition);
      addResult.push(options.additionSeparator);
    }
    addResult.push(options.addition);
    addResult.push(str);
    str = addResult.reverse().join('');
  }

for(let i = 0; i < options.repeatTimes - 1; i += 1) {
  result.push(str);
  result.push(options.separator);
}
result.push(str);
  
return result.join('');
}; 
