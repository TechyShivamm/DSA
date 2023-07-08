//Question 1-Checking sum Zero - Problem-1
//[-5,-4,-3,-2,0,2,3,4,6,8] -input
//[?,?]->output
//if array shorted then ok otherwise need to shorted
//one by one compare ->[-4,4]

function getSumPairZero(array) {
  for (let number of array) {
    console.log("outer Loop");
    for (let j = 1; j < array.length; j++) {
      // console.log(j);
      console.log("inner loop");
      if (number + array[j] == 0) {
        return [number, array[j]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 3, 6, 4, 8]);
result;
//0(n^2) quadratic time complexity
//-------------------------OR--------------------------------------------------------
const sumPairFind = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

const result1 = sumPairFind([-5, -4, -3, -2, 0, 2, 3, 6, 4, 8]);
result;
// 0(n) linear time complexity
//---------------------------------------------------------------------------------
