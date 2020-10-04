
exports.min = function min (array) {

  if ((typeof array == "undefined")||(array.length == 0)) {
    return 0;
  }
  array.sort(function(a,b){ 
    return a - b
  });
  return array[0];
}

exports.max = function max (array) {
  if ((typeof array == "undefined")||(array.length == 0)) {
    return 0;
  }
  array.sort(function(a,b){ 
    return b - a
  });
  return array[0];
}

exports.avg = function avg (array) {
  if ((typeof array == "undefined")||(array.length == 0)) {
    return 0;
  }
  let sum = 0;
 array.forEach(item => {
    sum = sum + item;
  })
  return sum/(array.length);
}
