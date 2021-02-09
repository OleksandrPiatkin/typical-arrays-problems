exports.min = function min (array) {
  if (typeof array !== "undefined" && array.length > 0) {
    const sorted = array.sort((a, b) => a - b);
    return sorted[0];
  }
  return 0;
}

exports.max = function max (array) {
  if (typeof array !== "undefined" && array.length > 0) {
    const sorted = array.sort((a, b) => b - a);
    return sorted[0];
  }
  return 0;
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    const sum = array.reduce((total, val) => total + val);
    return sum / array.length;
  }
  return 0;
}
