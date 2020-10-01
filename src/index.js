
exports.min = function min (array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let arr = array;
      let result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) result = arr[i];
      }
      return result;
    } else return 0;
  } else return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let arr = array;
      let result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (result < arr[i]) result = arr[i];
      }
      return result;
    } else return 0;
  } else return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let arr = array; 
      let summ = 0;
      for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
      }
      return summ / (arr.length);
    } else return 0;
  } else return 0;
}
