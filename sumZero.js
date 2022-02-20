function addToZero(numsArr) { // O(n log n)
  if (numsArr.length <= 1) return false;

  for (let i = 0; i < numsArr.length; i++) { 
    for (let j = i + 1; j < numsArr.length; j++) {
      console.log(numsArr[i], numsArr[j])
      if (numsArr[i] + numsArr[j] === 0) {
        console.log(true)
        return true 
      } 
    }
  }
  console.log(false)
  return false
}


// addToZero([]);
// -> False

// addToZero([1]);
// -> False

// addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True