const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !parseInt(sampleActivity) || parseInt(sampleActivity) > MODERN_ACTIVITY || parseInt(sampleActivity) <= 0) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));
  }  
};

