
exports.min = function min (array) {
    if(typeof array === "undefined" || array.length === 0) {
      return 0; 
    } else {
      return Math.min.apply(Math, array);
    }
}

exports.max = function max (array) {
    if(typeof array === "undefined" || array.length === 0) {
      return 0; 
    } else {
      return Math.max.apply(Math, array);
    }
}

exports.avg = function avg (array) {
    if(typeof array === "undefined" || array.length === 0) {
      return 0; 
    }
    let sumOfnumbers = array.reduce((accumulator, currentValue) => (accumulator + currentValue));
    let average = sumOfnumbers / array.length;
    return average;
}

