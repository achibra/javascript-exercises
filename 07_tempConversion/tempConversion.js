const convertToCelsius = function(FHValue) {
  let C = (FHValue - 32) * (5 / 9);
  if (C === 0) {
    return C;
  } else {
    let result = C.toFixed(1);
    return result;
  }
};

const convertToFahrenheit = function(CValue) {
  let F = (CValue * (9 / 5)) + 32;
  if (F === 0) {
    return F;
  } else {
    let result = F.toFixed(1);
    return result;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
