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
    if (arr[i] > max1) {
      // when something is bigger than the current biggest, make the second biggest equal to the first one
      max2 = max1;
      index2 = index1;
      // and make the current biggest equal to the newly found bigger value
      max1 = arr[i];
      index1 = i;
    } else if (arr[i] > max2) {
      // if the biggest is found, check to see if there are bigger values than the second biggest
      max2 = arr[i];
      index2 = i;
    }
  }

  // see if there are any blocks in between the 2 highest values
  if (Math.abs(index1 - index2) >= 2) {
    arr.forEach((e, i) => {
      // get the range for the values in the cavity
      if ((index1 < i && i < index2) || (index2 < i && i < index1)) {
        // calculate the water by getting the difference between the middle block values and the second highest value
        sumOfDiff += (max2 - e);
      }
    })
    // return sum of differences
    return sumOfDiff;

  } else {
    // no water found
    return 0;
  }
}

module.exports = cavity;
