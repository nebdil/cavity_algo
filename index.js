let cavity = {};

cavity.area = function(arr) {

  let max1 = 0;
  let index1 = 0;
  let max2 = 0;
  let index2 = 0;
  let sumOfDiff = 0;

  // get max1 and max2
  for (let i = 0; i < arr.length; i++) {
    // find the highest block
    if (max1 < arr[i]) {
      max1 = arr[i];
      index1 = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    // find the second highest or the same height
    if (max2 < arr[i] && i !== index1) {
      max2 = arr[i];
      index2 = i;
    }
  }
  // see if there are any blocks in between them
  if(Math.abs(index1 - index2) >= 2) {
    // find the values of the ones in between
    if (index1 < index2) {
      // if index1 is on the left
      for (let i = (index1 + 1); i < index2; i++) {
        // calculate the water
        sumOfDiff += (max2 - arr[i]);
      }
    } else {
      // if index2 is on the left
      for (let i = (index2 + 1); i < index1; i++) {
        // calculate the water
        sumOfDiff += (max2 - arr[i]);
      }
    }

    // return sum of differences
    return sumOfDiff;
  } else {
    return 0;
  }
}

module.exports = cavity;
